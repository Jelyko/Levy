const Discord = require('discord.js')

module.exports = {
	name: 'queue',
	description: 'Display the queue',
	cooldown: 2,
	category: 'Music',
    aliases: ["q"],
	async execute(message, args, client) {
		let queue = await client.distube.getQueue(message);

		if (!queue) {
			return message.channel.send(`There isn't anything to show`);
		} else if (queue) {
			try {
				if (!args[0] || args[0] == "1") {
					const queueFormat = queue.songs.map((song, id) => `**${id + 1}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(0, 11)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `on`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #1`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} 
			} catch(err) {
				return message.channel.send(`An error has occurred`)
			}
			try {
				if (args[0] == "2") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(11, 21)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					} else if (queue.repeatMode == 0) {
						Embed.addField(`Repeat mode:`, `Disabled`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					} else {
						Embed.addField(`Filter:`, 'none', true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `on`, true)
					} else {
						Embed.addField(`Autoplay:`, `off`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #2`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
					return message.channel.send(Embed)
				} else if (args[0] == "3") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(21, 31)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "4") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(31, 41)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "5") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(41, 51)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "6") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(51, 61)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "7") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(61, 71)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "8") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(71, 81)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "9") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(81, 91)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "10") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(91, 101)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "11") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(101, 111)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "12") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(111, 121)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "13") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(121, 131)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "14") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(131, 141)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "15") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(141, 151)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "16") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(151, 161)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "17") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(161, 171)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "18") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(171, 181)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "19") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(181, 191)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} else if (args[0] == "20") {
					const queueFormat = queue.songs.map((song, id) => `**${id}**. \`${song.name}\` - \`${song.formattedDuration}\``).slice(191, 201)
					const song = queue.songs[0]
					const Embed = new Discord.MessageEmbed()
						.setTitle(`💿 Queue for ${message.guild.name}`)
						.setColor("#8400FF")
					
					if (song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`LIVE\``)
					} else if (!song.isLive) {
						Embed.addField(`Currently playing:`, `\`${song.name}\` - \`${queue.formattedCurrentTime}\`/\`${song.formattedDuration}\`\n`)
					}
		
					if (queue.repeatMode == 1) {
						Embed.addField(`Repeat mode:`, `Repeat only current song`, true)
					} else if (queue.repeatMode == 2) {
						Embed.addField(`Repeat mode:`, `Repeat entire queue`, true)
					}
		
					if (queue.filter) {
						Embed.addField(`Filter:`, queue.filter, true)
					}
		
					if (queue.autoplay) {
						Embed.addField(`Autoplay:`, `true`, true)
					}
		
					Embed.addField(`Volume:`, queue.volume, true)
					Embed.addField(`Next 10:`, queueFormat)
		
					if (queue.songs.length < 10) {
					} else if (queue.songs.length > 10) {
						Embed.addField(`Page #${args[0]}`, `There are \`${queue.songs.length}\` songs queued. Use \`${client.prefix}queue <page number>\` to view more.`)
					}
		
					return message.channel.send(Embed)
				} 
			} catch(err) {
				return message.channel.send(`That page doesn't seem to exist. `)
			}
		}
	},
};