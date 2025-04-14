class CollisionManager {
    constructor(player, projectiles, onHit) {
      this.player = player;
      this.projectiles = projectiles;
      this.onHit = onHit;
    }
  
    checkCollisions() {
      this.projectiles.forEach(projectile => {
        if (this.isColliding(this.player, projectile)) {
          this.onHit();
        }
      });
    }
  
    isColliding(a, b) {
      return (
        a.positionX < b.positionX + b.width &&
        a.positionX + a.width > b.positionX &&
        a.positionY < b.positionY + b.height &&
        a.positionY + a.height > b.positionY
      );
    }
  }