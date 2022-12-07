function helloWorld() {
    console.log("Hello World");
}
helloWorld();

function helloWorldComReturn() {
    return "Hello World";
}
console.log(helloWorldComReturn());

let helloWorldEmVariavel = function() {
    return "Hello World";
}
console.log(helloWorldEmVariavel());

let helloWorldEmVariavelFuncaoReduzida = () => {
    console.log("Hello World");
}
helloWorldEmVariavelFuncaoReduzida();

let helloWorldEmVariavelComArrowFunction = () => console.log("Hello World");
helloWorldEmVariavelComArrowFunction();

let helloWorldEmVariavelComArrowFunction2 = frase => frase;
let frase = "Hello World";
console.log(helloWorldEmVariavelComArrowFunction2(frase));
