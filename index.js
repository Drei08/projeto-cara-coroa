const imgMoeda = document.getElementById('imgMoeda');
const resultadoEl = document.getElementById('resultado');

let score = 0;

function jogar(escolhaUsuario) {

    const sorteio = Math.floor(Math.random() * 2) ? 'cara' : 'coroa';

    imgMoeda.src = sorteio === 'cara' ? 'cara.png' : 'coroa.png';

    if (escolhaUsuario === sorteio) {
        score += 10;
    } else {
        score -= 10;
    }

    resultadoEl.textContent = score;
}
