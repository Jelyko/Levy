const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'forceskip',
	description: 'Forceskip the current song',
	cooldown: 2,
	category: 'Music',
    aliases: ["fs"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Where should I skip the song?`);
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to skip`)

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

		const song = queue.songs[0]
		message.channel.send(`Forces skipped \`${song.name}\``)
		client.distube.skip(message);
	},
};