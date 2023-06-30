music_sound = new Audio('audio/music.mp3');

function unMute() {
    music_sound.play();
    document.getElementById("soundMasterBnt").onclick = mute;
    document.getElementById("soundMasterBnt").children[0].src = "/img/11_overlay/volume.png";
}

function mute() {
    music_sound.pause();
    document.getElementById("soundMasterBnt").onclick = unMute;
    document.getElementById("soundMasterBnt").children[0].src = "img/11_overlay/mute.png";
}

function fullscreen() {
    canvasSec = document.getElementById("canvasSec")

    if (canvasSec.fullscreenElement === true) {
        document.exitFullscreen();
        canvasSec.fullscreenElement = false;
    } else {
        canvasSec.fullscreenElement = true;
        canvasSec.requestFullscreen();
    }
}

function left(value) {
    keyboard.LEFT = value;
}

function right(value) {
    keyboard.RIGHT = value;
}

function up(value) {
    keyboard.SPACE = value;
}
// uncomment while testing
// Disable the default context menu on the document
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});