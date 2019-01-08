import template from './fightStatus.template';
import './fightStatus.css';

class FightStatus {
  static create(hero, monster, level) {
    FightStatus.draw();
    FightStatus.insertPlayersNames(hero.name, monster.name);
    FightStatus.insertGameLevel(level);
    FightStatus.insertPlayersImg(hero, monster);
  }

  static draw() {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('afterbegin', template);
  }

  static insertPlayersNames(heroName, monsterName) {
    const heroNameElem = document.querySelector('.hero__name');
    const monsterNameElem = document.querySelector('.monster__name');
    heroNameElem.innerHTML = heroName;
    monsterNameElem.innerHTML = monsterName;
  }

  static insertGameLevel(level) {
    const levelInfo = document.querySelector('.game__level');
    levelInfo.innerHTML = `Level ${level}`;
  }

  static insertPlayersImg(hero, monster) {
    const heroFrame = document.querySelector('.hero__frame');
    const monsterFrame = document.querySelector('.monster__frame');
    heroFrame.appendChild(hero.bodyParts.head.img);
    monsterFrame.appendChild(monster.bodyParts.head.img);
  }

  static updatePlayersHP(heroHP, monsterHP) {
    FightStatus.changeHPBar(heroHP, monsterHP);
    FightStatus.changeHPValue(heroHP, monsterHP);
  }

  static changeHPBar(heroHP, monsterHP) {
    const heroHPElem = document.querySelector('.hero__hp_bar');
    const monsterHPElem = document.querySelector('.monster__hp_bar');
    heroHPElem.style.width = `${heroHP}%`;
    monsterHPElem.style.width = `${monsterHP}%`;
  }

  static changeHPValue(heroHP, monsterHP) {
    const heroHPValue = document.querySelector('.hero__hp_value');
    const monsterHPValue = document.querySelector('.monster__hp_value');
    heroHPValue.innerHTML = `${heroHP}hp`;
    monsterHPValue.innerHTML = `${monsterHP}hp`;
  }

  static remove() {
    const gameStatus = document.querySelector('.game__status');
    gameStatus.remove();
  }
}

export default FightStatus;
