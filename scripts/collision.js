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
      if (!a.isInvincible &&
          a.positionX < b.positionX + b.width &&
          a.positionX + a.width > b.positionX &&
          a.positionY < b.positionY + b.height &&
          a.positionY + a.height > b.positionY) {
          
          player.takeDamage();
          if (player.lives <= 0) {
              clearInterval(cubeRain);
              window.location.href = "gameover.html";
          }
      }
  }
}