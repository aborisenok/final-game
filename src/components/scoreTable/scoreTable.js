import template from './scoreTable.template';
import GameInterface from '../../gameInterface';
import Utils from '../../utils';
import './scoreTable.css';

class ScoreTable {
  static initScoreTable() {
    Utils.pause(1000)
      .then(() => {
        ScoreTable.createScoreTable();
      });
  }

  static createScoreTable() {
    const RESULTS_NUMBER = 10;
    const gameResults = Utils.receiveGameResults(RESULTS_NUMBER);
    ScoreTable.draw(gameResults);
    ScoreTable.setEventListener();
  }

  static draw(gameResults) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const container = document.createDocumentFragment();

    gameResults.forEach((elem, index) => {
      const tableRow = ScoreTable.createRow(elem, index);
      container.appendChild(tableRow);
    });

    const table = document.querySelector('.score__results');
    table.append(container);
  }

  static createRow(gameResult, index) {
    const tableRow = document.createElement('tr');
    const position = ScoreTable.createRowElement('td', index + 1);
    const playerName = ScoreTable.createRowElement('td', gameResult.player);
    const level = ScoreTable.createRowElement('td', gameResult.level);

    tableRow.appendChild(position);
    tableRow.appendChild(playerName);
    tableRow.appendChild(level);

    return tableRow;
  }

  static createRowElement(atribute, innerValue = '-') {
    const elem = document.createElement(atribute);
    elem.innerHTML = innerValue;

    return elem;
  }

  static remove() {
    const scoreTable = document.querySelector('.score__table');
    ScoreTable.removeEventListeners();
    scoreTable.remove();
  }

  static setEventListener() {
    const exitButton = document.querySelector('#score__exit-game');
    const playAgainButton = document.querySelector('#score__play-again');
    exitButton.addEventListener('click', GameInterface.exitGame);
    playAgainButton.addEventListener('click', GameInterface.reloadGame);
    window.addEventListener('keydown', ScoreTable.controlScoreTableByKeys);
  }

  static removeEventListeners() {
    const exitButton = document.querySelector('#score__exit-game');
    const playAgainButton = document.querySelector('#score__play-again');
    exitButton.removeEventListener('click', GameInterface.exitGame);
    playAgainButton.removeEventListener('click', GameInterface.reloadGame);
    window.removeEventListener('keydown', ScoreTable.controlScoreTableByKeys);
  }

  static controlScoreTableByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const selectedClass = 'selected';

    const listOfButtons = document.querySelectorAll('.modal__button');
    const selectedButton = Utils.defineSelectedElement(listOfButtons, selectedClass);

    if (selectedButton) {
      if (event.keyCode === ENTER_KEY) {
        selectedButton.click();
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(listOfButtons, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(listOfButtons, selectedClass);
      }
    } else {
      Utils.selectElement(listOfButtons[0], selectedClass);
    }
  }
}

export default ScoreTable;
