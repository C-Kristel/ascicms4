const mongoose = require('mongoose')

const TimeDataSchema = new mongoose.Schema(
    {
        start_time: {type: String, required: false},
        end_time: {type: String, required: false},
        duration: {type: String, required: false},
    },
    { collection: 'TimeData' }
)

const model = mongoose.model('TimeData', TimeDataSchema)

module.exports = model