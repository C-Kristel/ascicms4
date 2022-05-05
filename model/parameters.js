const mongoose = require('mongoose')

const ParamsSchema = new mongoose.Schema(
	{
		start_time: {type: Ti, required: false},
        end_time: {type: String, required: false},
        duration: {type: String, required: true},
		target_temp: {type: String, required: false},
        override: {type: String, required: false},
        date: {type: Date, default: Date.now, required: true}
	},
	{ collection: 'Parameters' }
)

const model = mongoose.model('ParamsSchema', ParamsSchema)

module.exports = model
