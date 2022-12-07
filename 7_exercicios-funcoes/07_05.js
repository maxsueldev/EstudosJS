let permissaoAutoEscola = idade => {
    if(idade >= 18) {
        console.log("Pode entrar na Auto Escola");
    } else {
        console.log("Não pode entrar");
    }
}

permissaoAutoEscola(28);
permissaoAutoEscola(16);