let char = "#";

for(let i=0; i<7; i++) {
    if(i==6) {
        console.log("###### #######");
        break;
    }
    console.log(char);
    char += "#";
}

// for(let line = "#"; line.length < 8; line += "#") {
//     console.log(line);
// }