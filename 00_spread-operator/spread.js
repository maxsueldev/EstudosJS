const addresses = [ {address: "Av Brasil, 125", city: "São Paulo"} ];
const addresses2 = [...addresses, "test"];

// addresses2.push("test");

console.log(addresses);
console.log(addresses2);

const john = {
    name: "John",
    age: 20,
    addresses: [
        {address: "Av Brasil, 125", city: "São Paulo"}
    ]
}

const peter = { ...john, name: "Peter", age: 15 }
// peter.name = "Peter";
// peter.age = 15;

console.log(peter);
console.log(john);

