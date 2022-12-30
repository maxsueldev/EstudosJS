let x = 50;

const escopo = function() {
    function somarXmaisTres() {
        return x + 3;
    }
    
    return somarXmaisTres;
}

//console.log(escopo());

////////////////////////////////////////////////////////////////////////////////////

const game = function() {
    const nameGame = "Horizon";
    let setNameGame = function() {
        return nameGame;        
    }
    return setNameGame();
}

console.log(game());

/////////////////////////////////// Roger Melo [Youtube] /////////////////////
const external = () => {
    const book = "Sapiens: Uma breve história da Humanidade";
    const internal = () => book; 
    return internal();
}

console.log(external());

/////////////////////////////////// Roger Melo [Youtube] /////////////////////
const lexico = "lexico";
const safe = secret => {
    const local = "local";
    console.log(lexico);
}

safe();

///////////////Acessar valores fora do escopo de uma função///////////////

let carro = {
    ligado : false,
    motor: "v8",
    modelo: "Ford f100"
}

const getKeys = () => {
    for(key in carro) {
        console.log(key);
    }
} 

getKeys();

//////////////////////////////////////////////////////////////////

function messageFunc() {
    const message = "Hello World";
    function getMessage() {
        return messageFunc();
    }
    return message;
}

console.log(messageFunc());