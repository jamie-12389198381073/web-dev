var myVariable = "Welcome to CMP-4011 Web-Based Programming Module";
console.log(myVariable);
let letVariable = "This is a let variable";
console.log(letVariable);
letVariable = "This is an updated let variable";
console.log(letVariable)
const constVariable = "This is a const variable";
console.log(constVariable);
for (let i = 0; i < 5; i++) {
    console.log(myVariable + i);
}
let myDate = new Date();
let todayDate = myDate.toDateString();

if (document.querySelector('.mypara')) {
    document.querySelector(".mypara").innerHTML = 'Today is ' + todayDate;
    document.querySelector(".mypara").setAttribute('class', 'className')
    let newPara = document.createElement('p');
    newPara.setAttribute('class', 'className');
    newPara.textContent = "Hello, This is a new paragraph!";
    let sectionElement = document.querySelector('section');
    sectionElement.parentNode.insertBefore(newPara, sectionElement);
    let listElement = document.querySelector('article ul');
    let indvidualElemet = listElement.children[3]
    let newLi = document.createElement('li');
    newLi.innerHTML = "this is my list element"
    listElement.insertBefore(newLi, indvidualElemet)
    listElement.children[4].remove();
    newElement.parentNode.insertBefore(document.querySelector('lastli'));
    newPara.textContent = "Hello, This is a new paragraph!";
}

document.querySelector('#menu').addEventListener('click', showNav);

function showNav() {
    document.querySelector('nav ul').classList.toggle('showNav');
}

let myForm = document.querySelector('form');
let myName = document.querySelector('#name');
let myEmail = document.querySelector('#email');
let myPara = document.querySelector('.message');
console.log(myForm);
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
    myPara.innerText = `Thank you ${myName.value} at ${myEmail.value}`;
})