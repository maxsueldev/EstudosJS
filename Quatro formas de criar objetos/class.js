class Microfone {
    constructor(color = "Black") {
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff() {
        if(this.isOn) {
            console.log("Desligar");
        } else {
            console.log("Ligar");
        }
        this.isOn = !this.isOn;
    }
}

let microfone1 = new Microfone();
let microfone2 = new Microfone("White");

microfone2.toggleOnOff();
microfone2.toggleOnOff();

console.log(microfone2);