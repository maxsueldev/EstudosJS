class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    relatorio() {
        return (
            `Nome...........: ${this.nome}`
        );
    }
}

class Aluno extends Pessoa {
    constructor(boletim) {    // USE Boletim ???
        super();
        this.boletim = boletim;
    }
}

class Funcionario extends Pessoa {
    #salario;
    #saldo = 0;

    constructor(salario) {
        super();
        this.salario = salario;
    }
    get salario() {
        return this.#salario;
    }
    set salario(value) {
        this.#salario = value;
    }
    get saldo() {
        return this.#saldo;
    }
    set saldo(value) {
        this.#saldo = value;
    }
    getPagamento() {
         this.saldo += this.salario; 
    }
    relatorio() {
        return (
            "Nome...........: " + this.nome + 
            "\nSalário........: " + this.salario + 
            "\nSaldo..........: " + this.saldo
        );
    }
}

class Gerente extends Funcionario {
    #bonus;
    
    constructor(bonus) {
        super();
        this.#bonus = bonus;
    }
    get bonus() {
        return this.#bonus;
    }
    set bonus(value) {
        this.#bonus = value;
    }
    relatorio() {
        return (
            "Nome...........: " + this.nome + 
            "\nSalário........: " + this.salario + 
            "\nBonus..........: " + this.bonus +
            "\nSaldo..........: " + this.saldo 
        );
    }
}

class Boletim {

}

class Nota {
    constructor(valor) {
        this.valor = valor;
    }
}

// const pessoa1 = new Pessoa("Maxsuel");
// console.log(pessoa1.relatorio());

// const funcionario1 = new Funcionario(1200);
// funcionario1.nome = "Fernando";
// funcionario1.getPagamento();
// funcionario1.getPagamento();
// console.log(funcionario1.relatorio());

// const gerente1 = new Gerente(300);
// gerente1.nome = "Pedro";
// gerente1.salario = 4300;
// gerente1.saldo = 2500;
// gerente1.getPagamento();
// console.log(gerente1.relatorio());