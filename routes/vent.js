const router = require('express').Router();
const vent = require('../model/vent')


// Vent1
router.post('/api/vent1', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 1 status
router.get('/api/vent1/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

// Vent2
router.post('/api/vent2', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 2 status
router.get('/api/vent2/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent3
router.post('/api/vent3', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 3 status
router.get('/api/vent3/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent4
router.post('/api/vent4', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 4 status
router.get('/api/vent4/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent5
router.post('/api/vent5', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 5 status
router.get('/api/vent5/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent6
router.post('/api/vent6', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 6 status
router.get('/api/vent6/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent7
router.post('/api/vent7', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 7 status
router.get('/api/vent7/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent8
router.post('/api/vent8', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 8 status
router.get('/api/vent8/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent9
router.post('/api/vent9', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 9 status
router.get('/api/vent9/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent10
router.post('/api/vent10', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 10 status
router.get('/api/vent10/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent11
router.post('/api/vent11', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 11 status
router.get('/api/vent11/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent12
router.post('/api/vent12', async (req, res) => {
	const { ventFans, ventNum } = req.body

	if (!ventFans || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventFans,
            ventNum
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

//get vent 12 status
router.get('/api/vent12/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});
module.exports = router;