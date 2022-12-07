const microfone = {
    color: "black",
    isOn: true,
    toggleOnOff() {
        if(microfone.isOn) {
            console.log("Desligar");
        } else {
            console.log("Ligar");
        }

        microfone.isOn = !microfone.isOn;
    }
}

microfone.toggleOnOff();
microfone.toggleOnOff();

console.log(microfone.isOn);