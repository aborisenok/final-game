import ModalNotification from './modalNotification';

describe('ModalNitification', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  it('draw modal notification template into the body', () => {
    const message = 'test';
    ModalNotification.draw(message);
    const modalNotification = document.querySelectorAll('.modal__notification');
    const modalMessage = document.querySelector('.modal__message');
    expect(modalNotification.length).toBe(1);
    expect(modalMessage.innerHTML).toBe(message);
  });


  it('remove modal notification element from the body', () => {
    ModalNotification.remove();
    const modalNotification = document.querySelectorAll('.modal__notification');
    expect(modalNotification.length).toBe(0);
  });
});
