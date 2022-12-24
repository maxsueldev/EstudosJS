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

//Alterando estilos
divList.style.backgroundColor = "#fff00f";
divList.style.color = "red";
divList.style.border = "3px solid red";
divList.style.borderRadius = "10px";

//Children - Parent
// console.log(divList.parentElement);
// console.log(divList.parentNode);

// console.log(ul.childElementCount);
// console.log(ul.firstChild, ul.lastChild);

ul.children[2].textContent = "alt";
const todosFilhos = ul.children;  //HTMLCollection com todos os elementos filhos;
console.log(divList.childNodes); //NodeList com todos os elementos filhos;
console.log(primeiroFilho.item(2));  

console.log(ul.childNodes[0]);
ul.childNodes[0].textContent = "0"; 

