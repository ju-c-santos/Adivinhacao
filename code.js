let botao = document.getElementById('botao')
let click = 0
let resto = 10
console.log(Numrandom());

botao.addEventListener('click', (evt) => {
    evt.preventDefault;
    let inputTentativa = document.getElementById('palpite').value;
    click += 1;
    resto -= 1;
    
    if (click > 10){
        console.log('FORAM 10 TENTATIVAS!!!')
        saidaTentativa(' ');
        saidaMensagem('<strong>VOCÊ PERDEU</strong>!!!');
    } else {
        tentativaReturn(inputTentativa, click, resto); 
        
    }

    console.log(click, resto)

});

function Numrandom(){
    min = 1;
    max = 100;
    let numero = Math.floor(Math.random() * (max - 1)) + min;
    localStorage.setItem('numero', numero)
    
}

function saidaTentativa(m){
    let mensagemTentativa = document.getElementById('tentativas');
    return mensagemTentativa.innerHTML = m;
}

function saidaMensagem(n){
    let mensagem = document.getElementById('msg');
    return mensagem.innerHTML = n;
}

function tentativaReturn (p, t, r){
    n = localStorage.getItem('numero')
    console.log(n);
    

    if (p != n){
        if (p < n){
            saidaTentativa(`Restam ${r} tentativas`);
            saidaMensagem('O número secreto é <strong>MAIOR</strong>');
        
        } else {
            saidaTentativa(`Restam ${r} tentativas`);
            saidaMensagem('O número secreto é <strong>MAIOR</strong>');
                    
         }      

    }

    if (p == n){
        saidaTentativa(' ');
        return saidaMensagem (`Parabéns!! Você acertou!!!<br>No total foram tentativas ${t}`);
    }
        
    
}
