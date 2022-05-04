const router = require('express').Router();
const Activestat = require('../model/Coolhouse')

// Start Coolhouse Active Status
router.post('/api/Coolhouse', async (req, res) => {
	const { ActiveStatus } = req.body

	if (!ActiveStatus || typeof ActiveStatus !== 'string') {
		return res.json({ status: 'error', error: 'Invalid' })
	} 

	try {
		const response = await Activestat.create({
			ActiveStatus
		})
		console.log('Coolhouse activity status logged successfully: ', response)
	} catch (error) {
		if (error.code === 400) {
			// duplicate key
			return res.json({ status: 'error', error: 'Error' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

//Get all routes
router.get('/api/Coolhouse/all', async (req, res) => {
    const findCoolhouseActiveStatus = await Activestat.find()
    if (findCoolhouseActiveStatus != 0) {
        res.json(findCoolhouseActiveStatus);
    } else {
        return res.status(400).json({ 'error': 'DB is empty' });
    }

});

//Get specific Contacts
router.get('/api/Coolhouse/get/:id', async (req, res) => {
    const q = await Activestat.findById({
        _id: req.params.id
    });
    res.json(q);
});

//Delete Contact
router.delete('/api/Coolhouse/delete/:id', async (req, res) => {
    const result = await Activestat.findByIdAndDelete({
        _id: req.params.id
    });
    res.json(result);
});
// End Coolhouse Active status
module.exports = router;