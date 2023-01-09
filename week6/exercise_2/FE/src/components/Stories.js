import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
    return(
        <StoriesWrapper>
            <Story
                image='https://i1-giaitri.vnecdn.net/2022/12/06/jenna-ortega-for-ign-june-2022-1-1670298327.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=mdRuq_7wCkELFcMpVYwDHg'
                profileSrc='https://assets-cache0.moviebreak.de/system/bilder/story/photo/62fd08106e73330bbf370000/wed1.png'
                title='Wednesday
            <Story
                image='https://vtv1.mediacdn.vn/thumb_w/650/2022/11/9/harry-potter-movies-on-netflix-16680026001851180106348-crop-16680026077391903865045.jpg'
                profileSrc='https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/WhatsApp-Image-2021-11-16-at-14.52.17.jpeg?w=876&h=484&crop=1'
                title='harry potter'
            />
            <Story
                image='https://static-images.vnncdn.net/files/publish/2022/5/22/still-2-167.jpg'
                profileSrc='https://gamesao.vnncdn.net/Resources/Upload/Images/Editor/39/doraemon-gadget-cat-from-the-future-wallpaper-4.jpg'
                title='doraemon'
            />
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories