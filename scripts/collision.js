class CollisionManager {
  constructor(player, elements, onHit) {
    this.player = player;
    this.elements = elements;
    this.onHit = onHit;
  }

  checkCollisions() {
    this.elements.forEach(element => {
      if (this.isColliding(this.player, element)) {
        this.onHit();
      }
    });
  }

  isColliding(a, b) {
    if (b.type === "circle") {
      return this.isCircleCollidingWithRect(a, b);
    }
    console.log(b)

    if (
      !a.isInvincible &&
      a.positionX < b.positionX + b.width &&
      a.positionX + a.width > b.positionX &&
      a.positionY < b.positionY + b.height &&
      a.positionY + a.height > b.positionY
    ) {
      this.applyCollisionEffects();
      return true;
    }

    return false;
  }

  isCircleCollidingWithCircle(player, circle) {
    const distX = player.positionX - circle.positionX;
    const distY = player.positionY - circle.positionY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    const combinedRadii = player.radius + circle.radius;
    
    if (distance < combinedRadii) {
      this.applyCollisionEffects();
      return true;
    }
    return false;
  }

  applyCollisionEffects() {
    if (!this.player.isInvincible) {
      this.player.takeDamage();
      if (this.player.lives <= 0) {
        clearInterval(cubeRain);
        window.location.href = "gameover.html";
      }
    }
  }
}