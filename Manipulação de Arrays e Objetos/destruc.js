const pessoa = {
    nome: "Elton",
    idade: 26
}

// const nome = pessoa.nome;
const {nome: name, idade: age} = pessoa;

console.log(name, age);

