module.exports = {
	name: 'stop',
	description: 'Stop the bot and clear the queue',
	cooldown: 3,
	category: 'Music',
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Please join a voice channel.`);

		let guildChannel = message.guild.voice.channel;
		if (!guildChannel) return message.channel.send(`I'm not playing anything at the moment.`)

		let queue = await client.distube.getQueue(message);

		if (!queue) {
			return message.channel.send(`What can I possible stop.`);
		} else if (queue) {
			client.distube.stop(message);
			return message.channel.send(`I have stopped the music and cleared the queue.`)
		}
	},
};