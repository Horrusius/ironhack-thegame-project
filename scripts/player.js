class Player {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.width = 30;
        this.height = 30;
        this.speed = 2.5;

        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = container.clientWidth/2 -this.width/2;
        this.positionY = 0;

        this.pressedKeys = {};

        this.initControls();
        this.move();
        this.updateUI();
        this.gameLoop();
    }

    initControls() {
        document.addEventListener("keydown", (e) => {
            this.pressedKeys[e.code] = true;
        });

        document.addEventListener("keyup", (e) => {
            this.pressedKeys[e.code] = false;
        });
    }

    updateUI() {
        this.element.style.left = this.positionX + "px";
        this.element.style.bottom = this.positionY + "px";
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
    }

    move() {
        if (this.pressedKeys.ArrowLeft) {
            this.positionX -= this.speed;
        }
        if (this.pressedKeys.ArrowRight) {
            this.positionX += this.speed;
        }
        if (this.pressedKeys.ArrowUp) {
            this.positionY += this.speed;
        }
        if (this.pressedKeys.ArrowDown) {
            this.positionY -= this.speed;
        }

        const gameArea = document.getElementById("game-area");
        const gameWidth = gameArea.clientWidth;
        const gameHeight = gameArea.clientHeight;
        
        this.positionX = Math.max(0, Math.min(this.positionX, gameWidth - this.width));
        this.positionY = Math.max(0, Math.min(this.positionY, gameHeight - this.height));
    }

    gameLoop() {
        this.move();
        this.updateUI();
        requestAnimationFrame(() => this.gameLoop());
    }
}

