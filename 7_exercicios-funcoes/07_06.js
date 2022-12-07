let determinaTipoDeDado = dado => {
    let tipo = typeof(dado);
    if(tipo == "string") {
        console.log("O tipo de dado informado é String - " + tipo);
    } else if(tipo === "boolean") {
        console.log("O tipo de dado informado é Boolean - " + tipo);
    } else if(tipo === "number") {
        console.log("O tipo de dado informado é Number - " + tipo);
    } else {
        console.log(`O tipo de dado informado é ${tipo}`);
    }
}

determinaTipoDeDado("Abc");
determinaTipoDeDado(25);
determinaTipoDeDado(false);
determinaTipoDeDado(null);
determinaTipoDeDado(undefined);