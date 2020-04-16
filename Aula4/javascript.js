
let valor1;
let valor2;
let total;



function pegaEsseValor(primeiroinput){
    valor1 = primeiroinput;
}

function pegaEsseValor2(segundoinput){
    valor2 = segundoinput;
}

function somar(){
    total = parseFloat(valor1)+parseFloat(valor2);
    alert(`O total é ${total}`);
}

function subtrair(){
    total = parseFloat(valor1)-parseFloat(valor2);
    alert(`O total é ${total}`);
    
}

function multiplicar(){
    total = parseFloat(valor1)*parseFloat(valor2);
    alert(`O total é ${total}`);
    
}

function divisao(){
    total = parseFloat(valor1)/parseFloat(valor2);
    alert(`O total é ${total}`);
    
}