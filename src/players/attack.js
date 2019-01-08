import Utils from '../utils';

class Attack {
  constructor(context, direction) {
    this.context = context;
    this.weaponImg = null;
    this.x = null;
    this.y = null;
    this.width = null;
    this.height = null;
    this.angle = 0;
    this.direction = direction;
    this.requestID = null;
    this.attackTime = 1000;
  }

  drawAttack(weapon) {
    this.crateWeapon(weapon);
    this.doAnimate(this.attackTime, this.updateAttack);
  }

  drawHealing(weapon) {
    this.crateWeapon(weapon);
    this.doAnimate(this.attackTime, this.updateHealing);
  }

  crateWeapon(weapon) {
    this.weaponImg = new Image();
    this.weaponImg.src = weapon.path;
    this.x = weapon.options.x;
    this.y = weapon.options.y;
    this.width = weapon.options.width;
    this.height = weapon.options.height;
  }

  clearWeapon() {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.angle);
    const centerY = this.width / -2;
    const centerX = this.height / -2;
    this.context.drawImage(this.weaponImg, centerY, centerX, this.width, this.height);
    this.context.restore();
  }

  updateAttack() {
    this.angle += 10 * Math.PI / 180;

    if (this.direction) {
      this.x += 12;
    } else {
      this.x -= 12;
    }
    this.width += 1;
    this.height += 1;
    this.clearWeapon();
  }

  updateHealing() {
    this.angle += 5 * Math.PI / 180;
    this.width += 2;
    this.height += 2;
    this.clearWeapon();
  }

  doAnimate(time, animationType) {
    const animation = animationType.bind(this);
    let requestID;
    function frame() {
      animation();
      requestID = requestAnimationFrame(frame);
    }
    requestID = requestAnimationFrame(frame);

    Utils.pause(time).then(() => {
      cancelAnimationFrame(requestID);
    });
  }
}

export default Attack;
