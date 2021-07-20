const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    lastEdited: Date,
    blackListedChannelIds: { type: Array, required: false},
    prefix: { type: String, default: "!"},
    ownerID: { type: String },
    DJ: { type: String, default: "disabled" },
    unlimited: { type: String, default: "disabled" },
});

module.exports = new mongoose.model('Guild', guildSchema, 'guilds');