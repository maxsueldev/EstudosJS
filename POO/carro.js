class Carro {
    //Atributos privados
    #marca;
    #modelo;
    #cor;
    #comb;  

    constructor(marca, modelo, cor, ligado = false, km = 0, comb = 10) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#cor = cor;
        this.ligado = ligado;
        this.km = km;
        this.#comb = comb;
    }

    get marca() {
        return this.#marca;
    }
    get modelo() {
        return this.#modelo;
    }
    get cor() {
        return this.#cor;
    }
    get comb() {
        return this.#comb;
    }
    set comb(value) {
        if(value > 100) {
            console.log("O valor máximo do combustível é 100! Combustível não alterado");
            return;    
        }
        this.#comb = value;
    }

    info() {
        return (" Marca.........: " + this.marca + 
        "\n Modelo........: " + this.modelo +
        "\n Cor...........: " + this.cor +
        "\n Ligado........: " + (this.ligado ? "Sim" : "Não") +
        "\n KM............: " + this.km +
        "\n Combustível...: " + this.comb);
    }
    encherCombustivel() {
        if(this.comb == 100) {
            console.log("O combustível já está cheio");
            return;
        }
        this.comb = 100;
    }
}

const carro1 = new Carro("Honda", "HRV", "Prata");
console.log(carro1);
carro1.comb = 120;
// carro1.comb = 100;
carro1.encherCombustivel();
console.log(carro1.info());