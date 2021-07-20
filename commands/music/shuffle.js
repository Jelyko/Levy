const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'shuffle',
	description: 'Shuffle the entire queue',
	cooldown: 2,
	category: 'Music',
    aliases: ["fs"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Where should I shuffle the queue`);
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to shuffle`)

		let guildProfile = await Guild.findOne({ guildID: message.guild.id });
		if (guildProfile.DJ == "disabled") {
			return message.channel.send(`An administrator must first set a DJ role via the online dashboard or command.`)
		} 
		let roleN = message.guild.roles.cache.find(role => role.id === guildProfile.DJ)
		if (!roleN) {
			return message.channel.send(`That is not a valid role ID`)
		}
		if (!message.member.roles.cache.get(roleN.id)) {
			return message.channel.send(`You do not have the DJ role.`);
		}

		client.distube.shuffle(message);
		return message.channel.send(`The queue has been shuffled`)
	},
};