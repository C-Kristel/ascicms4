const router = require('express').Router();
const Params = require('../model/parameters');

//Get all params
router.get('/all', async (req, res) => {
    const findParams = await Params.find()
    if (findParams != 0) {
        res.json(findParams);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

router.post('/new', async (req, res) => {
	const { start_time, end_time, duration, override, date } = req.body

	if (!start_time || typeof start_time !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}
	
	if (!end_time || typeof end_time !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

	if (!duration || typeof duration !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

    if (!override || typeof override !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	}

	try {
		const response = await Params.create({
			start_time,
            end_time,
            duration,
            override
		})
		console.log("Parameters logged successfully: ", response)
	} catch (error) {
		if (error.code === 400) {
			return res.json({ status: 'error', error: 'Invalid data' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get specific Parameters
router.get('/get/:id', async (req, res) => {
    const q = await Params.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete Params
router.delete('/delete/:id', async (req, res) => {
    const result = await Params.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});

//Update Params
router.patch('/update/:id', async (req, res) => {

    //CHECK IF Parameters ALREADY EXIST
    const ParamsExist = await Params.findOne({
        _id: {
            $ne: req.params.id
        }
    });
    if (ParamsExist) return res.status(400).json({ 'error': 'Existing' });

    //UPDATING CONTACT
    try {
        const patch = await Params.updateOne({
            _id: req.params.id
        }, {
            $set: {
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                duration: req.body.duration,
                target_temp: req.body.target_temp,
                override: req.body.override,
            }
        });
        res.json({ 'message': 'Parameters Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

module.exports = router;

/*Parameters:
	start_time: "00:00" //FORMAT IN STRING HH:mm
	end_time: "00:00" //FORMAT IN STRING HH:mm
	duration: "120" //FORMAT IN STRING mm 120 mins
	target_temp //<< remove
	override: "ON" //STRING
	
	//PATCH >> UPDATES Initial data NO NEW data added
	//GET ALL
	//POST INITIAL DATA : {start_time: "08:30", end_time: "16:30", duration: "480", override: "OFF"}
    */


