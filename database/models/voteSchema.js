const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    lastEdited: Date,
    votes: { type: Array },
});

module.exports = new mongoose.model('Vote', voteSchema, 'votes');