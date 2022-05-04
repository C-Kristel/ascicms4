const mongoose = require('mongoose')

const CHSchema = new mongoose.Schema(
	{
		ActiveStatus: { 
			type: String
		},
	},
	{ collection: 'Coolhouse' }
)

const model = mongoose.model('CHSchema', CHSchema)

module.exports = model
