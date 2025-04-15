class Player {
    constructor(elementId, lives) {
        this.element = document.getElementById(elementId);
        this.width = 1;
        this.height = 1;
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

        /* this.positionX = container.clientWidth / 2 - this.width / 2;
        this.positionY = 0; */
        this.positionX = 295;
        this.positionY = 295;

        this.pressedKeys = {};

        this.initControls();
        this.move();
        this.updateUI();
        this.gameLoop();
    }

    initControls() {
        document.addEventListener("keydown", (e) => {
            this.pressedKeys[e.code] = true;

            if (e.code === "Space" && this.canRoll && !this.isRolling) {
                this.startRoll();
            };
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
        const gameArea = document.getElementById("game-area");
        const gameWidth = gameArea.clientWidth;
        const gameHeight = gameArea.clientHeight;
        
        let moveX = 0;
        let moveY = 0;
        if (this.pressedKeys.ArrowLeft) {
            moveX -= 1;
        }
        if (this.pressedKeys.ArrowRight) {
            moveX += 1;
        }
        if (this.pressedKeys.ArrowUp) {
            moveY += (1+(this.gameHeight/this.gameWidth));
        }
        if (this.pressedKeys.ArrowDown) {
            moveY -= (1+(this.gameHeight/this.gameWidth));
        }
        if (moveX !== 0 || moveY !== 0) {
            const length = Math.sqrt(moveX * moveX + moveY * moveY);
            moveX = moveX / length;
            moveY = moveY / length;
        }

        this.positionX = Math.max(0, Math.min(this.positionX, gameWidth - this.width));
        this.positionY = Math.max(0, Math.min(this.positionY, gameHeight - this.height));

        const currentSpeed = this.isRolling ? this.rollSpeed : this.speed;
        this.positionX += moveX * currentSpeed;
        this.positionY += moveY * currentSpeed;
    }


    gameLoop() {
        this.move();
        this.updateUI();
        requestAnimationFrame(() => this.gameLoop());
    }
}

