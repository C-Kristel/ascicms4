const mongoose = require('mongoose')

const pH_lvl = new mongoose.Schema(
	{
		pH_lvl: {type: String, required: true}
	},
	{ collection: 'PH_Level' }
)

const model = mongoose.model('pH', pH_lvl)

module.exports = model