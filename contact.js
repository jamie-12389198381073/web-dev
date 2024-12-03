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

    myForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formBody = {
            name:myName.value,
            email:myEmail.value,
            message:myMessage.value
            };
        const requestHeaders = {
            "Content-Type": "application/json"
        };
        fetch("/contact", {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(formBody)
            }).then(response => response.json())
            .then (responsedata =>{ console.log(responsedata);
                myConfirmation.textContent=`Hi ${responsedata.name}, your message has
                been received, we will contact you at ${responsedata.email}`;
        });
    });