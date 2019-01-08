import BattleArea from './screens/battleArea/battleArea';
import gameConfig from './configs/gameConfig';
import playerConfig from './configs/playerConfig';
import FightStatus from './components/fightStatus/fightStatus';
import MagicType from './components/magicType/magicType';
import GameManager from './gameManager';
import ModalNotification from './components/modalNotification/modalNotification';
import Utils from './utils';

class Fight {
  constructor(hero, monster, level) {
    this.hero = hero;
    this.monster = monster;
    this.level = level;
    this.battleArea = null;
    this.createInstance();
  }

  createInstance() {
    Fight.instance = this;
  }

  startFight() {
    const levelMessage = `Level ${this.level}`;
    ModalNotification.showModalNotification(levelMessage, 1000);
    this.createBattleArea();
    Utils.pause(1000).then(() => {
      this.createPlayer(this.hero);
      this.createPlayer(this.monster);
      this.startGameLoop();
      this.requestID = null;
      MagicType.initMagicType();
    }).then(() => {
      FightStatus.create(this.hero, this.monster, this.level);
    });
  }

  createBattleArea() {
    const width = gameConfig.canvasSize.width;
    const height = gameConfig.canvasSize.height;
    this.battleArea = new BattleArea(width, height);
    this.battleArea.draw();
  }

  createPlayer(player) {
    player.draw(this.battleArea.canvasContext);
  }

  startGameLoop() {
    const update = this.renderFight.bind(this);

    function frame() {
      update();
      requestAnimationFrame(frame);
    }
    this.requestID = requestAnimationFrame(frame);
  }

  renderFight() {
    this.battleArea.clearBattleArea();
    this.hero.clearPlayer(this.battleArea.canvasContext);
    this.monster.clearPlayer(this.battleArea.canvasContext);
  }

  processAnswerResult(isCorrect, type, value) {
    const damage = +value;
    const damageToHero = this.monster.generateDamage(value);

    if (isCorrect) {
      if (type === 'attack') {
        this.hero.attackEnemy(this.monster, damage);
        Utils.createSound(playerConfig.hero.audio.attack.path);
      } else {
        this.hero.healYourself(damage);
        Utils.createSound(playerConfig.hero.audio.healing.path);
      }
    } else {
      const answerMessage = 'The answer is wrong.';
      ModalNotification.showModalNotification(answerMessage, 1000);
    }

    Utils.pause(1000).then(() => {
      Utils.createSound(playerConfig.monster.audio.demage.path);
      FightStatus.updatePlayersHP(this.hero.healse, this.monster.healse);
    }).then(() => {
      if (Fight.isPlayerAlive(this.monster)) {
        this.monster.attackEnemy(this.hero, damageToHero);
        Utils.createSound(playerConfig.monster.audio.attack.path);
        Utils.pause(1000).then(() => {
          Utils.createSound(playerConfig.hero.audio.demage.path);
          FightStatus.updatePlayersHP(this.hero.healse, this.monster.healse);
          Fight.defineRoundResult(this.hero, this.monster, this.level);
        });
      } else {
        Fight.defineRoundResult(this.hero, this.monster, this.level);
      }
    });
  }

  static isPlayerDie(player) {
    return player.healse === 0;
  }

  static isPlayerAlive(player) {
    return player.healse > 0;
  }

  static defineRoundResult(hero, monster, level) {
    if (Fight.isPlayerDie(hero)) {
      Fight.processHeroDeath(hero, monster, level);
    } else if (Fight.isPlayerDie(monster)) {
      Fight.processMonsterDeath(hero, monster, level);
    } else {
      MagicType.initMagicType();
    }
  }

  static processHeroDeath(hero, monster, level) {
    hero.stopMove();
    hero.showDeathAnimation();
    const looseMessage = 'You lose :(';
    ModalNotification.showModalNotification(looseMessage, 1000);
    Utils.pause(2000).then(() => {
      Fight.clearPreviousFight(hero, monster);
      GameManager.showScoreTable(hero.name, level);
    });
  }

  static processMonsterDeath(hero, monster, level) {
    monster.stopMove();
    monster.showDeathAnimation();
    const winMessage = 'You win :)';
    ModalNotification.showModalNotification(winMessage, 2000);
    Utils.pause(2000).then(() => {
      Fight.clearPreviousFight(hero, monster);
      GameManager.nextLevel(hero, level);
    });
  }

  static clearPreviousFight(hero, monster) {
    cancelAnimationFrame(Fight.instance.requestID);
    FightStatus.remove();
    BattleArea.remove();
    hero.stopMove();
    monster.stopMove();
  }
}

export default Fight;
