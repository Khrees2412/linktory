const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Link = mongoose.model('Link', LinkSchema)

module.exports = Link
