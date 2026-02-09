const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const galeriaContainer = document.querySelector('.galeria-container');
const backgroundMusic = document.getElementById('background-music');

let letterOpened = false;
let confettiInterval = null;

document.addEventListener('click', (e) => {
    // Abrir/cerrar el sobre
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".tap-right") ||
        e.target.matches(".tap-left") ||
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        backgroundMusic.play();
        // Iniciar confeti cuando se abre la carta
        if (!confettiInterval) {
            confettiInterval = setInterval(() => {
                confetti({
                    particleCount: 100,
                    spread: 60,
                    origin: { x: 0.5, y: 0.5 }
                });
            }, 1000);
        }
    }
    // Interacción con la carta
    else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            // Abrir carta
            letter.classList.add("letter-opening");
            letterOpened = true;

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');

            }, 500);

            envelope.classList.add("disable-envelope");
        } else {
            // Guardar carta y mostrar galería
            saveLetter();
        }
    }
});

function saveLetter() {
    // Deslizar el sobre hacia abajo
    envelope.classList.add('slide-down');

    // Después de 1 segundo, mostrar la galería
    setTimeout(() => {
        galeriaContainer.classList.add('show');
    }, 500);
}
