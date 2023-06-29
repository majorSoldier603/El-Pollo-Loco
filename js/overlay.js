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
      } else {
        canvasSec.fullscreenElement = true;
        canvasSec.requestFullscreen();
      }
}

function left(value) {
    event.preventDefault();
    keyboard.LEFT = value;
}

function right(value) {
    event.preventDefault();
    keyboard.RIGHT = value;
}

function up(value) {
    event.preventDefault();
    keyboard.SPACE = value;
}

function goJump() {
    world.character.world.keyboard.SPACE = true;
    setTimeout(() => {
        world.character.world.keyboard.SPACE = false;
    }, 60);
}

function stopJump() {
    world.character.world.keyboard.SPACE = true;
}


// Disable the default context menu on the document
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
  
  // Handle the right-click event on the document
  document.addEventListener('mousedown', function (event) {
    if (event.button === 3) {
      // Right-click is triggered
      // Your custom logic here
      console.log('Right-clicked!');
    }
  });