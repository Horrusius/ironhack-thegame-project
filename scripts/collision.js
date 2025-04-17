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

    if (b.type === "circle" || b.type === "bullet") {
      return this.isCircleCollidingWithPlayer(a, b);
    }

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

  isCircleCollidingWithPlayer(player, circle) {
    const closestX = Math.max(player.positionX, Math.min(circle.positionX + circle.radius, player.positionX + player.width));
    const closestY = Math.max(player.positionY, Math.min(circle.positionY + circle.radius, player.positionY + player.height));
  
    const dx = circle.positionX + circle.radius - closestX;
    const dy = circle.positionY + circle.radius - closestY;
  
    if ((dx * dx + dy * dy) < (circle.radius * circle.radius)) {
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