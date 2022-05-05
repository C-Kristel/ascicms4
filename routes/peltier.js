const router = require('express').Router();
const peltier = require('../model/peltier')

//Get all routes
router.get('/all', async (req, res) => {
    const findPeltiers = await peltier.find()
    if (findPeltiers != 0) {
        res.json(findPeltiers);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }
});

// Peltier1

router.post('/pel1', async (req, res) => {
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
router.get('/pel1/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 2
router.post('/pel2', async (req, res) => {
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
router.get('/pel2/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 3
router.post('/pel3', async (req, res) => {
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
router.get('/pel3/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 4
router.post('/pel4', async (req, res) => {
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
router.get('/pel4/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 5
router.post('/pel5', async (req, res) => {
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
router.get('/pel5/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 6
router.post('/pel6', async (req, res) => {
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
router.get('/pel6/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Peltier 7
router.post('/pel7', async (req, res) => {
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
router.get('/pel7/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});

// Peltier 8
router.post('/pel8', async (req, res) => {
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
router.get('/pel8/get/:id', async (req, res) => {
    const q = await peltier.findById({
        _id: req.params.id
    });
    res.json(q);
});


module.exports = router;