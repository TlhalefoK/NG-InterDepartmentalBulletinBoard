const mongoose = require('mongoose')

const bulletinschema = mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        title: {type: String, required:true},
        date: {type: Date, required:true},
        description: {type: String, required:true}
    }
)

module.exports = mongoose.model('Bulletin', bulletinschema)