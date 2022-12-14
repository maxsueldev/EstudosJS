function Microfone(color = "Black") {
    this.color = color;
    this.isOn = true;
}

Microfone.prototype.toggleOnOff = function() {
    if(this.isOn) {
        console.log("Desligar");
    } else {
        console.log("Ligar");
    }
    this.isOn = !this.isOn;
}

const microfone = new Microfone();
microfone.toggleOnOff();
microfone.toggleOnOff();
microfone.toggleOnOff();

console.log(microfone.isOn);