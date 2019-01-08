import MagicType from './magicType';

describe('MagicType', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  it('draw magic choose template into the body', () => {
    MagicType.draw();
    const magicType = document.querySelectorAll('.magic__choose');
    expect(magicType.length).toBe(1);
  });

  it('remove magic choose element from the body', () => {
    MagicType.remove();
    const magicType = document.querySelectorAll('.magic__choose');
    expect(magicType.length).toBe(0);
  });
});
