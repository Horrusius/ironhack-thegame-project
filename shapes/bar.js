class Bar {
    constructor(positionX, positionY, width, height, speed, deployTime){
        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.width = width;
        this.height = height;
        this.speed = speed;
        this.deployTime = deployTime;
        this.activeState = false;

        this.positionX = positionX;
        this.positionY = positionY;

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
    moveUp() {
        this.positionY += this.speed;
        this.updateUI();
    }
    moveLeft() {
        this.positionX -= this.speed;
        this.updateUI();
    }
    moveRight() {
        this.positionX += this.speed;
        this.updateUI();
    }
}

const barArr = [];

function bar(positionX, positionY, width, height){
    const newBar = new Bar(positionX, positionY, width, height);
    barArr.push(newBar);

    const collisionManager = new CollisionManager(player, barArr, () => {
        player.lives--;
        player.updateLivesUI();

        if (player.lives <= 0) {
            clearInterval(cubeRain);
            for (let i = barArr.length - 1; i >= 0; i--) {
                barArr.pop();
            }
        }
    });

    function collisionChecker() {
        collisionManager.checkCollisions();
    
        requestAnimationFrame(collisionChecker);
    }
    
    requestAnimationFrame(collisionChecker);
}