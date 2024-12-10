const express = require("express");
const app = express();
const port = 3000;

app.post("/contact", (req, res)=>{
    console.log(req.body);
    const name = req.body.name;
    const sName = req.body.lname
    const email = req.body.email;
    const message = req.body.message;
    res.json({name:name, lname:sName, email:email});
    });