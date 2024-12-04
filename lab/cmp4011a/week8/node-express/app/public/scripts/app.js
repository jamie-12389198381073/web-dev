var myVariable = "Welcome to CMP-4011 Web-Based Programming Module";
console.log(myVariable);
let letVariable = "This is a let variable";
console.log(letVariable);
letVariable = "This is an updated let variable";
console.log(letVariable)
const constVariable ="This is a const variable";
console.log(constVariable);
for (let i = 0; i < 5; i++) {
 console.log(myVariable + i);
}
let myDate = new Date();
let todayDate = myDate.toDateString();
if (document.querySelector(".mypara")) {
    document.querySelector(".mypara").innerHTML = 'Today is ' + todayDate;
    document.querySelector(".mypara").setAttribute('class', 'className')
}

let newPara = document.createElement('p');
newPara.setAttribute('class', 'className');
newPara.textContent= "Hello, This is a new paragraph!";
let sectionElement = document.querySelector('section');
sectionElement.parentNode.insertBefore(newPara, sectionElement);
let listElement = document.querySelector('article ul');
if (listElement) {
    let indvidualElemet = listElement.children[3]
    let newLi = document.createElement('li');
    newLi.innerHTML = "this is my list element"
    listElement.insertBefore(newLi,indvidualElemet)
    listElement.children[4].remove();
}



//newElement.parentNode.insertBefore(document.querySelector('lastli'));
//newPara.textContent= "Hello, This is a new paragraph!";
document.querySelector('#menu').addEventListener('click', showNav);
function showNav() {
    document.querySelector('nav ul').classList.toggle('shownav');
}
let myForm = document.querySelector('form');
let myName = document.querySelector('#name');
let myEmail = document.querySelector('#email');
let myPara = document.querySelector('#p');
document.addEventListener('submit', () => {
    myPara.innerText = `Thank you ${myName.value} at ${myEmail.value}`;
})
let mySchedule = document.querySelector('#schedule');
let localJsonFile = "data.json";
document.addEventListener('DOMContentLoaded', ()=> {
    fetch(localJsonFile).then(response => response.json()).then(responseData =>{
        console.log(responseData);
        for (item of responseData) {
            const schedule = document.createElement('article');
            const imageElement = document.createElement('img');

            sectionElement.appendChild(schedule);
            imageElement.src = item.imageURL;
            imageElement.alt = item.alt;
            schedule.appendChild(imageElement);
            const h4Element = document.createElement('h4');
            h4Element.textContent = item.style;
            schedule.appendChild(h4Element);
        }
    })
})