const Guild = require('../../database/models/guildSchema')

module.exports = {
	name: 'autoplay',
	description: 'Enable or disable autoplay',
	cooldown: 3,
	category: 'Music',
    aliases: ["ap"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`I don't know where to change the volume`);

		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There has be something playing for me to enable autoplay`)
		
		let mode = client.distube.toggleAutoplay(message);
		return message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
	},
};