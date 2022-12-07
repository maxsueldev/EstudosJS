function decrementoPares(numero) {
    for(let i=numero; i>=0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

decrementoPares(30);