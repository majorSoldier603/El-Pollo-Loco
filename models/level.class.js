class Level {
    bottles;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2800;

    constructor(bottles, enemies, clouds, backgroundObjects) {
        this.bottles = bottles
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        console.log(this)
    }
}