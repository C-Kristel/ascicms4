const mongoose = require('mongoose')

const LogsSchema = new mongoose.Schema(
	{
		ch_temp: {type: String, required: true},
        ch_humidity: {type: String, required: true},
        r_temp: {type: String, required: true},
        r_humidity: {type: String, required: true},
        soil_moisture: {type: String, required: true},
        date: {type: Date, default: Date.now, required: true}
	},
	{ collection: 'Logs' }
)

const model = mongoose.model('LogsSchema', LogsSchema)

module.exports = model
