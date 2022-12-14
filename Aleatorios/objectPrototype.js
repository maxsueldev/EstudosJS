function Microfone(color = "black") {
    this.color = color;
    this.isOn = true; 
}

Microfone.prototype.toogleOnOff = function() {
    if(this.isOn) {
        console.log("Desligou");
    } else {
        console.log("Ligou");
    }
    this.isOn = !this.isOn;
}

const microfone1 = new Microfone("Red");
console.log(microfone1);

microfone1.toogleOnOff();
microfone1.toogleOnOff();