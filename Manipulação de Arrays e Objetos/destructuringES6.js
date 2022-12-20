//Destructuring com arrays

let arr = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = arr;

console.log(num3);

//Com objetos
const pessoa = {
    nome: "Maria",
    profissão: "Engenheira",
    idade: 29
}

let {nome: nomeVar, profissao: profissaoVar, idade: idadeVar} = pessoa;
console.log(nomeVar);

//Com funções
function teste() {
    return ['teste', 45]
}

let [varA, varB] = teste();
console.log(varA, varB);

//Ignorando elementos
let arrDois = [5, 10, 15];

const [, dez, quinze] = arrDois;
console.log(dez);

// strings
let novaString = "laranja";
const [z, x, v] = novaString;
console.log(z, x, v);

// rest operatior
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, ...resto] = numeros2;

console.log(um, resto);

// tomar cuidado

let obj2 = {
    x: 1, 
    y: 2
}

let p, q;
({x:p, z:q} = obj2)();
console.log(p, q);