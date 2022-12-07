let num = 5;
let divisoes = 0;

for(let i=0; i<=num; i++) {
    if(num % i == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`${num} é primo!`);
} else {
    console.log(`${num} não é primo!`);
}