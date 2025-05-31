function handleClickTutorial(titulo) {
    alert(`Você está abrindo o tutorial: "${titulo}"`);
}

function marcarComoConcluido(titulo) {
    alert(`Parabéns! Você concluiu o tutorial: "${titulo}"`);
}
function marcarComoConcluido(elemOuId) {
    let btn;

    if (typeof elemOuId === 'string') {
        btn = document.getElementById(elemOuId);
    } else {
        btn = elemOuId;
    }

    if (!btn) {
        console.warn('Botão não encontrado para marcar como concluído');
        return;
    }

    btn.innerText = 'Tutorial concluído';
    btn.disabled = true;

    btn.classList.remove('btn-success');
    btn.classList.add('btn-secondary');
}