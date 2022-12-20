class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }
    get nome() {
        return this.#nome;
    }
    get idade() {
        return this.#idade;
    }
    set nome(value) {
        this.#nome = value;
    }
    // Não tem o set idade (Não pode ser modificado fora da classe);
}

const p1 = new Pessoa("Maxsuel", 28);
p1.idade = 29; // Não altera, pois é um atributo privado e não tem o método set para idade;
console.log(p1.idade);  