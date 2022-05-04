const router = require('express').Router();
const pump = require('../model/waterPump')

// Water Pump Status
router.post('/api/water', async (req, res) => {
	const { waterPump } = req.body

	if (!waterPump || typeof waterPump !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	} 

	try {
		const response = await pump.create({
			waterPump
		})
		console.log('Success: ', response)
	} catch (error) {
		if (error.code === 400) {
			return res.json({ status: 'error', error: 'Error' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get all routes
router.get('/api/water/all', async (req, res) => {
    const findWaterPumpStatus = await pump.find()
    if (findWaterPumpStatus != 0) {
        res.json(findWaterPumpStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});


module.exports = router;