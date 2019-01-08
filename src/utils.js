class Utils {
  static pause(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  static generateMathExample() {
    const listOfSign = ['+', '-', '*', '/'];
    const x = Utils.getRandonValue(1, 100);
    const y = Utils.getRandonValue(1, 100);
    const sign = Utils.chooseRandomElem(listOfSign);

    const mathExample = `${x} ${sign} ${y} =`;

    const answer = Utils.solveMathExample(x, y, sign);

    return {
      example: mathExample,
      answer,
    };
  }

  static solveMathExample(x, y, sign) {
    let answer;
    switch (sign) {
      case '+':
        answer = x + y;
        break;
      case '-':
        answer = x - y;
        break;
      case '*':
        answer = x * y;
        break;
      case '/':
        answer = x / y;
        break;
      default:
        answer = null;
    }
    return answer;
  }

  static chooseRandomElem(listOfElems) {
    const length = listOfElems.length;
    const randomIndex = Math.floor(Math.random() * length);
    const elem = listOfElems[randomIndex];
    return elem;
  }

  static getRandonValue(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  static saveGameResult(playerName, levelNumber) {
    const gameSession = {
      player: playerName,
      level: levelNumber,
    };

    const results = Utils.loadGameResults() || [];
    results.push(gameSession);
    localStorage.setItem('scoreTable', JSON.stringify(results));
  }

  static loadGameResults() {
    const results = localStorage.getItem('scoreTable');
    return JSON.parse(results);
  }

  static receiveGameResults(numberOfGames) {
    let results = Utils.loadGameResults();
    results = Utils.sortGameResults(results);
    const number = numberOfGames || results.length;
    return results.slice(0, number);
  }

  static sortGameResults(results) {
    return results.sort((firstElem, secondElem) => secondElem.level - firstElem.level);
  }

  static createSound(url) {
    const audio = document.createElement('audio');
    audio.src = url;
    audio.play();
  }

  static defineSelectedElement(elemsList, className) {
    let selectedButton;
    elemsList.forEach((elem) => {
      if (elem.classList.contains(className)) {
        selectedButton = elem;
      }
    });
    return selectedButton;
  }

  static selectElement(elem, className) {
    elem.classList.add(className);
  }

  static deselectElement(elem, className) {
    elem.classList.remove(className);
  }

  static selectNextElement(elemsList, className) {
    const selectedElem = Utils.defineSelectedElement(elemsList, className);
    const elemsArr = Array.from(elemsList);
    const elemIndex = elemsArr.indexOf(selectedElem);
    const nextElem = elemIndex + 1;

    Utils.deselectElement(selectedElem, className);

    if (nextElem < elemsArr.length) {
      Utils.selectElement(elemsArr[nextElem], className);
    } else {
      Utils.selectElement(elemsArr[0], className);
    }
  }

  static selectPrevElement(elemsList, className) {
    const selectedElem = Utils.defineSelectedElement(elemsList, className);
    const elemsArr = Array.from(elemsList);
    const elemIndex = elemsArr.indexOf(selectedElem);
    const prevElem = elemIndex - 1;

    Utils.deselectElement(selectedElem, className);

    if (prevElem < 0) {
      Utils.selectElement(elemsArr[elemsArr.length - 1], className);
    } else {
      Utils.selectElement(elemsArr[prevElem], className);
    }
  }
}

export default Utils;
