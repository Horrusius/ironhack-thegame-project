class Projectile {
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
        this.projectileElm.style.left = this.positionX + "px";
        this.projectileElm.style.bottom = this.positionY + "px";
        this.projectileElm.style.width = this.width + "px";
        this.projectileElm.style.height = this.height + "px";
    }


    createDomElement(container) {
        this.projectileElm = document.createElement("div");
        this.projectileElm.className = "projectile";
        container.appendChild(this.projectileElm);
    }

    moveDown() {
        this.positionY -= this.speed;
        this.updateUI();
    }
}

