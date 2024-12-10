let myContact = document.querySelector("#contact");
let localJsonFile = "contact.json";

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{ console.log(responseData);
        for (item of responseData){
            const title = document.createElement('h1');
            document.querySelector('#namelabel').textContent = item.Name
            const email = document.createElement('h1');
            document.querySelector('#emaillabel').textContent = item.Email
            const message = document.createElement('h1');
            document.querySelector('#messagelabel').textContent = item.Message
            const surname = document.createElement('h1')
            document.querySelector('#surname').textContent = item.lastname
            const foot = document.createElement('h4');
            document.querySelector('#foottag').textContent = item.Foot
            const homepage = document.createElement('h1');
            document.querySelector('#Home').textContent = item.home
            const aboutUs = document.createElement('h1')
            document.querySelector('#About').textContent = item.about
            const contactUs = document.createElement('h1');
            document.querySelector('#Contact').textContent = item.contact
            const ourGoals = document.createElement('h1');
            document.querySelector('#Goals').textContent = item.goals
            const required = document.createElement('h1');
            document.querySelector('#change').textContent = item.require
            const Title = document.createElement('h1');
            document.querySelector('#title').textContent = item.header
            const fblink = document.createElement('h4');
            document.querySelector('#fb').textContent = item.facebook
            const twitlink = document.createElement('h4');
            document.querySelector('#twit').textContent = item.twitter
            const linkedlink = document.createElement('h4');
            document.querySelector('#linked').textContent = item.linkedin



        }
     })
    })


    let myForm = document.querySelector('form');
    let myName = document.querySelector('#fname');
    let mySurname = document.querySelector('#lname');
    let myEmail = document.querySelector('#email');
    let myConfirmation = document.querySelector('#change');
    let myMessage = document.querySelector('#message');

    myForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formBody = {
            firstName: myName.value,
            lastName: mySurname.value,
            email: myEmail.value,
            message: myMessage.value
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
                myConfirmation.textContent=`Hi ${responsedata.firstName} ${responsedata.lastName}, your message has
                been received, we will contact you at ${responsedata.email}`;

            });
    });