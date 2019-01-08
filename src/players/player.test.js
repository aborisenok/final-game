import Player from './player';

describe('Monster', () => {
  const player = new Player();

  it('start player mooving', () => {
    player.startMove();

    expect(player.intervalID !== null).toBe(true);
  });
});
