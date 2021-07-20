const Vote = require('../../database/models/voteSchema');
const mongoose = require('mongoose');

module.exports = {
	name: 'skip',
	description: 'Skip the current song',
	cooldown: 2,
	category: 'Music',
    aliases: ["s"],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return message.channel.send(`Where should I skip the song?`);
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(`There's nothing to skip`)

		let voteProfile = await Vote.findOne({ guildID: message.guild.id });
        if (!voteProfile) {
            voteProfile = await new Vote({
                _id: mongoose.Types.ObjectId(),
                guildID: message.guild.id,
            })
            await voteProfile.save().catch(err => console.log(err));
        }

        let userC = message.member.voice.channel.members.size;
		let required = Math.ceil(userC/2);

		if (voteProfile.votes.includes(message.member.id)) {
			return message.channel.send(`You already voted to skip!`)
		}


		const votearray = voteProfile.votes
		votearray.push(message.member.id)
		console.log(votearray)
		await Vote.findOneAndUpdate({ guildID: message.guild.id}, { votes: votearray });
		message.channel.send(`You voted to skip the song. \`${voteProfile.votes.length}\`/\`${required}\` Votes`)

		if (voteProfile.votes.length >= required) {
			await Vote.findOneAndDelete({ guildID: message.guild.id });
			message.channel.send(`Song has been skipped`)
			client.distube.skip(message);
		}
	},
};