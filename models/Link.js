const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
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
      status: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;