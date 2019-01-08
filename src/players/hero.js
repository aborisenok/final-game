import Player from './player';
import playerConfig from '../configs/playerConfig';
import weaponConfig from '../configs/weaponConfig';
import Utils from '../utils';
import Attack from './attack';

class Hero extends Player {
  constructor(name) {
    super(name);
  }

  draw(context) {
    this.context = context;
    this.createBodyParts();
    this.startMove();
  }

  createBodyParts() {
    const heroParts = playerConfig.hero.sprites;

    for (const part in heroParts) {
      if (Object.prototype.hasOwnProperty.call(heroParts, part)) {
        this.bodyParts[part] = Hero.createImage(heroParts[part]);
      }
    }
  }

  restoreHealse() {
    this.healse = 100;
  }

  static createImage(params) {
    const bodyPart = {};
    const imgElem = new Image();
    imgElem.src = params.path;
    bodyPart.img = imgElem;
    const {
      x, y, width, height,
    } = params.options;
    bodyPart.options = {
      x, y, width, height,
    };
    return bodyPart;
  }

  moveBodyParts() {
    this.moveHead();
    this.moveHand('handRight');
    this.moveHand('handLeft');
    this.moveLeg('legRight');
    this.moveLeg('legLeft');
  }

  showAttackAnimation() {
    const attack = new Attack(this.context, true);
    const weapon = Utils.chooseRandomElem(weaponConfig.heroWeapon);
    attack.drawAttack(weapon);
  }

  showHealingAnimation() {
    const attack = new Attack(this.context);
    const weapon = Utils.chooseRandomElem(weaponConfig.healing);
    attack.drawHealing(weapon);
  }
}

export default Hero;
