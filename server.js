const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const app = express();

// API file for interacting with MongoDB
// const api = require('./server/routes/api');
const MessageRoutes = require('./routes/messages');

mongoose.connect('mongodb://root:password@ds119489.mlab.com:19489/prinxedatabase');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
       console.log('Connected to MongoDB');
       return;
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.resolve('./dist/assets')));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use('/messages', MessageRoutes)


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));