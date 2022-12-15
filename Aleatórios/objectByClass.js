class Person {
    constructor(name, age, job = null) {
        this.name = name, 
        this.age = age, 
        this.job = job
    }
}

const maxsuel = new Person("Maxsuel", 28, "Developer");
const maria = new Person("Maria", 23, maxsuel.job);
const raul = new Person("Raul", 22);
console.log(raul, maria);