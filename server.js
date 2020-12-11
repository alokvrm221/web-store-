const express = require('express');
const app  = express();
const mongoose = require('mongoose');

const cors = require('cors');

bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());
app.options('*' , cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* Port No */
const port = 8080;

/* MongoDb connection */

mongoose.connect('mongodb://localhost:27017/plunestest', {useNewUrlParser : true})
    .then( db => {
        console.log('Database connected on Port 27017')
        return (require('./routes/users.routes'))(app);
    })
    .catch(err => {
        console.log('Error in connection with Database')
    });

app.listen(port , () => {
    console.log('Server Listening on Port', port);
})
