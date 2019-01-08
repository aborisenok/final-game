import NavigationLeft from './navigationLeft';

describe('NavigationLEft', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  it('draw navigation left template into the body', () => {
    NavigationLeft.draw();
    const navigationLeft = document.querySelectorAll('.left-nav');
    expect(navigationLeft.length).toBe(1);
  });

  it('make navigation left button active', () => {
    const button = document.createElement('button');
    NavigationLeft.makeButtonActive(button);
    const isActive = button.classList.contains('nav__btn_active');

    expect(isActive).toBe(true);
  });

  it('make navigation left button passive', () => {
    const button = document.createElement('button');
    button.classList.add('nav__btn_active');
    NavigationLeft.makeButtonPassive(button);
    const isActive = button.classList.contains('nav__btn_active');

    expect(isActive).toBe(false);
  });

  it('remove navigation left element from the body', () => {
    NavigationLeft.remove();
    const navigationLeft = document.querySelectorAll('.left-nav');
    expect(navigationLeft.length).toBe(0);
  });
});
