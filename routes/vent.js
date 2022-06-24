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
	const { ventStatus, ventNum } = req.body

	if (!ventStatus || typeof ventFans !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!ventNum || typeof ventNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number' })
	}

	try {
		const response = await vent.create({
            ventStatus,
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

//Update vent Status
router.patch('/update/:id', verify, async (req, res) => {

    //UPDATING STATUS
    try {
        const patch = await vent.updateOne({
            _id: req.params.id
        }, {
            $set: {
				ventNum: req.body.ventNum,
                ventStatus: req.body.ventStatus
            }
        });
        res.json({ 'message': 'Vent Status Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});
module.exports = router;

/*device7 (OUT HEATSINK FANS)
	status: "ON"
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST >> Initial data {status: "ON"}
	*/