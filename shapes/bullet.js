class Bullet {
    constructor(positionX, positionY, width, height, angle, speed = 5, maxSteps = 100) {
        this.type = "bullet";
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.radius = height / 2;
        this.angle = angle;
        this.speed = speed;
        this.maxSteps = maxSteps;
        this.steps = 0;

        this.dx = Math.cos(this.angle) * this.speed;
        this.dy = Math.sin(this.angle) * this.speed;

        this.bulletElm = document.createElement("div");
        this.bulletElm.className = "bullet fireball spawn";

        setTimeout(() => {
            this.bulletElm.classList.remove("spawn");
        }, 100);

        this.bulletElm.style.position = "absolute";
        this.bulletElm.style.width = this.width + "px";
        this.bulletElm.style.height = this.height + "px";
        this.bulletElm.style.left = this.positionX + "px";
        this.bulletElm.style.bottom = this.positionY + "px";

        document.getElementById("game-area").appendChild(this.bulletElm);

        this.move();
        this.updateUI();
    }

    updateUI() {
        this.bulletElm.style.left = this.positionX + "px";
        this.bulletElm.style.bottom = this.positionY + "px";
    }

    move() {
        if (this.steps++ > this.maxSteps) {
            this.bulletElm.remove();
            return;
        }

        this.positionX += this.dx;
        this.positionY += this.dy;

        this.updateUI();

        requestAnimationFrame(this.move.bind(this));
    }

    static shootBulletRing(centerX, centerY, bulletCount = 12, bulletSize = 10, speed = 5, maxSteps = 100) {
        for (let i = 0; i < bulletCount; i++) {
            const angle = (2 * Math.PI / bulletCount) * i;
            const bulletX = centerX - bulletSize / 2;
            const bulletY = centerY - bulletSize / 2;
            const newBullet = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle, speed, maxSteps);
            bulletArr.push(newBullet);
        }
    }

    static spinningSpiral(centerX, centerY, bulletCount = 100, bulletSize = 10, bulletSpeed = 2, interval = 100, maxSteps = 300) {
        let angle = 0;
        let count = 0;
    
        function shoot() {
            if (count++ >= bulletCount) return;
    
            const bulletX = centerX - bulletSize / 2;
            const bulletY = centerY - bulletSize / 2;
            const newBullet = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle, bulletSpeed, maxSteps);
            bulletArr.push(newBullet);
    
            angle += 0.2;
            setTimeout(shoot, interval);
        }
    
        shoot();
    }

    static explodingBurst(centerX, centerY, bulletSize = 10, bulletSpeed = 5, bulletCount = 24, maxSteps) {
        for (let i = 0; i < bulletCount; i++) {
            const angle = (2 * Math.PI / bulletCount) * i;
            const bulletX = centerX - bulletSize / 2;
            const bulletY = centerY - bulletSize / 2;
            const newBullet = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle, bulletSpeed, maxSteps);
            bulletArr.push(newBullet);
        }
    }

    static wavePattern(startX, startY, bulletSize = 10, bulletSpeed = 5, rows = 5, spacing = 30) {
        for (let i = 0; i < rows; i++) {
            const angle = Math.PI / 2; // Straight up
            const bulletX = startX + i * spacing;
            const bulletY = startY;
            const newBullet = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle, bulletSpeed);
            bulletArr.push(newBullet);
        }
    }

    static alternatingSpiral(centerX, centerY, bulletSize = 10, bulletSpeed = 5, totalSteps = 60, interval = 100) {
        let step = 0;

        function shoot() {
            if (step++ >= totalSteps) return;

            const angle1 = step * 0.2;
            const angle2 = -step * 0.2;
            const bulletX = centerX - bulletSize / 2;
            const bulletY = centerY - bulletSize / 2;

            const bullet1 = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle1, bulletSpeed);
            const bullet2 = new Bullet(bulletX, bulletY, bulletSize, bulletSize, angle2, bulletSpeed);

            bulletArr.push(bullet1, bullet2);

            setTimeout(shoot, interval);
        }

        shoot();
    }
}

const bulletArr = [];

function bullet(positionX, positionY, width, height, angle, speed = 5, maxSteps = 100) {
    const newBullet = new Bullet(positionX, positionY, width, height, angle, speed, maxSteps);
    bulletArr.push(newBullet);
}

function startBulletCollisionChecker() {
    const collisionManager = new CollisionManager(player, bulletArr, () => {
        player.takeDamage();
        player.updateLivesUI();

        if (player.lives <= 0) {
            clearInterval(cubeRain);
            for (let i = bulletArr.length - 1; i >= 0; i--) {
                bulletArr.pop();
            }
            window.location.href = "gameover.html";
        }
    });

    function collisionChecker() {
        collisionManager.elements = bulletArr;
        collisionManager.checkCollisions();
        requestAnimationFrame(collisionChecker);
    }

    requestAnimationFrame(collisionChecker);
}