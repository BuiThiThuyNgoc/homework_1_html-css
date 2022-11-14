var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("tom-1.mp3");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("tom-2.mp3");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('tom-3.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('tom-4.mp3');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio('snare.mp3');
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('crash.mp3');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('kick-bass.mp3');
	sound7.play();
	break;

	case "z":
	var sound8 = new Audio('mixkit-guitar-string-tone-2326.wav');
	sound8.play();
	break;

	case "x":
	var sound9 = new Audio('mixkit-acute-guitar-single-string-2325.wav');
	sound9.play();
	break;

	case "c":
	var sound10 = new Audio('mixkit-short-guitar-strum-2318.wav');
	sound10.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}