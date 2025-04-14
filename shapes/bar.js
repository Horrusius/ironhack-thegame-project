class Bar {
    constructor(){
        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = Math.floor(Math.random() * (this.gameWidth - this.width));
        this.positionY = this.gameHeight;

        this.createDomElement(container);
        this.updateUI();
    }
}