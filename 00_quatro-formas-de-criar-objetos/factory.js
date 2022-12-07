const createMicrofone = (color = "Black") => {    //Predefinição de parâmetro
    let isOn = true;

    function toggleOnOff() {
        if(isOn) {
            console.log("Desligar");
        } else {
            console.log("Ligar");
        }
        isOn = !isOn;
    }

    return { color, isOn, toggleOnOff }
}

let microfoneBlack = createMicrofone();
let microfoneWhite = createMicrofone("White");

console.log(microfoneBlack);
console.log(microfoneBlack.color);

console.log(microfoneWhite);