class Circle {
    constructor(positionX, positionY, diameter, speed, deployTime, createShockwave, shootBullets) {
        const container = document.getElementById("game-area");
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
        this.circleElm.className = "circle";
        this.circleElm.setAttribute("data-radius", this.diameter/2);
        this.circleElm.setAttribute("data-type", "circle")
        container.appendChild(this.circleElm);
    }

    growAndActivate(callback) {
        if (this.activeState) return;

        const newDiameter = this.diameter * 3;
        const delta = (newDiameter - this.diameter) / 2;

        this.diameter = newDiameter;
        this.positionX -= delta;
        this.positionY -= delta;

        this.updateUI();

        setTimeout(() => {
            this.activeState = true;
            if (this.shouldCreateShockwave) {
                this.createShockwave();
            }
            if (this.shouldShootBullets) {
                this.shootBulletRing();
            }
            this.circleElm.classList.add("active");

            this.circleElm.classList.add("pulse1");

            setTimeout(() => {
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

    shootBulletRing() {
        const container = document.getElementById("game-area");
        const bulletCount = 12;
        const radius = this.diameter / 2;
        const centerX = this.positionX + radius;
        const centerY = this.positionY + radius;

        for (let i = 0; i < bulletCount; i++) {
            const angle = (2 * Math.PI / bulletCount) * i;
            const bullet = document.createElement("div");
            bullet.className = "bullet";
            container.appendChild(bullet);

            // Starting position
            bullet.style.left = centerX + "px";
            bullet.style.bottom = centerY + "px";

            // Travel
            const speed = 5;
            const dx = Math.cos(angle) * speed;
            const dy = Math.sin(angle) * speed;

            let steps = 0;
            function moveBullet() {
                if (steps++ > 100) return bullet.remove();

                const currentLeft = parseFloat(bullet.style.left);
                const currentBottom = parseFloat(bullet.style.bottom);

                bullet.style.left = currentLeft + dx + "px";
                bullet.style.bottom = currentBottom + dy + "px";

                requestAnimationFrame(moveBullet);
            }

            moveBullet();
        }
    }
}

const circleArr = [];
const bulletArr = [];

function circle(positionX, positionY, diameter, deployTime, createShockwave, shootBullets) {
    const newCircle = new Circle(positionX, positionY, diameter, 0, deployTime, createShockwave, shootBullets);
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


/* function checkBulletCollisions() {
    const collisionManager = new CollisionManager(player, bulletArr, () => {
        player.takeDamage();
        if (player.lives <= 0) {
            clearInterval(cubeRain);
            for (let i = bulletArr.length - 1; i >= 0; i--) {
                bulletArr.pop();
            }
            window.location.href = "gameover.html";
        }
    });

    collisionManager.checkCollisions();
    requestAnimationFrame(checkBulletCollisions);
}
 */