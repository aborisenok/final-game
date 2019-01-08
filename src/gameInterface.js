import GameField from './screens/gameField/gameField';
import ModalLogin from './components/modalLogin/modalLogin';
import ScoreTable from './components/scoreTable/scoreTable';
import NavigationLeft from './components/navigationLeft/navigationLeft';
import gameConfig from './configs/gameConfig';
import GameManager from './gameManager';

class GameInterface {
  static loadGame() {
    GameField.draw();
    ModalLogin.create();
    NavigationLeft.draw();
    GameInterface.addListeners();
  }

  static startGame() {
    const nameInput = document.querySelector('#player-name').value;
    ModalLogin.removeEventListeners(GameInterface.startGame);
    ModalLogin.remove();
    GameManager.initFight(nameInput);
    GameManager.level = 1;
  }

  static controlMusic() {
    const buttonMusic = document.querySelector('#btn_music');
    if (GameInterface.music) {
      const musicStatus = buttonMusic.dataset.music;
      if (musicStatus === 'off') {
        NavigationLeft.makeButtonActive(buttonMusic);
        GameInterface.music.play();
      } else {
        NavigationLeft.makeButtonPassive(buttonMusic);
        GameInterface.music.pause();
      }
    } else {
      GameInterface.music = document.createElement('audio');
      GameInterface.music.src = gameConfig.music.path;
      GameInterface.music.loop = true;
      NavigationLeft.makeButtonActive(buttonMusic);
      GameInterface.music.play();
    }
  }

  static exitGame() {
    window.location.href = './../index.html';
  }

  static addListeners() {
    ModalLogin.setEventListener(GameInterface.startGame);
    NavigationLeft.setMusicControlListener(GameInterface.controlMusic);
    NavigationLeft.setExitGameControlListener(GameInterface.exitGame);
  }

  static reloadGame() {
    ScoreTable.remove();
    ModalLogin.create();
    GameInterface.addListeners();
  }
}

export default GameInterface;
