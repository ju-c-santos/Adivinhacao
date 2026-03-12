let botao = document.getElementById('botao')
let modoEscuro = localStorage.getItem('darkMode')
let click = 0
let resto = 10

Numrandom()

function Numrandom(){
    min = 1;
    max = 100;
    let num = Math.floor(Math.random() * (max - 1)) + min;
    localStorage.setItem('numero', num)
    
}

botao.addEventListener('click', (evt) => {
    evt.preventDefault;
    let inputTentativa = document.getElementById('palpite').value;

    let numero = localStorage.getItem('numero')
    if(validando(inputTentativa, 100, 1) === true){
        click += 1;
        resto -= 1;
    
        if (click > 10){
            console.log('FORAM 10 TENTATIVAS!!!')
            saidaTentativa(' ');
            saidaMensagem(`<strong>VOCÊ PERDEU</strong> o número secreto era ${numero}!!!`);
        } else {
            tentativaReturn(inputTentativa, click, resto); 
        
        }
    } else {
        alert('Campo vazio ou valor inválido, tente novamente')

    }

});

function validando (l, max, min){
    if (l.length === 0 || l < min || l > max){
        return false;
    } else {
        return true;
    }
}


function saidaTentativa(m){
    let mensagemTentativa = document.getElementById('tentativas');
    return mensagemTentativa.innerHTML = m;
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

function saidaMensagem(n){
    let mensagem = document.getElementById('msg');
    return mensagem.innerHTML = n;
}

// MODO ESCURO AQUI

function darkmode(){
    let modo = localStorage.getItem('darkMode')
    if (modo === 'ligado'){
        return desligarDarkmode();
    } else {
        return ligarDarkmode();
    }
}

function modo(){
    let m = localStorage.getItem('darkMode')
    if (m === 'ligado'){
        return ligarDarkmode()
    } else {
        return desligarDarkmode()
    }
}

function ligarDarkmode(){
    modoEscuro = localStorage.setItem('darkMode', 'ligado');
    document.body.classList.add('darkMode');
}

function desligarDarkmode(){
    modoEscuro = localStorage.setItem('darkMode', 'desligado');
    document.body.classList.remove('darkMode');
}
