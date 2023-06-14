class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2800;
    music_sound = new Audio('audio/music.mp3');

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.music_sound.autoplay = true;
        this.music_sound.pause()
    }
}