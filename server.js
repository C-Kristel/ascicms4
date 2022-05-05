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

//routes
const UserRoute = require('./routes/User');
const chRoute = require('./routes/CH_status');
const chActiveStatus = require('./routes/Coolhouse');
const ledStatus = require('./routes/led');
const peltierStatus = require('./routes/peltier');
const vent = require('./routes/vent');
const waterPump = require('./routes/waterPump');
dotenv.config();

/*mongoose.connect(process.env.DB_connection, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	//useCreateIndex: true
}) */

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
app.use(bodyParser.json())

app.listen(8080, () => {
	console.log('Server up at 8080')
})
