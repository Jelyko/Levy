const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'playskip',
	description: 'Skip the current song and put the requested song in spot 0',
	cooldown: 2,
	category: 'Music',
    aliases: ["ps"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Where should I playskip the song?`);
		let queue = await client.distube.getQueue(message);

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
			return message.channel.send(`What could I possibly playskip for you`)
		} else {
			if (queue) {
				const song = queue.songs[0]
				const music = args.join(" ");
				client.distube.playSkip(message, music);
				return message.channel.send(`Skipped ${song.name}`)
			} else {
				const music = args.join(" ");
				client.distube.play(message, music);
				return message.channel.send(`There aren't any songs to skip my lord, So I used "play" instead`)
			}
		}
	},
};