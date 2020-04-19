// // 1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")

for(let i = 1; i <=15; i++){
    alert('Olá Reprograma');
}

// 2. Criem array de string, percorram (for of) exibindo cada texto do array.

let nome = ['banana', 'laranja', 'maçã', 'morango'];
console.log(nome);

for(x of nome){
    console.log(nome);
}


// // 3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.


let lista = [];

let objeto1 = new Object()
    objeto1.nome = 'banana',
    objeto1.preco = 1.99


let objeto2 = new Object()
    objeto2.nome = 'laranja',
    objeto2.preco = 3.99

lista.push(objeto1, objeto2);

for(mostrar of lista){
    
    console.log(`A fruta é ${objeto1.nome} e ${objeto2.nome}`)
   
}

// 4. Um loop que leia (prompt) o nome de 5 pessoas.

let lista = [];

for(let i = 1; i <=5; i++){
    let nome = prompt('Digite seu nome');
    lista.push(nome);
}
    console.log(lista);

//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.


let numPar = 0;
let numImp = 0;
let totalPar = 0;
let totalImp = 0;

for(let i = 1; i <=4; i++){
    let numero = parseInt(prompt("Digite seu número aqui"));

    if(numero%2 === 0){
        numPar=numero;
        totalPar+= numPar;
    }else{
        numImp=numero;
        totalImp+=numImp;
    }
}
    alert(`A soma dos números pares é ${totalPar}`);
    alert(`A soma dos números ímpares é ${totalImp}`);


// 6. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.




let idadeMasc = 0;
let pesoFem = 0;
let totalMedia = 0;
let totalMasc = 0;
let totalFem = 0;


for(let i = 1; i <=10; i++){
    const idade = parseFloat(prompt(`Pessoa ${i}, digite sua idade`));
    const peso = parseFloat(prompt(`Pessoa ${i}, digite sua peso`));
    const sexo = prompt(`Pessoa ${i}, digite seu sexo`);
    
    if(sexo == 'masculino' && idade > 0){
        totalMasc++;
        idadeMasc+= idade;
        totalMedia = idadeMasc/totalMasc;
    }else{
        totalFem++
        pesoFem+= peso;         
    }
}

alert(`O total de homens é igual a ${totalMasc} a e média de idade é de  ${totalMedia}`);
alert(`O total de mulheres é igual a ${totalFem} e a média de peso é de ${pesoFem}`);
