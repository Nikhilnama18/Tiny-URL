const express = require('express');
const app = express();
const mongoose = require('mongoose');
const storingRoute = require('./api/routers/store')
const cors = require('cors')

app.use(cors())
// const morgan = require('morgan');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', (req, res, next) => {
    console.log(`Hit at ${req.url} :: ${req.method} ::`)
    next();
})
app.use('/', storingRoute);

mongoose.connect('mongodb+srv://NikhilNama:'
    + 'Nick1807' +
    '@cluster0.mhvww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => {
        if (err)
            console.log("Mongo Error is :", err)
    });

module.exports = app;