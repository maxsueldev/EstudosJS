const produtos = [
    {
        nomeProduto: "Celular",
        valorProduto: 1200,
        porcentagemDesconto: 0.2 
    },
    {
        nomeProduto: "Notebook",
        valorProduto: 2500,
        porcentagemDesconto: 0.3 
    },
    {
        nomeProduto: "Televisão",
        valorProduto: 3500,
        porcentagemDesconto: 0.35         
    }
]

produtos.forEach((itemAtual, posicao) => {
    let valorDesconto = itemAtual.valorProduto * itemAtual.porcentagemDesconto;
    itemAtual.valorTotal = itemAtual.valorProduto - valorDesconto;
    console.log(itemAtual);
});