const mongoose = require('mongoose')

const ParamsSchema = new mongoose.Schema(
	{
		pH_lvl: {type: String, required: true}
	},
	{ collection: 'PH_Level' }
)

const model = mongoose.model('ParamsSchema', ParamsSchema)

module.exports = model