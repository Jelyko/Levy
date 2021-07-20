const Discord = require('discord.js')

module.exports = {
	name: 'loop',
	description: 'Loop the current song or queue',
	cooldown: 3,
	category: 'Music',
    aliases: ["repeat"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`I don't know what to loop.`);

		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to loop`)

		if (!args[0]) {
			const Embed = new Discord.MessageEmbed()
				.setTitle(`Loop for ${message.guild.name}`)
				.setColor("#00FFF3")
				.setDescription("There are 3 looping modes. Please choose one with the associated number.")
				.addField('Current mode:', `${queue.repeatMode}`)
				.addField('Modes:', '0: Disable\n1: Repeat a song\n2: Repeat all the queue')
			return message.channel.send(Embed)
		}
		if (args[0] == "0") {
			if (queue.repeatMode == "0") return message.channel.send(`loop mode already 0`)
			message.channel.send(`Looping mode changed from \`${queue.repeatMode}\` to \`0\``)
			return client.distube.setRepeatMode(message, parseInt(0));
		} else if (args[0] == "1") {
			if (queue.repeatMode == "1") return message.channel.send(`loop mode already 1`)
			message.channel.send(`Looping mode changed from \`${queue.repeatMode}\` to \`1\``)
			return client.distube.setRepeatMode(message, parseInt(1));
		} else if (args[0] == "2") {
			if (queue.repeatMode == "2") return message.channel.send(`loop mode already 2`)
			message.channel.send(`Looping mode changed from \`${queue.repeatMode}\` to \`2\``)
			return client.distube.setRepeatMode(message, parseInt(2));
		} else {
			const Embed = new Discord.MessageEmbed()
				.setTitle(`Loop for ${message.guild.name}`)
				.setColor("#00FFF3")
				.setDescription("There are 3 looping modes. Please choose one with the associated number.")
				.addField('Current mode:', `${queue.repeatMode}`)
				.addField('Modes:', '0: Disable\n1: Repeat a song\n3: Repeat all the queue')
			return message.channel.send(Embed)
		}
	},
};