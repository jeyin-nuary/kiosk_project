const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        // required: 필수로 필요하다 - unique: 유일한 값(새로운 값)
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("post", postsSchema);