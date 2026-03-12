let botao = document.getElementById('botao')
console.log(Numrandom());

botao.addEventListener('click', (evt) => {
    evt.preventDefault;

    let inputTentativa = document.getElementById('palpite').value;

    tentativa(inputTentativa)
    tentar(inputTentativa)

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

function tentativaReturn (p){
    n = localStorage.getItem('numero')
    console.log(n);

    if (p != n){
        if (p < n){
            saida('Número abaixo', `Restam ${r} tentativas`);
        } else {
            saida ('Número acima', `Restam ${r} tentativas`);
        
        }      
    } 

    if (p == n) {
        return saida (`Parabéns!! Você acertou!!!<br>No total foram ${t} tentativas`)
    }
    
}

function tentar(p){
    let numtentativa = 1;
    let tentrestante = 10;
    
    for (let i = 1; i <= 10; i++){
        return (numtentativa +=1,
        tentrestante -= 1);
    }

}