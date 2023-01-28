class Cachorro {
    #raca; #cor;
    constructor(raca, cor) {
        this.#raca = raca;
        this.#cor = cor;
    }

    get raca() {
        return this.#raca
    }

    set raca(raca) {
        this.#raca = raca;
    }

    get cor() {
        return this.#cor;
    }
}

Cachorro.prototype.patas = 4;

let doberman = new Cachorro('Doberman', 'preto');

console.log(doberman.patas);

doberman.raca = 'Doberman1'
console.log(doberman.raca);
console.log(doberman.cor);