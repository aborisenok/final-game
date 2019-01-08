import template from './gameField.template';
import gameConfig from '../../configs/gameConfig';
import Utils from '../../utils';
import './gameField.css';

class GameField {
  static draw() {
    document.body.innerHTML = template;
    GameField.changeBackground();
  }

  static changeBackground() {
    const gameContainer = document.querySelector('.game__container');
    const backgrounds = gameConfig.gameBackground.path;
    gameContainer.style.backgroundImage = `url('${Utils.chooseRandomElem(backgrounds)}')`;
  }
}

export default GameField;
