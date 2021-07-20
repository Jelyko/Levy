module.exports = {
	name: 'play',
	description: 'Play a sing!',
	cooldown: 3,
	category: 'Music',
    aliases: ["p"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Where should I play this song.`);

        if (!args[0]) return message.channel.send(`I don't know what song that is.`)
        
        const music = args.join(" ");

        client.distube.play(message, music)
	},
};