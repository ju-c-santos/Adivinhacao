let botao = document.getElementById('botao')

botao.addEventListener('click', (evt) => {
    evt.preventDefault;
    let t = 0;
    //et tentativa = 1;
    let inputTentativa = document.getElementById('palpite').value;
    
    if (inputTentativa != Numrandom()){
        let r = nRestante()
        t = nTentativas()
        tentativaReturn(inputTentativa, r);
    } else {
        saida (`Parabéns!! Você acertou!!!<br>No total foram ${t} tentativas`)
    
    }
    

});

function Numrandom(){
    min = 1;
    max = 100;
    let numero = Math.floor(Math.random() * (max - 1)) + min;
    localStorage.setItem('numero', numero)
    
}

function saida(m = ' ', n = ' '){
    let mensagemTentativa = document.getElementById('tentativas');
    let mensagem = document.getElementById('msg');
    return (mensagem.innerHTML = m, mensagemTentativa.innerHTML = n);
}

function tentativaReturn (p, r, t){
    n = localStorage.getItem('numero')

    if (p < n){
            saida('Número abaixo', `Restam ${r} tentativas`);
    } 
    
    if(p > n) {
            saida ('Número acima', `Restam ${r} tentativas`);
        
    }       
    
}

function nTentativas(){
    let tentativa = 1
    return tentativa += 1;
    
}

function nRestante(){
    let resto = 10
    return resto -= 1;
}