let listaDePessoasAprovadas = [
    "maria@example.com",
    "joao@example.com",
    "pedro@example.com",
    "clara@example.com"
];

function enviarEmail(email) {
    console.log("Email para " + email + " foi enviado com sucesso!");
}

listaDePessoasAprovadas.forEach((email, index) => {
    console.log(`posicao ${index}`);
    enviarEmail(email);
});
