const arr = ["st1", "st2", "st3"];
let arr2 = [];
for(let a in arr) {
    arr2.push(arr[a]);
}

console.log(arr2);

const obj = {
    prop1: "aaa",
    prop2: "bbb",
    method1() {
        console.log(method1);
    }
}

for(let key in obj) {
    console.log(key);
}