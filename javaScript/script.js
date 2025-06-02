function verifyMsg(){
    alert("Dados enviados com sucesso 😊");
}

function verifyName(){
    const nomeCompleto = document.getElementById("iNomeCompleto").value;

    const regex = /[0-9^0-9]\W/;
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
