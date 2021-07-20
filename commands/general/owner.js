const Guild = require('../../database/models/guildSchema')
const mongoose = require('mongoose')

module.exports = {
	name: 'owner',
	description: 'Who is the owner?',
	cooldown: 3,
	category: 'General',
	async execute(message, args, client) {
		let guildProfile = await Guild.findOne({ guildID: message.guild.id });
		if (!guildProfile.ownerID) {
            await Guild.findOneAndUpdate({ guildID: message.guild.id}, { ownerID: message.guild.ownerID, lastEdited: Date.now() });
        }
		const owner = client.users.cache.find(user => user.id === message.guild.ownerID)
		return message.channel.send(`The owner is ${owner.username}#${owner.discriminator}`)
	},
};