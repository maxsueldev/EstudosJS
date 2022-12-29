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

