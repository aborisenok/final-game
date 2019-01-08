import Utils from '../utils';

class Player {
  constructor(name) {
    this.name = name || 'Unknown Player';
    this.healse = 100;
    this.bodyParts = {};
    this.moveValue = 0;
    this.moveUp = true;
    this.amplitude = 2;
    this.intervalID = null;
    this.context = null;
  }

  clearPlayer() {
    for (const part in this.bodyParts) {
      if (Object.prototype.hasOwnProperty.call(this.bodyParts, part)) {
        const partImg = this.bodyParts[part].img;
        const params = this.bodyParts[part].options;

        this.context.drawImage(partImg, params.x, params.y, params.width, params.height);
      }
    }
  }

  updatePlayer(amplitude) {
    if (this.moveUp) {
      this.moveValue += 1;
      if (this.moveValue >= amplitude) {
        this.moveUp = false;
      }
    } else {
      this.moveValue -= 1;
      if (this.moveValue <= -amplitude) {
        this.moveUp = true;
      }
    }
    this.moveBodyParts();
  }

  startMove() {
    this.intervalID = setInterval(this.updatePlayer.bind(this, this.amplitude), 140);
  }

  stopMove() {
    clearInterval(this.intervalID);
  }

  moveHand(hand) {
    const handCoords = this.bodyParts[hand].options;
    if (hand === 'handRight') {
      handCoords.y -= this.moveValue;
      handCoords.x -= this.moveValue;
    } else {
      handCoords.y += this.moveValue;
      handCoords.x += this.moveValue;
    }
  }

  moveHead() {
    const headCoords = this.bodyParts.head.options;
    headCoords.x += this.moveValue;
  }

  moveLeg(leg) {
    const legCoords = this.bodyParts[leg].options;
    if (leg === 'legRight') {
      legCoords.y -= this.moveValue;
    } else {
      legCoords.y += this.moveValue;
    }
  }

  attackEnemy(person, damage) {
    const enemy = person;
    enemy.healse -= damage;
    if (enemy.healse < 0) {
      enemy.healse = 0;
    }
    this.showAttackAnimation(this.context);
  }

  healYourself(recovery) {
    this.healse = this.healse + recovery;
    if (this.healse > 100) {
      this.healse = 100;
    }
    this.showHealingAnimation();
  }

  showDeathAnimation() {
    const intervalID = setInterval(this.updateDeath.bind(this), 1000 / 60);
    Utils.pause(1000).then(() => {
      clearInterval(intervalID);
    });
  }

  fallBodyParts() {
    for (const part in this.bodyParts) {
      if (part !== 'legLeft' && part !== 'legRight') {
        const params = this.bodyParts[part].options;
        if (params.y < 400) {
          params.y += 5;
        }
      }
    }
  }

  updateDeath() {
    this.fallBodyParts();
  }
}

export default Player;
