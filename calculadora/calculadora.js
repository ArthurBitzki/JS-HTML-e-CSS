const display = document.getElementById('display'); //const pega e trava o valor 'display'
const botoes = document.querySelectorAll('button') //trava o valor de todos os botoes

let valorAtual = ''; 
let valorAnterior = '';
let operacao = null;

function ataulizarDisplay(){
    display.value = valorAtual || '0'; //display vai mostrar o valor atual ou zero
    }

function calcular(){ //faz a conta em si, é chamado mais em baixo
    let anterior = Number(valorAnterior);
    let atual = Number(valorAtual);

    if(operacao === '+'){
        valorAtual = anterior + atual;
    }else if(operacao === '-'){
        valorAtual = anterior - atual; 
    }else if(operacao === '/'){
        valorAtual = anterior / atual;
    }else if(operacao === '*'){
        valorAtual = anterior * atual;
    }

    valorAnterior = '';
    operacao = null;
}
/*botoes.forEach(function(botao){
    botao.addEventListener('click', function(){

    })
}) mesmo codigo que o de baixo*/
botoes.forEach(botao => { //'para cada botao'
    botao.addEventListener('click',() => {//'botao vai receber a função click'
        let numero = botao.dataset.num; 
        let operador = botao.dataset.op;
        let acao = botao.dataset.action;

        if(numero){
            valorAtual = valorAtual + numero;  
            ataulizarDisplay();
            return;
        }
 
        if(operador){
            valorAnterior = valorAtual; //'valor anterior recebe valor atual'
            operacao = operador;
            valorAtual = '';
            return;
        }
        if(acao === 'equals'){
            if(valorAnterior === '' || valorAtual === '') return;
            calcular();
            ataulizarDisplay();
            return;
        }
        if(acao === 'clear'){
            valorAtual = '';
            valorAnterior = '';
            operacao = null;
            ataulizarDisplay();
        }
    })
})
