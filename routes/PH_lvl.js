const router = require('express').Router();
const SoilpH = require('../model/pH')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start Coolhouse Status

router.post('/new', async (req, res) => {
	const { pH_lvl } = req.body
	//const coolhouse = await Coolhouse.findOne({ ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date }).lean() 


	if (!pH_lvl || typeof pH_lvl !== 'string') {
		return res.json({ status: 'error', error: 'Invalid pH level' })
	}

	try {
		const response = await SoilpH.create({
			pH_lvl
		})
		console.log('Soil pH level saved successfully: ', response)
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
    const findSoilpH = await SoilpH.find()
    if (findSoilpH != 0) {
        res.json(findSoilpH);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

//Get specific Coolhouse status by id
router.get('/get/:id', async (req, res) => {
    const q = await SoilpH.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete coolhouse status
router.delete('/delete/:id', async (req, res) => {
    const result = await SoilpH.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});

module.exports = router;