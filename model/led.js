const mongoose = require('mongoose')

const LEDSchema = new mongoose.Schema(
	{
		ledStatus: { 
			type: String, 
			required: true },
		ledNum: {
			type: String,
			required:true
		},
	},
	{ collection: 'LEDStatus' }
)

const model = mongoose.model('LEDSchema', LEDSchema)

module.exports = model
