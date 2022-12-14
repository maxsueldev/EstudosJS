// function liquidificador({ pera }) {
//     console.log(pera);
// }

// const fruits = {
//     banana: "banana",
//     pera: "pera"
// }

function liquidificador([primeiro, ...rest]) {
    console.log(rest);
}

liquidificador("Banana");