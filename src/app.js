const express = require("express");
const path = require('path');
const { email_service } = require("./lib/services");
const validate_incoming_email = require("./lib/services/email_service/validate_incoming_email");
const catch_exceptions = require('./lib/utils/catch_exceptions');
const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get('/emails', (req, res)=>{
    const emails = [
        {
            'id': '1',
            'subject':'My Subject',
            'is_important':true,
            'body':'This is my email and pretty long that we have cut it short!',
            'time_stamp':Date.now() + 1001
        },
        {
            'id': '2',
            'subject':'My Subject Two',
            
            'body':'This is my email and pretty long that we have cut it short!',
            'time_stamp':Date.now() + 1002
        },
        {
            'id': '3',
            'subject':'My Subject Three',
            'viewed_at':Date.now(),
            'body':'This is my email and pretty long that we have cut it short!',
            'time_stamp':Date.now() + 1003
        },
        {
            'id': '4',
            'subject':'My Subject Four',
           
            'body':'This is my email and pretty long that we have cut it short!',
            'time_stamp':Date.now() + 1004
        },
        {
            'id': '5',
            'subject':'My Subject Five',
            
            'body':'This is my email and pretty long that we have cut it short!',
            'time_stamp':Date.now() + 1005
        }
    ];
    res.json(emails);
});

app.post(
    '/emails', 
    validate_incoming_email, 
    catch_exceptions(async (req, res) => {
        const { receipients, subject, message } = req.body;
        const email = await email_service.create_email(receipients, subject, message);
        res.json(email);
  
    /*console.log(req.body);
    console.log('------------------------------');
    res.json(req.body);*/
    })
);

app.all("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.use((error, req, res, next)=>{
    res.status(500).json({error: error.message});
});


module.exports = app;