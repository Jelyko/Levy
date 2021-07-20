const Guild = require('../database/models/guildSchema');
const Vote = require('../database/models/voteSchema');
const mongoose = require('mongoose');

module.exports = {
	name: 'guildCreate',
	async execute(guild, client) {
        let guildProfile = await Guild.findOne({ guildID: guild.id });
        if (!guildProfile) {
            guildProfile = await new Guild({
                _id: mongoose.Types.ObjectId(),
                guildID: guild.id,
                ownerID: guild.ownerID
            });
            await guildProfile.save().catch(err => console.log(err));
        }
        let voteProfile = await Vote.findOne({ guildID: guild.id });
        if (!voteProfile) {
            voteProfile = await new Vote({
                _id: mongoose.Types.ObjectId(),
                guildID: guild.id
            })
            await voteProfile.save().catch(err => console.log(err));
        }
	}
}