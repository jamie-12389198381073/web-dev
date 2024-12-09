const express = require("express");
const app = express();
const port = 3000;

app.post("/contact", (req, res)=>{
    console.log(req.body);
    const name = req.body.firstName;
    const sName = req.body.lastName
    const email = req.body.email;
    const message = req.body.message;
    res.json({firstName: name, lastName:sName, email:email});
    });