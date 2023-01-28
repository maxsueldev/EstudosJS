class serVivo {
    constructor(tipo = 'humano') {
        this.tipo = tipo;
    }
}

class humano extends serVivo {
    constructor(nome, idade, endereco) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }
}

let pessoa1 = new humano('Maxsuel', 28, 'localhost');
console.log(pessoa1);