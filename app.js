const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const mongoose = require('./database/mongoose');
const fs = require('fs');
const DisTube = require('distube')
require('dotenv').config();

client.distube = new DisTube(client, {
	searchSongs: false,
	emitNewSongOnly: true,
	leaveOnEmpty: true,
	leaveOnFinish: true,
	updateYouTubeDL: false,
})

const skipVotes = []
client.skipVotes = skipVotes

client.commands = new Discord.Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./commands');

const commandName = new Map();

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
		commandName.set(command.name, command);
		module.exports.commands = commandName;
	}
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.distube.on('error', (message, error) => {
	message.channel.send(`An error encountered.`);
})

client.distube.on('addSong', (message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
		.setTitle(`🎵 Added song to queue`)
		.setDescription(`\`${song.name}\` - \`${song.formattedDuration}\` - requested by ${song.user}`)
		.setColor("#13DC00")
	message.channel.send(Embed);
}) 

client.distube.on('playSong', (message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
		.setTitle(`🎵 Playing song`)
		.setDescription(`\`${song.name}\` - \`${song.formattedDuration}\` - requested by ${song.user}`)
		.setColor("#13DC00")
	message.channel.send(Embed);
	client.distube.toggleAutoplay(message);
})

client.distube.on('playList', (message, queue, playlist, song) => {
	const Data = []
	const Embed = new Discord.MessageEmbed()
		.setTitle(`🎵 Playing playlist`)
		.setDescription(`\`${playlist.name}\` - \`${playlist.formattedDuration}\` - \`${playlist.songs.length}\` songs added - requested by ${playlist.user}`)
		.setColor("#13DC00")
	message.channel.send(Embed);
	client.distube.toggleAutoplay(message);
})

client.distube.on('addlist', (message, queue, playlist) => {
	const Data = []
	const Embed = new Discord.MessageEmbed()
		.setTitle(`🎵 Added playlist to queue`)
		.setDescription(`\`${playlist.name}\` - \`${playlist.formattedDuration}\` - \`${playlist.songs.length}\` songs added - requested by ${playlist.user}`)
		.setColor("#13DC00")
	message.channel.send(Embed);
})

mongoose.init()
client.login(process.env.TOKEN);

module.exports = client;

require('./dashboard/server');
