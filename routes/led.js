const router = require('express').Router();
const led = require('../model/led')


// LED1
router.post('/api/led1', async (req, res) => {
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
router.get('/api/led1/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//LED2
router.post('/api/led2', async (req, res) => {
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
router.get('/api/led2/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//LED3
router.post('/api/led3', async (req, res) => {
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
router.get('/api/led3/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});

//LED4
router.post('/api/led4', async (req, res) => {
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
router.get('/api/led4/get/:id', async (req, res) => {
    const q = await led.findById({
        _id: req.params.id
    });
    res.json(q);
});
module.exports = router;