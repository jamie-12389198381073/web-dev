const express = require('express');
const app = express();
const port = 3050;
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/goals.html", (req,res) => {
     fs.readFile(goals.json, 'utf8', (err, data) => {
        console.log(data);
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h1');
        let h3 = document.createElement('h1');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let div1 = document.querySelector('#div1');
        let div2 = document.querySelector('#div2');
        let div3 = document.querySelector('#div3');
        div1.appendChild(h1);
        div1.appendChild(p1);
        div2.appendChild(h2);
        div2.appendChild(p2);
        div3.appendChild(h3);
        div3.appendChild(p3);
        h1.textContent = "Industry";
        p1.textContent = "Industry text";
        h2.textContent = "Innovation and Infrastructure";
        p2.textContent = "Innovation and Infrastructure text";
        h3.textContent = "No Poverty";
        p3.textContent= "No Poverty text";
     })
 })
 app.post('/contact', (req, res) => {
       console.log(req.body);
       const firstName = req.body.firstName;
       const lastName = req.body.lastName;
       const email = req.body.email;
       res.send(`Thank you ${firstName} ${lastName} for contacting us. We will respond to your email at ${email}`);
 })
 app.listen(port, () => {
     console.log(`Listening on port ${port}`);
 })
