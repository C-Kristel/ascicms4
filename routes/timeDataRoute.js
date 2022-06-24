const router = require('express').Router();
const timeDataSchema = require('../model/timeDataModel');

router.get('/all', async (req, res) => {
    const findData = await timeDataSchema.find()
    if (findData != 0) {
        res.json(findData);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

router.post('/new', async (req, res) => {
    const { start_time, end_time, duration} = req.body

    if (!start_time || typeof start_time !== 'string') {
        return res.json({ status: 'error', error: 'Invalid' })
    }

    if (!end_time || typeof end_time !== 'string') {
        return res.json({ status: 'error', error: 'Invalid' })
    }

    if (!duration || typeof duration !== 'string') {
        return res.json({ status: 'error', error: 'Invalid' })
    }

    try {
        const response = await timeDataSchema.create({
            start_time,
            end_time,
            duration
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


//Update Params
router.patch('/update/:id', async (req, res) => {

    //CHECK IF Parameters ALREADY EXIST
    const ParamsExist = await timeDataSchema.findOne({
        _id: {
            $ne: req.params.id
        }
    });
    if (ParamsExist) return res.status(400).json({ 'error': 'Existing' });

    //UPDATING CONTACT
    try {
        const patch = await timeDataSchema.updateOne({
            _id: req.params.id
        }, {
            $set: {
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                duration: req.body.duration
            }
        });
        res.json({ 'message': 'Parameters Updated' });
    } catch (err) {
        res.status(400).json({ 'error': err });
    }
});

module.exports = router;