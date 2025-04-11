class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 4;
        this.height = 4;
    }
    updateUI(){
        const playerElm = document.getElementById("player");
        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vh";
        playerElm.style.width = this.width + "vw";
        playerElm.style.height = this.height + "vh";
    }
    moveLeft(){
        this.positionX--;
        this.updateUI();
        if(this.positionX <= 0){
            return this.positionX++;
        }
        console.log("New position...", this.positionX)
    }
    moveRight(){
        this.positionX++;
        this.updateUI();
        if(this.positionX >= 100){
            return this.positionX--;
        }
        console.log("New position...", this.positionX)
    }

}

const player = new Player ()

document.addEventListener("keydown", (e) => {
    if(e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight"){
        player.moveRight();
    }
})