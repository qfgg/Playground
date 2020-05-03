const mongoose = require('mongoose');


const topicSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createTime: Number,
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    authorName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Topic', topicSchema);