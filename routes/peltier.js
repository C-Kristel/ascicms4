const router = require('express').Router();
const peltier = require('../model/peltier')


// Peltier1

router.post('/api/pel1', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier1 status
router.get('/api/pel1/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 2
router.post('/api/pel2', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier2 status
router.get('/api/pel2/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 3
router.post('/api/pel3', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier3 status
router.get('/api/pel3/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 4
router.post('/api/pel4', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier4 status
router.get('/api/pel4/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 5
router.post('/api/pel5', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier5 status
router.get('/api/pel5/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 6
router.post('/api/pel6', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier6 status
router.get('/api/pel6/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 7
router.post('/api/pel7', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier7 status
router.get('/api/pel7/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

// Peltier 8
router.post('/api/pel8', async (req, res) => {
	const { peltierStatus, peltierNum, miniFans, miniFanNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

    if (!miniFans || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum,
            miniFans,
            miniFanNum
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

//get peltier8 status
router.get('/api/pel8/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});


module.exports = router;