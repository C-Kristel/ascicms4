const router = require('express').Router();
const vent = require('../model/vent')

//Get all routes
router.get('/all', async (req, res) => {
    const findVentStatus = await vent.find()
    if (findVentStatus != 0) {
        res.json(findVentStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

// Vent1
router.post('/vent1', async (req, res) => {
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
router.get('/vent1/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

// Vent2
router.post('/vent2', async (req, res) => {
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
router.get('/vent2/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent3
router.post('/vent3', async (req, res) => {
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
router.get('/vent3/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent4
router.post('/vent4', async (req, res) => {
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
router.get('/vent4/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent5
router.post('/vent5', async (req, res) => {
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
router.get('/vent5/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent6
router.post('/vent6', async (req, res) => {
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
router.get('/vent6/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent7
router.post('/vent7', async (req, res) => {
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
router.get('/vent7/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent8
router.post('/vent8', async (req, res) => {
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
router.get('/vent8/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent9
router.post('/vent9', async (req, res) => {
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
router.get('/vent9/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent10
router.post('/vent10', async (req, res) => {
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
router.get('/vent10/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent11
router.post('/vent11', async (req, res) => {
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
router.get('/vent11/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Vent12
router.post('/vent12', async (req, res) => {
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
router.get('/vent12/get/:id', async (req, res) => {
    const q = await vent.findById({
        _id: req.params.id
    });
    res.json(q);
});
module.exports = router;

/*device7 (OUT HEATSINK FANS)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}
	*/