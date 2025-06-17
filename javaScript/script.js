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

function pressButton(){
    const body = document.getElementById("bodyIndex");
    const element = document.getElementById("themeTitle");

        try{
            if(body.classList.contains("DarkbodyIndex")){
                localStorage.setItem("verifyThemeDark", false);
            }
            else{
                localStorage.setItem("verifyThemeDark", true);
            }
        }
        catch(QuotaExceededError){
            console.warn("Erro de Cota alocada ao localStorage");
            console.log(QuotaExceededError);
        }

        try{
            body.classList.add("transic");
            
            body.classList.toggle("DarkbodyIndex");
        }
        catch(SyntaxErrorORInvalidCharacterError){
            console.warn("Erro na troca de tema da classe");
            console.log(SyntaxErrorORInvalidCharacterError);
        }

        if (element.innerHTML == "Mudar para tema Claro:")
            element.innerHTML = "Mudar para tema Escuro:";
        else
            element.innerHTML = "Mudar para tema Claro:";


        if(localStorage.getItem("verifyAcessButton") == null) localStorage.setItem("verifyAcessButton", true);

}


function isPossibleChangeTheme(){
    if (localStorage.getItem("verifyAcessButton") === localStorage.getItem("verifyThemeDark")) return true;

    return false;
}


function changeDarkTheme(BodyId){

    let selectorName = "Dark"+BodyId;


    if (isPossibleChangeTheme())
        document.getElementById(BodyId).classList.add(selectorName);
    
}


function changeImg(){
    if (isPossibleChangeTheme())
        document.getElementById("IdmeninaEGato").setAttribute("src","img/meninaEGatoToDarkTheme.png");
}
