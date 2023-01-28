function checkIsNumber(value) {
    let number = Number(value);
    if(Number.isNaN(number)) {
        return null;
    } else {
        return number;
    }
}

console.log(checkIsNumber('5'));
console.log(checkIsNumber('ahuasshuashsu'));