class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 5;
        this.height = 5;
        this.updateUI();
    };
    updateUI() {
        const playerElm = document.getElementById("player");
        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vh";
        playerElm.style.width = this.width + "vw";
        playerElm.style.height = this.height + "vw";
    };
    moveLeft() {
        this.positionX--;
        this.updateUI();
        if (this.positionX <= 0) {
            return this.positionX++;
        };
        console.log("New position...", this.positionX);
    };
    moveRight() {
        this.positionX++;
        this.updateUI();
        if (this.positionX >= (100 - this.width)) {
            return this.positionX--;
        };
        console.log("New position...", this.positionX);
    };

};



class Projectile {
    constructor() {
        this.width = 5;
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1))
        this.positionY = 100;
        this.speed = 5;


        this.createDomElement();
        this.projectileElm;

        this.updateUI();
    };
    createDomElement() {
        this.projectileElm = document.createElement("div");
        this.projectileElm.className = "projectile";
        const container = document.getElementById("board");
        container.appendChild(this.projectileElm);
    };
    updateUI() {

        this.projectileElm.style.left = this.positionX + "vw";
        this.projectileElm.style.bottom = this.positionY + "vh";
        this.projectileElm.style.width = this.width + "vw";
        this.projectileElm.style.height = this.height + "vw";
    };
    moveDown() {
        this.positionY--;
        this.updateUI();
        console.log("New position...", this.positionY);
    };

};



const player = new Player();

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight") {
        player.moveRight();
    };
});

const projectileArr = [];

//generate projectiles
setInterval(() => {
    newProjectile = new Projectile();
    projectileArr.push(newProjectile);
    console.log("creating a new projectile")
}, 3000)

//move projectiles
    setInterval(() => {
        projectileArr.forEach((projectileInstance) => {
            projectileInstance.moveDown();
            if (
                player.positionX < projectileInstance.positionX + projectileInstance.width &&
                player.positionX + player.width > projectileInstance.positionX &&
                player.positionY < projectileInstance.positionY + projectileInstance.height &&
                player.positionY + player.height > projectileInstance.positionY
            ) {
                console.log("Got hit!.............");
                window.location.href = "gameover.html";
            }
        })
    } , 100)


    /* if (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y
    ) {
        
    } */