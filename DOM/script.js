// console.dir(document.body);

const byId = document.getElementById("root");
const childrenRoot = byId.children;
console.log(byId);
console.log(childrenRoot);

const byClass = byId.getElementsByClassName("div-list");
const byTagName = document.getElementsByTagName("li");
console.log(byClass);  //HTMLCollection
console.log(byTagName);  //HTMLCollection

//QuerySelector - QuerySelectorAll  (Possibilita seleção como no CSS)
const divList = document.querySelector("#root .div-list");  
const selectorAllLi = divList.querySelectorAll("li");
console.log(divList);
console.log(selectorAllLi);  //NodeList

selectorAllLi.forEach(value => value.textContent = "alterado");
selectorAllLi[0].innerText = "ok";

const ul = divList.querySelector("ul");
// ul.innerHTML = "<li></li>";