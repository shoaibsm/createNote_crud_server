const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('notes', notesSchema)