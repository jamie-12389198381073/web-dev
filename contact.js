let myContact = document.querySelector("#contact");
let localJsonFile = "contact.json";

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{ console.log(responseData);
        for (item of responseData){

        }
     })
    })