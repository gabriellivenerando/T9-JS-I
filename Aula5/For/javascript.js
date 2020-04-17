// 1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")

for(let i = 1; i <=15; i++){
    alert('Olá Reprograma');
}

// 2. Criem array de string, percorram (for of) exibindo cada texto do array.

let nome = ['banana', 'laranja', 'maçã', 'morango'];
console.log(nome);

for(x of nome){
    console.log(nome);
}


// 3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.


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