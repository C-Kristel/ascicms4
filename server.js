'use strict'
 
require('make-promises-safe')

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('dotenv/config')
const app = express();

//Connect to DB
require('./initDB')();

const port = process.env.PORT || 8080;

//routes
const UserRoute = require('./routes/User');
const chRoute = require('./routes/CH_status');
const chActiveStatus = require('./routes/Coolhouse');
const ledStatus = require('./routes/led');
const peltierStatus = require('./routes/peltier');
const vent = require('./routes/vent');
const waterPump = require('./routes/waterPump');
const plants = require('./routes/plant');
const params = require('./routes/parameters');
const pH = require('./routes/PH_lvl');
const timeData = require('./routes/timeDataRoute');
const miniFans = require('./routes/miniFans');
const logs = require('./routes/logs');
dotenv.config();

//app.use('/', express.static(path.join(__dirname, 'static')))


// middleware
app.use(express.json());

//route middlewares
app.use('/', UserRoute);
app.use('/ch', chRoute);
app.use('/chact', chActiveStatus);
app.use('/led', ledStatus);
app.use('/pel', peltierStatus);
app.use('/vent', vent);
app.use('/wp', waterPump);
app.use('/plant', plants);
app.use('/params', params);
app.use('/pH', pH);
app.use('/timedata', timeData);
app.use('/mf', miniFans);
app.use('/logs', logs);
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Server is running [', port, ']');
});
