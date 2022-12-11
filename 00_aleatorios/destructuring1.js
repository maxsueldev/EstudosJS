const valores = [4, 1, 2, 3, 4, 5];

const cliente = {
    nome: "Maxsuel Fernando",
    cpf: "11122233344",
    nascimento: "06/02/1994",
    telefone: "(82)99999-9999",
    endereco: {
        rua: "Avenida JavaScript",
        cidade: "Maceió",
        estado: "AL",
        pais: "Brasil"
    }
};

//TODO: Função que recebe um cliente e retorna apenas CPF, telefone e cidade
const retornaAlgunsDados = ({cpf, telefone, endereco: {cidade}}) => `CPF: ${cpf}, telefone: ${telefone} e cidade: ${cidade}`;
console.log(retornaAlgunsDados(cliente));

//TODO: Pegar o primeiro (e o terceiro) elemento do Array de valores;
const [val1, , val3] = valores;
console.log(val1, val3);
