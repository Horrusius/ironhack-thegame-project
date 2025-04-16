class Circle {
    constructor(positionX, positionY, diameter, speed, deployTime, createShockwave, shootBullets, bulletAmmount, bulletSize, bulletSpeed, maxSteps) {
        const container = document.getElementById("game-area");

        this.type = "circle"
        this.radius = diameter / 2
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.diameter = diameter;
        this.speed = speed;
        this.deployTime = deployTime;
        this.activeState = false;

        this.positionX = positionX;
        this.positionY = positionY;

        this.shouldCreateShockwave = createShockwave;
        this.shouldShootBullets = shootBullets;
        this.bulletAmmount = bulletAmmount;
        this.bulletSize = bulletSize;
        this.bulletSpeed = bulletSpeed;
        this.maxSteps = maxSteps;

        this.circleElm = document.createElement("div");
        this.createDomElement(container);
        this.updateUI();
    }

    updateUI() {
        this.circleElm.style.left = this.positionX + "px";
        this.circleElm.style.bottom = this.positionY + "px";
        this.circleElm.style.width = this.diameter + "px";
        this.circleElm.style.height = this.diameter + "px";
    }

    createDomElement(container) {
        this.circleElm.className = this.type
        container.appendChild(this.circleElm);
    }

    growAndActivate(callback) {
        if (this.activeState) return;

        const newDiameter = this.diameter * 3;
        const centerX = this.positionX + this.diameter / 2;
        const centerY = this.positionY + this.diameter / 2;

        this.diameter = newDiameter;
        this.radius = newDiameter / 2;

        this.positionX = centerX - this.radius;
        this.positionY = centerY - this.radius;

        this.updateUI();

        setTimeout(() => {
            this.activeState = true;
            if (this.shouldCreateShockwave) {
                this.createShockwave();
            }
            
            this.circleElm.classList.add("active");

            this.circleElm.classList.add("pulse1");
            console.log(this.bulletAmmount);

            setTimeout(() => {
                if (this.shouldShootBullets) {
                    Bullet.shootBulletRing(centerX, centerY, this.bulletAmmount, this.bulletSize, this.bulletSpeed, this.maxSteps);
                    startBulletCollisionChecker();
                }
                this.circleElm.classList.remove("pulse1");
                if (callback) callback();
            }, 80);

            setTimeout(() => {
                this.circleElm.remove();
                const index = circleArr.indexOf(this);
                if (index !== -1) circleArr.splice(index, 1);
            }, 300);

        }, 900);
    }

    createShockwave() {
        const shockwave = document.createElement("div");
        shockwave.className = "shockwave";

        shockwave.style.left = this.positionX + this.diameter / 2 + "px";
        shockwave.style.bottom = this.positionY + this.diameter / 2 + "px";

        const container = document.getElementById("game-area");
        container.appendChild(shockwave);

        setTimeout(() => {
            shockwave.remove();
        }, 600);
    }
}

const circleArr = [];

function circle(positionX, positionY, diameter, speed, deployTime, createShockwave, shootBullets, bulletAmmount, bulletSize, bulletSpeed, maxSteps) {
    const newCircle = new Circle(positionX, positionY, diameter, speed, deployTime, createShockwave, shootBullets, bulletAmmount, bulletSize, bulletSpeed, maxSteps);
    circleArr.push(newCircle);

    setTimeout(() => {
        newCircle.growAndActivate(() => {
            const collisionManager = new CollisionManager(player, circleArr, () => {
                player.takeDamage();
                player.updateLivesUI();

                if (player.lives <= 0) {
                    clearInterval(cubeRain);
                    for (let i = circleArr.length - 1; i >= 0; i--) {
                        circleArr.pop();
                    }
                    window.location.href = "gameover.html";
                }
            });

            function collisionChecker() {
                const activeCircles = circleArr.filter(circle => circle.activeState);
                collisionManager.elements = activeCircles;

                collisionManager.checkCollisions();
                requestAnimationFrame(collisionChecker);
            }

            requestAnimationFrame(collisionChecker);
        });
    }, 100);

}