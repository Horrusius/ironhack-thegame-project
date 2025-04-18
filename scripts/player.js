class Player {
    constructor(elementId, lives) {
        this.element = document.getElementById(elementId);
        this.width = 20;
        this.height = 18;
        this.speed = 4;
        this.lives = lives;
        this.isInvincible = false;
        this.invincibilityDuration = 1000;
        this.isRolling = false;
        this.canRoll = true;
        this.rollDuration = 300;
        this.rollCooldown = 400;
        this.rollSpeed = 8;

        const container = document.getElementById("game-area");
        this.gameWidth = container.clientWidth;
        this.gameHeight = container.clientHeight;

        this.positionX = container.clientWidth / 2 - this.width / 2;
        this.positionY = 240;

        this.pressedKeys = {};

        this.frameWidth = 64;  
        this.frameHeight = 64;
        this.frameCount = 6;   
        this.currentFrame = 0;
        this.animationSpeed = 100; 
        this.lastFrameTime = 0;

        this.lastDirection = 'down';
        this.currentImgPath = "";

        this.element.style.backgroundRepeat = "no-repeat";
        this.element.style.backgroundSize = `${(this.frameWidth * this.frameCount)}px ${this.frameHeight}px`;
        this.element.style.imageRendering = "pixelated";

        this.offsetX = -22;
        this.offsetY = -22;

        this.initControls();
        this.move();
        this.updateUI();
        this.gameLoop();

        this.allowMovement = false;
        this.fallAndLand();
    }
    fallAndLand() {
        this.element.style.transition = "transform 2s ease-in, bottom 2s ease-in";
        this.element.style.bottom = "500px";
        this.element.style.transform = "rotate(0deg)";
    
        void this.element.offsetWidth;
    
        setTimeout(() => {
            this.element.style.bottom = "240px";
            this.element.style.transform = "rotate(720deg)";
        }, 100);
    
        // After falling is complete
        setTimeout(() => {
            this.element.style.transition = "";
            this.element.style.transform = "rotate(0deg)";
    
            createParticleExplosion(this.positionX + this.width / 2, this.positionY, 10);
    
            this.allowMovement = true;
        }, 2000);
    }

    initControls() {
        document.addEventListener("keydown", (e) => {
            this.pressedKeys[e.code] = true;

            if (e.code === "Space" && this.canRoll && !this.isRolling) {
                this.startRoll();
            }
        });

        document.addEventListener("keyup", (e) => {
            this.pressedKeys[e.code] = false;
        });
    }

    updateUI() {
        this.element.style.left = this.positionX + "px";
        this.element.style.bottom = this.positionY + "px";
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
    }

    updateSpriteImage() {
        let imgPath = '';

        switch (this.lastDirection) {
            case 'up':
                imgPath = "assets/Slime1/Idle/Slime1_Idle_backwards.png";
                break;
            case 'left':
                imgPath = "assets/Slime1/Idle/Slime1_Idle_left.png";
                break;
            case 'right':
                imgPath = "assets/Slime1/Idle/Slime1_Idle_right.png";
                break;
            case 'down':
            default:
                imgPath = "assets/Slime1/Idle/Slime1_Idle_forwards.png";
                break;
        }

        if (this.currentImgPath !== imgPath) {
            this.element.style.backgroundImage = `url('${imgPath}')`;
            this.currentImgPath = imgPath;
        }
    }

    animate(timestamp) {
        if (!this.lastFrameTime) this.lastFrameTime = timestamp;
        const elapsed = timestamp - this.lastFrameTime;

        if (elapsed > this.animationSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;

            this.updateSpriteImage();

            const bgX = -(this.currentFrame * this.frameWidth) + this.offsetX;
            const bgY = this.offsetY;

            this.element.style.backgroundPosition = `${bgX}px ${bgY}px`;

            this.lastFrameTime = timestamp;
        }
    }

    takeDamage() {
        if (this.isInvincible) return;

        this.lives--;
        this.updateLivesUI();
        this.flashDamage();

        this.isInvincible = true;
        setTimeout(() => {
            this.isInvincible = false;
            this.removeDamageFlash();
        }, this.invincibilityDuration);
    }

    flashDamage() {
        if (this.element) {
            this.element.classList.add("damage-flash");
        }
    }

    removeDamageFlash() {
        if (this.element) {
            this.element.classList.remove("damage-flash");
        }
    }

    updateLivesUI() {
        const livesElm = document.getElementById("lives");
        if (livesElm) livesElm.innerText = `Lives: ${this.lives}`;
    }

    startRoll() {
        this.element.classList.add("roll");
        setTimeout(() => this.element.classList.remove("roll"), this.rollDuration);

        this.isRolling = true;
        this.canRoll = false;
        this.isInvincible = true;

        setTimeout(() => {
            this.isRolling = false;
            this.isInvincible = false;
        }, this.rollDuration);

        setTimeout(() => {
            this.canRoll = true;
        }, this.rollCooldown);
    }

    move() {
        if (!this.allowMovement) return;
        
        const gameArea = document.getElementById("game-area");
        const gameWidth = gameArea.clientWidth;
        const gameHeight = gameArea.clientHeight;

        let moveX = 0;
        let moveY = 0;

        if (this.pressedKeys.ArrowLeft) moveX -= 1;
        if (this.pressedKeys.ArrowRight) moveX += 1;
        if (this.pressedKeys.ArrowUp) moveY += (1 + (this.gameHeight / this.gameWidth));
        if (this.pressedKeys.ArrowDown) moveY -= (1 + (this.gameHeight / this.gameWidth));

        if (moveX !== 0 || moveY !== 0) {
            const length = Math.sqrt(moveX * moveX + moveY * moveY);
            moveX = moveX / length;
            moveY = moveY / length;

            if (moveX > 0) {
                this.lastDirection = 'right';
            } else if (moveX < 0) {
                this.lastDirection = 'left';
            } else if (moveY > 0) {
                this.lastDirection = 'up';
            } else if (moveY < 0) {
                this.lastDirection = 'down';
            }
        }

        this.positionX = Math.max(0, Math.min(this.positionX + moveX * (this.isRolling ? this.rollSpeed : this.speed), gameWidth - this.width));
        this.positionY = Math.max(0, Math.min(this.positionY + moveY * (this.isRolling ? this.rollSpeed : this.speed), gameHeight - this.height));
    }

    gameLoop(timestamp) {
        this.move();
        this.updateUI();
        this.animate(timestamp);
        requestAnimationFrame((ts) => this.gameLoop(ts));
    }
}
function createParticleExplosion(x, y, count = 8) {
    const container = document.getElementById("game-area");

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 20;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        const spin = (Math.random() * 540 + 180) + "deg";

        particle.style.left = x + "px";
        particle.style.bottom = y + "px";
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--spin', spin);

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}