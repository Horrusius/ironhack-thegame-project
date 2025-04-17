class Bar {
    constructor(positionX, positionY, width, height, speed, growTime = 900, activeTime = 300, pulseTime = 80) {
        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.width = width;
        this.height = height;
        this.speed = speed;
        this.growTime = growTime;
        this.activeTime = activeTime;
        this.pulseTime = pulseTime;
        this.activeState = false;

        this.positionX = positionX;
        this.positionY = positionY;

        this.barElm = document.createElement("div");
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
        this.barElm.className = "bar";
        container.appendChild(this.barElm);
    }

    growAndActivate(callback) {
        if (this.activeState) return;

        const newWidth = this.width * 3;
        const newHeight = this.height * 3;

        const deltaX = (newWidth - this.width) / 2;
        const deltaY = (newHeight - this.height) / 2;

        this.width = newWidth;
        this.height = newHeight;
        this.positionX -= deltaX;
        this.positionY -= deltaY;

        this.updateUI();

        setTimeout(() => {
            this.activeState = true;
            this.barElm.classList.add("active");

            this.barElm.classList.add("pulse1");

            setTimeout(() => {
                this.barElm.classList.remove("pulse1");

                if (callback) callback();
            }, this.pulseTime);
            setTimeout(() => {
                this.barElm.remove();
                const index = barArr.indexOf(this);
                if (index !== -1) barArr.splice(index, 1);

            }, this.activeTime);

        }, this.growTime);
    }
}

const barArr = [];

function bar(positionX, positionY, width, height, growTime, activeTime, pulseTime) {
    const newBar = new Bar(positionX, positionY, width, height, 0, growTime, activeTime, pulseTime);
    barArr.push(newBar);

    setTimeout(() => {
        newBar.growAndActivate(() => {
            // CollisionManager for bars
            const collisionManager = new CollisionManager(player, barArr, () => {
                player.takeDamage();
                player.updateLivesUI();

                if (player.lives <= 0) {
                    clearInterval(cubeRain);
                    for (let i = barArr.length - 1; i >= 0; i--) {
                        barArr.pop();
                    }
                    window.location.href = "gameover.html";
                }
            });

            function collisionChecker() {
                const activeBars = barArr.filter(bar => bar.activeState);
                collisionManager.elements = activeBars;

                collisionManager.checkCollisions();
                requestAnimationFrame(collisionChecker);
            }

            requestAnimationFrame(collisionChecker);
        });
    }, 100)
}