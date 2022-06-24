const mongoose = require('mongoose')

const MiniFansSchema = new mongoose.Schema(
	{
        miniFanStatus: {
            type: String,
            required: true
        },
        miniFanNum: {
            type: String,
			required:true
        }
	},
	{ collection: 'MiniFansStatus' }
)

const model = mongoose.model('MiniFansSchema', MiniFansSchema)

module.exports = model
