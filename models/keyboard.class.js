class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    F = false;

    startTime = 0;
    endTime = 0;
    timeSinceLastInput = -1;

    constructor() {

    }

    isInactive() {
        setInterval(() => {
            if (this.LEFT == false && this.RIGHT == false && this.UP == false && this.DOWN == false && this.SPACE == false && this.D == false && this.F == false) {
                this.startTime = new Date().getTime();
            }
        }, 50);
    }

    isActive() {
        setInterval(() => {
            if (this.LEFT == true || this.RIGHT == true || this.UP == true || this.DOWN == true || this.SPACE == true || this.D == true || this.F == true) {
                this.endTime = new Date().getTime();
            }
        }, 50);
    }

    measureTime() {
        setInterval(() => {
            if (this.endTime > -0) {
                this.timeSinceLastInput = this.endTime - this.startTime;
                this.timeSinceLastInput = this.timeSinceLastInput / 1000
            }
        }, 500);
    }



}

