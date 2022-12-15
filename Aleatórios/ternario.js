// Opera sobre três valores
// (condição) ? (o que retorna caso for true) : (O que retorna caso a condição seja false)

class Pessoa {
    constructor(nome, idade, email = "") {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        // if(email) {
        //     this.email = email;
        // }
    }
}

// const pessoa = {
//     nome: "Maxsuel",
//     idade: 28,
//     email: "maxsuel.dev@gmail.com"
// }

const pessoa1 = new Pessoa("Maxsuel", 28, "maxsuel.dev@gmail.com");
const pessoa2 = new Pessoa("Fernando", 17);

function verificarIdade(pessoa) {
    console.log(pessoa.email);
    const {idade, nome} = pessoa;
    return idade >= 18 ? `Olá ${nome}, pode entrar` : "Apenas para maiores de 18 anos!";
}

console.log(verificarIdade(pessoa2));