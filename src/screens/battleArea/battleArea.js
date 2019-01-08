class BattleArea {
  constructor(width, height) {
    this.canvasContext = null;
    this.backgroundImg = null;
    this.width = width;
    this.height = height;
  }

  draw() {
    const canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    const gameContainer = document.querySelector('.game__container');
    gameContainer.appendChild(canvas);
  }

  clearBattleArea() {
    this.canvasContext.clearRect(0, 0, this.width, this.height);
  }

  static remove() {
    const canvas = document.querySelector('canvas');
    canvas.remove();
  }
}

export default BattleArea;
