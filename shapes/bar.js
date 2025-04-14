class Bar {
    constructor(){
        this.width = 6;
        this.height = 6;
        
        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = Math.floor(Math.random() * (this.gameWidth - this.width));
        this.positionY = this.gameHeight;

        this.createDomElement(container);
        this.updateUI();
    }

    updateUI() {
        this.barElm.style.left = this.positionX + "px";
        this.barElm.style.bottom = this.positionY + "px";
        this.barElm.style.width = this.width + "px";
        this.barElm.style.height = this.height + "px";
    }

    createDomElement(container) {
        this.barElm = document.createElement("div");
        this.barElm.className = "bar";
        container.appendChild(this.barElm);
    }

    moveDown() {
        this.positionY -= this.speed;
        this.updateUI();
    }
}