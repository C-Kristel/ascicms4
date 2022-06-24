const router = require('express').Router();
const Logs = require('../model/logs')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start Coolhouse Status

router.post('/new', async (req, res) => {
	const { ch_temp, ch_humidity, r_temp, r_humidity, soil_moisture, date } = req.body

	if (!ch_temp || typeof ch_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid temperature' })
	}

    if (!ch_humidity || typeof ch_humidity !== 'string') {
		return res.json({ status: 'error', error: 'Invalid humidity' })
	}
	
	if (!r_temp || typeof r_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid room temperature' })
	}

    if (!r_humidity || typeof r_humidity !== 'string') {
		return res.json({ status: 'error', error: 'Invalid humidity' })
	}

    if (!soil_moisture || typeof soil_moisture !== 'string') {
		return res.json({ status: 'error', error: 'Invalid soil moisture' })
	}

	try {
		const response = await Logs.create({
			ch_temp, 
            ch_humidity,
            r_temp, 
            r_humidity,
            soil_moisture,
            date
		})
		console.log('Coolhouse Logs saved successfully: ', response)
	} catch (error) {
		if (error.code === 400) {
			return res.json({ status: 'error', error: 'Error' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get all routes
router.get('/all', async (req, res) => {
    const findLogs = await Logs.find()
    if (findLogs != 0) {
        res.json(findLogs);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

//Get specific logs by id
router.get('/get/:id', async (req, res) => {
    const q = await Logs.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete log
router.delete('/delete/:id', async (req, res) => {
    const result = await Logs.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});

//Update Logs
router.patch('/update/:id', async (req, res) => {

    //UPDATING LOGS
    try {
        const patch = await Logs.updateOne({
            _id: req.params.id
        }, {
            $set: {
				ch_temp: req.body.ch_temp,
                ch_humidity: req.body.ch_humidity,
                r_temp: req.body.r_temp,
                r_humidity: req.body.r_humidity,
                soil_moisture: req.body.soil_moisture,
                date: req.body.date
            }
        });
        res.json({ 'message': 'Logs Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

module.exports = router;