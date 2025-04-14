class CubeRain {
    constructor() {
        this.width = 6;
        this.height = 6;
        this.speed = 1;

        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = Math.floor(Math.random() * (this.gameWidth - this.width));
        this.positionY = this.gameHeight;

        this.createDomElement(container);
        this.updateUI();
    }

    updateUI() {
        this.cubeRainElm.style.left = this.positionX + "px";
        this.cubeRainElm.style.bottom = this.positionY + "px";
        this.cubeRainElm.style.width = this.width + "px";
        this.cubeRainElm.style.height = this.height + "px";
    }


    createDomElement(container) {
        this.cubeRainElm = document.createElement("div");
        this.cubeRainElm.className = "cubeRain";
        container.appendChild(this.cubeRainElm);
    }

    moveDown() {
        this.positionY -= this.speed;
        this.updateUI();
    }
}