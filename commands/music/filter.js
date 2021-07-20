const Discord = require('discord.js');

module.exports = {
	name: 'filter',
	description: 'Turn filters on and off',
	cooldown: 2,
	category: 'Music',
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`You must be in a voice channel to use this command.`);
		let queue = await client.distube.getQueue(message);

		if (queue) {
			if (!args[0]) {
				//let current_filter = new client.distube.queue(message);
				const Data = [];
				Data.push(`You must specify a filter. \`3d\`, \`bassboost\`, \`echo\`, \`karaoke\`, \`nightcore\`, \`vaporwave\`, \`flanger\`, \`gate\`, \`haas\`, \`reverse\`, \`surround\`, \`mcompand\`, \`phaser\`, \`tremolo\`, \`earwax\``);
				Data.push(`Current filter: ` + (`\`${queue.filter}\``))
				return message.channel.send(Data)
			} else {
				//let current_filter = new client.distube.Queue(message, song);
				const setting = args[0].toLowerCase();
				if ("3d" == setting) {
					let filter = client.distube.setFilter(message, "3d");
					message.channel.send("Current filter: " + (`\`${filter}\`` || "off"));
				} else if ("bassboost" == setting) {
					let filter = client.distube.setFilter(message, "bassboost");
					message.channel.send("Current filter: " + (`\`${filter}\`` || "off"));
				} else if ("echo" == setting) {
					let filter = client.distube.setFilter(message, "echo");
					message.channel.send("Current filter: " + (`\`${filter}\`` || "off"));
				} else if ("karaoke" == setting) {
					let filter = client.distube.setFilter(message, "karaoke");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("nightcore" == setting) {
					let filter = client.distube.setFilter(message, "nightcore");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("vaporwave" == setting) {
					let filter = client.distube.setFilter(message, "vaporwave");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("flanger" == setting) {
					let filter = client.distube.setFilter(message, "flanger");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("gate" == setting) {
					let filter = client.distube.setFilter(message, "gate");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("haas" == setting) {
					let filter = client.distube.setFilter(message, "haas");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("reverse" == setting) {
					let filter = client.distube.setFilter(message, "reverse");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("surround" == setting) {
					let filter = client.distube.setFilter(message, "surround");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("mcompand" == setting) {
					let filter = client.distube.setFilter(message, "mcompand");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("phaser" == setting) {
					let filter = client.distube.setFilter(message, "phaser");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("tremolo" == setting) {
					let filter = client.distube.setFilter(message, "tremolo");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else if ("earwax" == setting) {
					let filter = client.distube.setFilter(message, "earwax");
					message.channel.send("Please wait up to 15 seconds\nCurrent filter: " + (`\`${filter}\`` || "off"));
				} else {
					message.channel.send("That is not a valid filter")
				}
			}
		} else if (!queue) {
			return message.channel.send(`There's nothing to filter.`);
		}
	},
};