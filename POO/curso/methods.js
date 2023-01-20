const cachorro = {
    raça: "SRD",
    latir: function() {
        console.log("Au au");
    },
    uivar: function() {
        console.log("grrrrrrrrrrrrr");
    },
    setRaça: function(raça) {
        this.raça = raça;
    },
    getRaça: function() {
        return this.raça;
    }
}

cachorro.latir();

console.log(cachorro.raça);
cachorro.setRaça("Pastor Alemão");
console.log(cachorro.getRaça());