let idade = 17;
let temCNH = true;

if(idade >= 18 && temCNH == false) {
    console.log("É maior de idade, porém não tem CNH. Não pode dirigir!");
} else if(idade >= 18 && temCNH == true) {
    console.log("Pode dirigir!");
} else {
    console.log("É menor de idade. Não pode dirigir!");
}