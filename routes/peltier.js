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
	const { peltierStatus, peltierNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum
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
	const { peltierStatus, peltierNum } = req.body

	if (!peltierStatus || typeof peltierStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!peltierNum || typeof peltierNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await peltier.create({
			peltierStatus,
            peltierNum
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

//Update Status
router.patch('/update/:id', async (req, res) => {
    //UPDATING CONTACT
    try {
        const pel = await peltier.updateOne({
            _id: req.params.id
        }, {
            $set: {
                peltierNum: req.body.peltierNum,
                peltierStatus: req.body.peltierStatus
            }
        });
        res.json({ 'message': 'Peltier Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});


module.exports = router;
/*
device1 (PELTIER 1)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}

device2 (PELTIER 2)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}

*/
