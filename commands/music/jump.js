const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'jump',
	description: 'Jump to a song',
	cooldown: 2,
	category: 'Music',
    aliases: ["j"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`You must be in a voice channel my guy...`);
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to jump to`)

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

		if (!args[0]) {
			return message.channel.send(`Where should I skip to my lord`)
		} else if (isNaN(args[0])) {
			return message.channel.send(`That song doesn't seem to exist you magician`)
		} else {
			const amount = Number(args[0]) - 1;
			client.distube.jump(message, parseInt(amount))
			return message.channel.send(`Jumped to \`${args[0]}\``)
		}
	},
};