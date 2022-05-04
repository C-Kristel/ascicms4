const mongoose = require('mongoose')

const CoolhouseSchema = new mongoose.Schema(
	{
		ch_temp: {type: String, required: true},
        r_temp: {type: String, required: true},
        water_level: {type: String, required: true},
		soil_temp: {type: String, required: true},
        soil_moisture: {type: String, required: true},
        pH_lvl: {type: String, required: true},
        humidity_lvl: {type: String, required: true},
        date: {type: Date, default: Date.now, required: true},
        time: {type: String, required: false},
	},
	{ collection: 'Coolhouse_Status' }
)

const model = mongoose.model('CoolhouseSchema', CoolhouseSchema)

module.exports = model
