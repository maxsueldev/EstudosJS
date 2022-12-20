// const pessoa = [
//     {
//         nome: "Maxsuel",
//         idade: 28
//     }, 
//     {
//         nome: "John",
//         idade:42
//     }
// ];

// const idadesDaquiADoisAnos = pessoa.map(i => i.idade + 2);
// const [idadePessoa1, idadePessoa2] = idadesDaquiADoisAnos; 
// console.log(`Daqui a dois anos, ${pessoa[0].nome} terá ${idadePessoa1} anos e ${pessoa[1].nome} terá ${idadePessoa2} anos!`);

// const frutas = ['Banana', 'maça', 'Uva', "Pêra", 'kiwi'];
// const frutasFiltro = frutas.filter(fruta => fruta.length == 4);
// console.log(frutasFiltro);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const precos = [
    "Crédito", 
    "R$ 200", 
    "R$ 400", 
    "Contas Pagar", 
    "R$ 300", 
    "R$ 400", 
    "Meus dados"
];

// const precosFiltro = precos.filter(preco => {
//     if(preco.includes("R$")) {
//         return true;
//     } else {
//         return false;
//     }
// });
// const precosFiltro = precos.filter(preco => preco.includes("R$"));

// console.log(precosFiltro);

const NumerosFiltro = precos.map(preco => preco.replace("R$ ", ""));
const somenteStringNumeros = NumerosFiltro.filter(preco => preco.replace(/[^0-9]/g,''));
const somenteNumber = somenteStringNumeros.map(preco => Number(preco));
const somaNumeros = somenteNumber.reduce((somaParcial, num) => somaParcial + num);

const somaNumerosReduzido = precos.map(preco => preco.replace("R$ ", ""))
                          .filter(preco => preco.replace(/[^0-9]/g,''))
                          .map(preco => Number(preco))
                          .reduce((somaParcial, num) => somaParcial + num);

console.log(NumerosFiltro);
console.log(somenteStringNumeros);
console.log(somenteNumber);
console.log(somaNumeros);
console.log(somaNumerosReduzido);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx;

const carros = ["Mustang Ford", "Onix Chevrolet", "EcoSport Ford", "Territory Ford", "Fiesta Ford", "Tracker Chevrolet"];
const consertCarros = carros.map(carro => carro.replace(" ", " = "));
//console.log(consertCarros);
let carrosFord = consertCarros.filter(carro => carro.includes("Ford"));   
let carrosChevrolet = consertCarros.filter(carro => carro.includes("Chevrolet"));   

const removeNomeFabricante = fabricante => {
    if(fabricante == carrosFord) {
        return fabricante.map(carro => carro.replace(" = Ford", ""));
    } else if(fabricante == carrosChevrolet) {
        return fabricante.map(carro => carro.replace(" = Chevrolet", ""));
    }
} 

carrosFord = removeNomeFabricante(carrosFord);
carrosChevrolet = removeNomeFabricante(carrosChevrolet);

console.log(carrosFord);
console.log(carrosChevrolet);



