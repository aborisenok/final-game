import FightStatus from './fightStatus';

describe('FightStatus', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const player = {
    name: 'hero',
    bodyParts: {
      head: {
        img: new Image(),
      },
    },
  };

  it('draw fight status template into the body', () => {
    FightStatus.draw();
    const figthStatus = document.querySelectorAll('.game__status');
    expect(figthStatus.length).toBe(1);
  });

  it('insert players names into fight status', () => {
    FightStatus.insertPlayersNames(player.name, player.name);

    const heroNameElem = document.querySelector('.hero__name');
    const monsterNameElem = document.querySelector('.monster__name');

    expect(heroNameElem.innerHTML).toBe(player.name);
    expect(monsterNameElem.innerHTML).toBe(player.name);
  });

  it('change players hp in the fight status', () => {
    const playerHP = 80;
    FightStatus.changeHPValue(playerHP, playerHP);

    const heroHPValue = document.querySelector('.hero__hp_value');
    const monsterHPValue = document.querySelector('.monster__hp_value');

    expect(heroHPValue.innerHTML).toBe(`${playerHP}hp`);
    expect(monsterHPValue.innerHTML).toBe(`${playerHP}hp`);
  });

  it('remove fight status element from the body', () => {
    FightStatus.remove();
    const figthStatus = document.querySelectorAll('.game__status');
    expect(figthStatus.length).toBe(0);
  });
});
