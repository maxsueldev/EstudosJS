const person = {
    name: "Maxsuel",
    age: 28,
    walking() {
        console.log("Walking");
    }
}

let { name, age } = person;
console.log(age, name);

let [num1, num2] = [ 1, 2 ];
console.log(num1, num2);

let {a, b} = { a:10, b:20 };
console.log(b, a);

//Destructuring em Array
let foo = ["one", "two", "three"]
let [one, two, three] = foo;
console.log(foo.join(', '));  //join é um protótipo da cadeia de protótipos do JS

// Destructuring em Objeto
let pessoa = {
    nome: "Maxsuel",
    idade: 28,
    cargo: "Desenvolvedor Front-End",
    sexo: "M",
    apresentar() {
        console.log("Olá, meu nome é Maxsuel");
    }
}

let { nome } = pessoa;
pessoa.apresentar("Maxsuel");

// Destructuring em Array
let [l, z, c] = [1, 2, 3];
console.log(l, z, c);

let frutas = ["banana", "maça", "goiaba", "uva", "pera"];
let [ban, ma, ...resto] = frutas;

console.log(ma, resto);








