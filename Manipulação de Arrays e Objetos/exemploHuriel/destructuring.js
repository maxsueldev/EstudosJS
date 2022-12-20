const client1 = {
    name: "Maxsuel Fernando",
    email: "maxsuelf94@gmail.com",
    age: 28,
    college: "Cesmac"
}

const client2 = {
    name: "Alycia",
    email: "alycia.contact@gmail.com",
    age: 25,
    college: null
}

const getBirthYear = (age) => {
    let fullCurrentYear = new Date().getFullYear();
    let birthYear = fullCurrentYear - age;
    return birthYear; 
}

function showPersonInfo({name, email, age, college}) {
    let birthYear = getBirthYear(age);

    console.log("O nome dessa pessoa é " + name);
    console.log("O ano de nascimento é " + birthYear);
    console.log("Para entrar em contato, envie um email para " + email);
    if(college) {
        console.log("Estuda em " + college);
    }
}

showPersonInfo(client1);