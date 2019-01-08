import ModalLogin from './modalLogin';

describe('ModalLogin', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  it('draw modal login template into the body', () => {
    ModalLogin.draw();
    const modalLogin = document.querySelectorAll('.modal__login');
    expect(modalLogin.length).toBe(1);
  });

  it('remove modal login element from the body', () => {
    ModalLogin.remove();
    const modalLogin = document.querySelectorAll('.modal__login');
    expect(modalLogin.length).toBe(0);
  });
});
