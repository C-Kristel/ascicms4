const mongoose = require('mongoose')

const PeltierSchema = new mongoose.Schema(
	{
		peltierStatus: { 
			type: String, 
			required: true },
        peltierNum: {
			type: String,
			required:true
		},
        miniFans: {
            type: String,
            required: true
        },
        miniFanNum: {
            type: String,
			required:true
        }
	},
	{ collection: 'PeltierStatus' }
)

const model = mongoose.model('PeltierSchema', PeltierSchema)

module.exports = model
