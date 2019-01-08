import ScoreTable from './components/scoreTable/scoreTable';
import playerConfig from './configs/playerConfig';
import GameField from './screens/gameField/gameField';
import Hero from './players/hero';
import Monster from './players/monster';
import Fight from './fight';
import Utils from './utils';

class GameManager {
  static initFight(heroName) {
    const hero = GameManager.generateHero(heroName);
    const monsterName = GameManager.generateMonsterName();
    const monster = GameManager.generateMonster(monsterName);
    new Fight(hero, monster, 1).startFight();
  }

  static generateHero(name) {
    return new Hero(name);
  }

  static generateMonster(name) {
    return new Monster(name);
  }

  static generateMonsterName() {
    const firstNamePart = Utils.chooseRandomElem(playerConfig.monster.name_1);
    const secondNamePart = Utils.chooseRandomElem(playerConfig.monster.name_2);
    const thirdNamePart = Utils.chooseRandomElem(playerConfig.monster.name_3);

    return `${firstNamePart} ${secondNamePart} ${thirdNamePart}`;
  }

  static nextLevel(hero, prevLevel) {
    const monsterName = GameManager.generateMonsterName();
    const monster = GameManager.generateMonster(monsterName);
    const nextLevel = prevLevel + 1;
    hero.restoreHealse();
    new Fight(hero, monster, nextLevel).startFight();
    GameField.changeBackground();
  }

  static finishGame() {
    window.location.href = './../index.html';
  }

  static showScoreTable(playerName, levelNumber) {
    Utils.saveGameResult(playerName, levelNumber);
    ScoreTable.initScoreTable();
  }
}

export default GameManager;
