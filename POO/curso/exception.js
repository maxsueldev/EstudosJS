function saudacao(nome) {
    if(typeof nome != "string") {
        throw new Error("O nome precisa ser do tipo string!");
    } else {
        console.log("Olá " + nome + "!");
    }
}

saudacao('Maxsuel');
saudacao(5);