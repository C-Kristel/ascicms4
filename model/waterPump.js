const mongoose = require('mongoose')

const WaterSchema = new mongoose.Schema(
	{
		waterPump: { 
			type: String, 
			required: true }
	},
	{ collection: 'PumpStatus' }
)

const model = mongoose.model('WaterSchema', WaterSchema)

module.exports = model
