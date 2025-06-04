function verifyMsg(){
    alert("Dados enviados com sucesso 😊");
}

function verifyName(){
    const nomeCompleto = document.getElementById("iNomeCompleto").value;

    const regex = /0-9|[^0-9]|\W/;
    const result = regex.test(nomeCompleto);

    if (result){
        alert("ERRO: O NOME não pode conter números ou caracteres especiais")
        document.getElementById("iNomeCompleto").value = "";
    }
}

function verifyTopico(){
    const topico = document.getElementById("iTopico").value;

    const regex = /\W/;
    const result = regex.test(topico);

    if (result){
        alert("ERRO: O TÓPICO não pode conter caracteres especiais!")
        document.getElementById("iTopico").value = "";
    } 
}

function verifyText(){
    const msg = document.getElementById("iMensagem").value;

    const regex = /\W/;
    const result = regex.test(msg);

    if (result){
        alert("ERRO: A MENSAGEM possui caracteres especiais")
        document.getElementById("iMensagem").value = "";
    } 
}

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


function avaliar(resposta) {
    const mensagem = document.getElementById("resposta");
    mensagem.textContent = "Obrigado por avaliar!";
    const botoes = document.querySelectorAll("#avaliacao button");
    botoes.forEach(btn => btn.style.display = "none");
}