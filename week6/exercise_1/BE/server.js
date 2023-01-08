const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const Pusher = require('pusher')
const Posts = require('./dbpostsModel')
const dotenv = require('dotenv')

mongoose.set("strictQuery", false);

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const URI = process.env.MONGODB_URL

const pusher = new Pusher({
    appId: process.env.PUSHER_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: 'ap1',
    useTLS: true
})



app.use(express.json())
app.use(Cors())

mongoose.connect(URI, {
    // useNewParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB connected')
    const changeStream = mongoose.connection.collection('post').watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === 'insert') {
            console.log('Trigerring Pusher')
            pusher.trigger('posts', 'inserted', {
                change: change
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
})

app.get('/', (req, res) => res.status(200).send('Hello thuyngoc'))

app.post('/upload', (req, res) => {
    const dbPost = req.body
    Posts.create(dbPost, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/sync', (req, res) => {
    Posts.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))