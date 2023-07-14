let canvas;
let world;
let keyboard = new Keyboard();

async function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    unMute()
    if (world.level.isStarted === true) {
        location.reload()
    }
    overlayimgsjunglediff = document.getElementById("overlayimgsjunglediff")
    playbnt = document.getElementById("playbnt")

    overlayimgsjunglediff.appendChild(playbnt);
    playbnt.className = "overlaybnts"

    world.level.isStarted = true;
    world.keyboard.isInactive()
    world.keyboard.isActive()
    world.keyboard.measureTime()
    //console.log('My Character is', world.character);
}

let handlekeydown = (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    isGameOver("keydown", handlekeydown)
}


let handlekeyup = (e) => {

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
    isGameOver("keyup", handlekeyup)
}

window.addEventListener("keydown", handlekeydown)
window.addEventListener("keyup", handlekeyup)

function isGameOver(isupdown, handleuporedown) {
    setInterval(() => {
        if (world !== undefined && world.gameover.gameOver == true) {
            window.removeEventListener(isupdown, handleuporedown)

            world.keyboard.D = false
            world.keyboard.F = false
            world.keyboard.DOWN = false
            world.keyboard.LEFT = false
            world.keyboard.RIGHT = false
            world.keyboard.SPACE = false
            world.keyboard.UP = false

        }
    }, 100);
}