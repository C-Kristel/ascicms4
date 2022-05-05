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
// LED1
router.post('/led1', async (req, res) => {
	const { ledStatus, ledNum } = req.body

	if (!ledStatus || typeof ledStatus !== 'boolean') {
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

	if (!ledStatus || typeof ledStatus !== 'boolean') {
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

//LED3
router.post('/led3', async (req, res) => {
	const { ledStatus, ledNum } = req.body

	if (!ledStatus || typeof ledStatus !== 'boolean') {
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

//get LED3 status
router.get('/led3/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//LED4
router.post('/led4', async (req, res) => {
	const { ledStatus, ledNum } = req.body

	if (!ledStatus || typeof ledStatus !== 'boolean') {
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

//get LED4 status
router.get('/led4/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});
module.exports = router;