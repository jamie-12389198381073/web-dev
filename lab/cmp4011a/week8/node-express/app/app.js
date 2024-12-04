const express = require("express");
const app = express();
const port = 3005;
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.get("/", (req,res) => {
   // res.send("Hello, welcome to my NodeJS app!")
    res.sendFile('index.html', (err) => {
        if (err) {
            console.log(err);
        }
    })
})
app.listen(port, () => {
console.log(`myapp is listening on port ${port}!`);
})
app.get("/hello", (req,res) => {
    res.send("This is the request to Hello!");
})
app.get("/hello/:name", (req,res) => {
    const routeParameter = req.params;
    const name = routeParameter.name;
    res.send(`Hello ${name}, welcome to my NodeJS application`)
})
app.post("/contact", (req,res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.send(`Response from the server : Hello ${name}, thank you for your message! we will contact you at ${email}`);
});

