const router = require('express').Router();
const miniFans = require('../model/miniFans')

//Get all routes
router.get('/all', async (req, res) => {
    const findMiniFans = await miniFans.find()
    if (findMiniFans != 0) {
        res.json(findMiniFans);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }
});

// Mini Fan 1
router.post('/mf1', async (req, res) => {
	const { miniFanStatus, miniFanNum } = req.body

    if (!miniFanStatus || typeof miniFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await miniFans.create({
            miniFanStatus,
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

//get Mini Fan 1 status
router.get('/mf1/get/:id', async (req, res) => {
    const q = await miniFans.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Mini Fan 2
router.post('/mf2', async (req, res) => {
	const { miniFanStatus, miniFanNum } = req.body

    if (!miniFanStatus || typeof miniFanStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!miniFanNum || typeof miniFanNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}


	try {
		const response = await miniFans.create({
            miniFanStatus,
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

//get Mini Fan 2 status
router.get('/mf2/get/:id', async (req, res) => {
    const q = await miniFans.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Update Status
router.patch('/update/:id', async (req, res) => {
	const mf = req.body

    //UPDATING mini fan
    try {
        const miniFan = await miniFan.updateOne({
            _id: req.params.id
        }, {
            $set: {
                miniFanNum: req.body.miniFanNum,
                miniFanStatus: req.body.miniFanStatus
            }
        });
        res.json({ 'message': 'Mini Fan Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

module.exports = router;
/*

device3 (MINI FAN 1)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}

device4 (MINI FAN 2)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}

*/
