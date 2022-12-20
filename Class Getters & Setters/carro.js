class Carro {
    constructor(marca, modelo, cor, ligado = false, km = 0, comb = 10) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = ligado;
        this.km = km;
        this.comb = comb;
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
            return "O combustível já está cheio";
        }
        this.comb = 100;
    }
    get comb() {
        return this._comb;
    }
    set comb(value) {
        this._comb = value;
    }
}

const carro1 = new Carro("Honda", "HRV", "Prata");
// console.log(carro1);
carro1.comb = 80;
console.log(carro1.info());