const router = require('express').Router();
const Plants = require('../model/plant');

//Get all plant data
router.get('/all', verify, async (req, res) => {
    const findPlants = await Plants.find()
    if (findPlants != 0) {
        res.json(findPlants);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

router.post('/new', async (req, res) => {
	const { plantNum, plantHeight, numberOfLeaves, leafGreenness, date } = req.body

	if (!plantNum || typeof plantNum !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Plant Number' })
	}
	
	if (!plantHeight || typeof plantHeight !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Plant Height' })
	}

	if (!numberOfLeaves || typeof numberOfLeaves !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Number of Leaves' })
	}

    if (!leafGreenness || typeof leafGreenness !== 'string') {
		return res.json({ status: 'error', error: 'Invalid Leaf Greenness' })
	}

	try {
		const response = await Plants.create({
			plantNum,
			plantHeight,
			numberOfLeaves,
            leafGreenness
		})
		console.log("Plant's data logged successfully: ", response)
	} catch (error) {
		if (error.code === 400) {
			return res.json({ status: 'error', error: 'Invalid data' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get specific Plant Data
router.get('/get/:id', async (req, res) => {
    const q = await Plants.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete Contact
router.delete('/delete/:id', async (req, res) => {
    const result = await Plants.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});

//Update a Plant
router.patch('/update/:id', async (req, res) => {

    //CHECK IF CONTACT ALREADY EXIST
    const PlantExist = await Plants.findOne({
        plantNum: req.body.plantNum,
        plantHeight: req.body.plantHeight,
        numberOfLeaves: req.body.numberOfLeaves,
        leafGreenness: req.body.leafGreenness,
        _id: {
            $ne: req.params.id
        }
    });
    if (contactExist) return res.status(400).json({ 'error': 'Plant Data Already Exists' });

    //UPDATING CONTACT
    try {
        const patch = await Plants.updateOne({
            _id: req.params.id
        }, {
            $set: {
                plantNum: req.body.plantNum,
                plantHeight: req.body.plantHeight,
                numberOfLeaves: req.body.numberOfLeaves,
                leafGreenness: req.body.leafGreenness,
            }
        });
        res.json({ 'message': 'Plant Data Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

module.exports = router;


