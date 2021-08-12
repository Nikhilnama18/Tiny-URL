const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRoute = require('./api/routers/controller')
const cors = require('cors')

//  Handling Cors Errors    
app.use(cors())

// Body Parsing json requests
app.use(express.json());

// Body Parsing urlencoded requests
app.use(express.urlencoded({ extended: false }));

// Accetps every request from http://127.0.0.1:3000/ and console outs HTTP Request method
app.use('/', (req, res, next) => {
    console.log(`Hit at ${req.url} :: ${req.method} ::`)
    next();
})

// Accetps every request from http://127.0.0.1:3000/ 
app.use('/', indexRoute);

// Creating a Connetion with MongoDB
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.mhvww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => {
        if (err)
            console.log('MongoDB connection error at App.js ', err);
    });

//Exporting entire file
module.exports = app;