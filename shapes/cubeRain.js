class CubeRain {
    constructor(width, height, speed) {
        this.width = width;
        this.height = height;
        this.speed = speed;

        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = Math.floor(Math.random() * (this.gameWidth - this.width));
        this.positionY = this.gameHeight;

        this.createDomElement(container);
        this.updateUI();

        this.projectile;
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
const projectileArr = [];

function cubeRain(width, height, speed, activeTime, spawnRate) {
    let spawningActive = true;
  
    const spawnInterval = setInterval(() => {
        const newProjectile = new CubeRain(width, height, speed);
        projectileArr.push(newProjectile);
    }, spawnRate);

    setTimeout(() => {
        clearInterval(spawnInterval);
        spawningActive = false;
    }, activeTime);

    const moveInterval = setInterval(() => {
        for (let i = projectileArr.length - 1; i >= 0; i--) {
            const projectile = projectileArr[i];
            projectile.moveDown();

            const left = parseInt(projectile.cubeRainElm.style.left, 10);
            const bottom = parseInt(projectile.cubeRainElm.style.bottom, 10);

            if (left < 0 || bottom < 0 || left > this.gameWidth || bottom > this.gameHeight) {
                projectile.cubeRainElm.remove();
                projectileArr.splice(i, 1);
            }
        }

        if (!spawningActive && projectileArr.length === 0) {
            clearInterval(moveInterval);
        }
    }, 20);

    const collisionManager = new CollisionManager(player, projectileArr, () => {
        player.takeDamage();
        player.updateLivesUI();

        if (player.lives <= 0) {
            clearInterval(cubeRain);
            for (let i = projectileArr.length - 1; i >= 0; i--) {
                projectileArr.pop();
            }
            window.location.href = "gameover.html";
        }
    });
    function collisionChecker() {
        projectileArr.forEach(p => p.moveDown());
        collisionManager.checkCollisions();
    
        requestAnimationFrame(collisionChecker);
    }
    
    requestAnimationFrame(collisionChecker);
}