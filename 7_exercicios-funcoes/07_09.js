let potencia = (base, expoente) => {
    return Math.pow(base, expoente);
    // return base ** expoente;
}

console.log(potencia(2, 3));

let pot = (base, expoente) => {
    let result = 1;
    
    for(let i=1; i<=expoente; i++){
        result *= base;
    }

    return result;
}

console.log(pot(2, 3));