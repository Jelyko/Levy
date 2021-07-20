const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'pause',
	description: 'Pause the queue',
	cooldown: 2,
	category: 'Music',
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`You must be in a voice channel my guy...`);
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to pause`)

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

		if (!queue.pause) {
			client.distube.pause(message)
			return message.channel.send(`This command is temporarily disabled`)
		} else {
			return message.channel.send(`This command is temporarily disabled`)
		}
	},
};