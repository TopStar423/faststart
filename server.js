const express = require("express");
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const socketIO = require('socket.io');
const app = express();

global.__root = __dirname;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

require('./routes')(app);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

app.listen(port);
console.log('App is listening PORT ', port);
