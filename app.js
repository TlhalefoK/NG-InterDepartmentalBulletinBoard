const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose = require('mongoose')
const Bulletin = require("./models/bulletin")

const fs = require('fs')
const bulletin = require('./models/bulletin')
const cert = fs.readFileSync('keys/certificate.pem');
const options = {server: { sslCA:cert}};
const connstring = 'place-your-connection-string here'

const bulletinRoutes = require("./routes/bulletin");
const userRoutes = require("./routes/user");

mongoose.connect(connstring)
    .then(()=> 
    {
        console.log('Connected :-)')
    })
    .catch(()=>
    {
        console.log('Connection Failed. Please Contact System Administrator')
    },options);

app.use(express.json())

app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Contrent-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','*');
    next();
});

app.use(urlprefix+'/bulletins', bulletinRoutes)
app.use(urlprefix+'/users', userRoutes)

module.exports = app;