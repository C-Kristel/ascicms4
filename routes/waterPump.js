const router = require('express').Router();
const pump = require('../model/waterPump')

// Water Pump Status
router.post('/new', async (req, res) => {
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

//Update Water Pump Status
router.patch('/update/:id', async (req, res) => {

    //UPDATING STATUS
    try {
        const patch = await pump.updateOne({
            _id: req.params.id
        }, {
            $set: {
				waterPump: req.body.waterPump
            }
        });
        res.json({ 'message': 'Water Pump Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

//Get all routes
router.get('/all', async (req, res) => {
    const findWaterPumpStatus = await pump.find()
    if (findWaterPumpStatus != 0) {
        res.json(findWaterPumpStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});


module.exports = router;

/* device8 (WATER PUMP)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "OFF"}*/