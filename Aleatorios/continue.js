let resultSomaImpares = 0;
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) continue;
    resultSomaImpares += i; 
}

console.log(resultSomaImpares);