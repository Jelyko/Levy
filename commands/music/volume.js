const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'volume',
	description: 'Change the volume',
	cooldown: 3,
	category: 'Music',
    aliases: ["v"],
	async execute(message, args, client) {
		let guildProfile = await Guild.findOne({ guildID: message.guild.id });

		if (!message.member.voice.channel) return message.channel.send(`I don't know where to change the volume`);
        if (!args[0]) return message.channel.send(`How loud do you want your music?`)
        let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`Theres nothing to change the volume for.`)
		if (isNaN(args[0])) return message.channel.send(`Thats not a number my friend`)

		if (guildProfile.unlimited == "enabled") {
			if (args[0] > 0) {
				message.channel.send(`Changed volume from \`${queue.volume}\` to \`${args[0]}\``)
				client.distube.setVolume(message, args[0])
			} else {
				return message.channel.send(`Volume must be \`1+\``)
			}
		} else {
			if (args[0] < 101 && args[0] > 0) {
				message.channel.send(`Changed volume from \`${queue.volume}\` to \`${args[0]}\``)
				client.distube.setVolume(message, args[0])
			} else {
				return message.channel.send(`Volume must be between \`1\` and \`100\``)
			}
		}
	},
};