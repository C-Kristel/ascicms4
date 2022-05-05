const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema(
	{
		plantNum: {
            type: String,
            required: true
        },
        plantHeight: { 
            type: [String], 
            required: true
        },
		numberOfLeaves: { 
            type: [String], 
            required: true 
        },
		leafGreenness: { 
            type: [String], 
            required: true 
        },
        date: {
            type: Date,
            default: Date.now
        }    
	},
	{ collection: 'plant' }
)

const model = mongoose.model('PlantSchema', PlantSchema)

module.exports = model