const router = require('express').Router();
const Coolhouse = require('../model/chstats')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start Coolhouse Status

router.post('/new', async (req, res) => {
	const { ch_temp, r_temp, water_level, soil_temp, soil_moisture, humidity_lvl, date } = req.body

	if (!ch_temp || typeof ch_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid temperature' })
	}
	
	if (!r_temp || typeof r_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid room temperature' })
	}

	if (!water_level || typeof water_level !== 'string') {
		return res.json({ status: 'error', error: 'Invalid water level' })
	}

    if (!soil_temp || typeof soil_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid soil temperature' })
	}
    if (!soil_moisture || typeof soil_moisture !== 'string') {
		return res.json({ status: 'error', error: 'Invalid soil moisture' })
	}
    if (!humidity_lvl || typeof humidity_lvl !== 'string') {
		return res.json({ status: 'error', error: 'Invalid humidity level' })
	}

	try {
		const response = await Coolhouse.create({
			ch_temp, 
            r_temp, 
            water_level, 
            soil_temp, 
            soil_moisture,
            humidity_lvl, 
            date
		})
		console.log('Coolhouse status saved successfully: ', response)
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
    const findCoolhouseStatus = await Coolhouse.find()
    if (findCoolhouseStatus != 0) {
        res.json(findCoolhouseStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

//Get specific Coolhouse status by id
router.get('/get/:id', async (req, res) => {
    const q = await Coolhouse.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete coolhouse status
router.delete('/delete/:id', async (req, res) => {
    const result = await Coolhouse.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});

//Update Coolhouse Status
router.patch('/update/:id', async (req, res) => {

    //UPDATING STATUS
    try {
        const patch = await Coolhouse.updateOne({
            _id: req.params.id
        }, {
            $set: {
				ch_temp: req.body.ch_temp, 
            	r_temp: req.body.r_temp, 
            	water_level: req.body.water_level, 
            	soil_temp: req.body.soil_temp, 
            	soil_moisture: req.body.soil_moisture,
            	humidity_lvl: req.body.humidity_lvl, 
            	date: req.body.date
            }
        });
        res.json({ 'message': 'Coolhouse Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});
module.exports = router;