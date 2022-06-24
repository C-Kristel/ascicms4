const router = require('express').Router();
const led = require('../model/led')

//Get all routes
router.get('/all', async (req, res) => {
    const findLedStatus = await led.find()
    if (findLedStatus != 0) {
        res.json(findLedStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});


//LED1
router.post('/led1', async (req, res) => {
	const { ledStatus, ledNum } = req.body

	if (!ledStatus || typeof ledStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ledNum || typeof ledNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await led.create({
			ledStatus,
            ledNum
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

//get LED1 status
router.get('/led1/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//LED2
router.post('/led2', async (req, res) => {
	const { ledStatus, ledNum } = req.body

	if (!ledStatus || typeof ledStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ledNum || typeof ledNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await led.create({
			ledStatus,
            ledNum
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

//get LED2 status
router.get('/led2/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Update LED Status
router.patch('/update/:id', async (req, res) => {

    //UPDATING STATUS
    try {
        const patch = await led.updateOne({
            _id: req.params.id
        }, {
            $set: {
				ledNum: req.body.ledNum,
                ledStatus: req.body.ledStatus
            }
        });
        res.json({ 'message': 'LED Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});
module.exports = router;

/* device5 (LED 1) 
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "OFF"}

device6 (LED 2) 
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "OFF"}

	*/