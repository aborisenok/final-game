import Player from './player';
import Utils from '../utils';
import Attack from './attack';
import weaponConfig from '../configs/weaponConfig';
import playerConfig from '../configs/playerConfig';

class Monster extends Player {
  constructor(name) {
    super(name);
    this.headSprites = null;
    this.MIN_DAMAGE = 1;
  }

  draw(context) {
    this.context = context;
    this.createBodyParts();
    this.startMove();
    this.headSprites = this.defineHeadSprite();
  }

  generateDamage(value) {
    return Utils.getRandonValue(this.MIN_DAMAGE, value);
  }

  createBodyParts() {
    const monsterParts = playerConfig.monster.sprites;

    for (const part in monsterParts) {
      if (Object.prototype.hasOwnProperty.call(monsterParts, part)) {
        this.bodyParts[part] = Monster.createImage(monsterParts[part]);
      }
    }
  }

  static createImage(params) {
    const bodyPart = {};
    const imgElem = new Image();
    imgElem.src = Utils.chooseRandomElem(params.path);
    bodyPart.img = imgElem;

    const {
      x, y, width, height,
    } = params.options;
    bodyPart.options = {
      x, y, width, height,
    };

    return bodyPart;
  }

  defineHeadSprite() {
    const arrOfSets = playerConfig.monster.sprites.head.setOfPath;
    const currentImg = this.bodyParts.head.img.src;
    const partOfUrl = currentImg.match(/(\/([a-z]+-?\d+))+.png$/);
    const set = arrOfSets.find(item => item.find(elem => elem.endsWith(partOfUrl[0])));
    return set;
  }

  moveMouth() {
    const imgElem = new Image();
    let imgNumber = 0;
    if (Math.abs(this.moveValue) === 2) {
      imgNumber = 1;
    }
    imgElem.src = this.headSprites[imgNumber];
    this.bodyParts.head.img = imgElem;
  }

  moveBodyParts() {
    this.moveHead();
    this.moveMouth();
    this.moveHand('handRight');
    this.moveHand('handLeft');
    this.moveLeg('legRight');
    this.moveLeg('legLeft');
  }

  showAttackAnimation() {
    const attack = new Attack(this.context, false);
    const weapon = Utils.chooseRandomElem(weaponConfig.monsterWeapon);
    attack.drawAttack(weapon);
  }
}

export default Monster;
