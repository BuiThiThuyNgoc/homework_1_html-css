import { useState } from "react";
import Drum from "./drumkit";
import './App.css';


function App() {
  const [sound, setSound] = useState([
    {
			name: "w",
			sound: require("./components/sound/crash.mp3"),
			key: "W",
    },
    {
			name: "a",
			sound: require("./components/sound/tom-1.mp3"),
			key: "A",
		},
    {
			name: "s",
			sound: require("./components/sound/tom-2.mp3"),
			key: "S",
		},
		{
			name: "d",
			sound: require("./components/sound/tom-4.mp3"),
			key: "D",
		},
		{
			name: "j",
			sound: require("./components/sound/snare.mp3"),
			key: "J",
		},
		{
			name: "k",
			sound: require("./components/sound/tom-3.mp3"),
			key: "K",
		},
		{
			name: "l",
			sound: require("./components/sound/kick-bass.mp3"),
			key: "L",
		},
	]);

	return (
		<div className="App">
			<h1 id='title'>Drum🥁Kit</h1>
			<div className="drums">
				{sound.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
				))}
			</div>
		</div>
	);
}

export default App;