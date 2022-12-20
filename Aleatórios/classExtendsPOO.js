class Person {
    constructor(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
    get name() {
        return this._name;
    }
    set name(string) {
        this._name = string;
    }
    get age() {
        return this._age;
    }
    set age(string) {
        this._age = string;
    }
    get address() {
        return this._address;
    }
    set address(string) {
        this._address = string;
    }
}

class Developer extends Person {
    constructor(name, usingLanguage) {
        super(name);
        this._usingLanguage = usingLanguage;
    }
    code() {
        return `${this._name} is coding!`;
    }
}

maxDeveloper = new Developer("Maxsuel", "JavaScript");
console.log(maxDeveloper.name);

maxDeveloper.age = 28;
maxDeveloper.address = {street: "Avenida 123", district: "Farol"};
console.log(maxDeveloper);

