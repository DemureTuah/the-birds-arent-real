window.onload = function () {

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const target = document.getElementById('body');
const audio = document.getElementById('background-audio');

red.addEventListener('mouseover', () => {
    target.style.backgroundImage = 'url("img/sky-red.jpg")';
    blue.style.visibility = 'hidden';
    audio.src = 'audio/2.ogg';
});

red.addEventListener('mouseout', () => {
    target.style.backgroundImage = 'url("img/sky.jpg")';
    blue.style.visibility = 'visible';
    audio.src = 'audio/1.ogg';
});

blue.addEventListener('mouseover', () => {
    target.style.backgroundImage = 'url("img/sky-blue.jpg")';
    red.style.visibility = 'hidden';
    audio.src = 'audio/4.ogg';
});

blue.addEventListener('mouseout', () => {
    target.style.backgroundImage = 'url("img/sky.jpg")';
    red.style.visibility = 'visible';
    audio.src = 'audio/1.ogg';
});
}