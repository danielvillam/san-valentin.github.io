const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)

    // HINT #1:
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // HINT #2:
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // HINT #3:
    const newLeft = Math.random() * (screenWidth - buttonWidth);
    const newTop = Math.random() * (screenHeight - buttonHeight);

    // Aplicar las nuevas posiciones al botón
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MI VIDA, NUNCA TUVE DUDAS';
    buttons.style.display = 'none';
});