var poll = async function(usern, message, args, autor, Discord, client) {
	var pol = new String("**");
	var pol1 = new String();
	var rect = ["1⃣", "2⃣", "3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟"];
	var t = 0;
	if (!args[0]) return message.reply("Tens de introduzir algum texto na poll");
	if (args[0].indexOf("+") == 0) return message.reply("Usa o \"+\" apenas para apresentar as respostas!");
	for (i = 0; i < args.length; i++) {
		var tempm = args[i];
		if (args[i].indexOf("+") == 0){
			if (t === 0){
				pol = pol + "**";
				tempm = tempm.slice(1);
				pol1 = pol1 + "" + rect[t] + tempm;
				t++;
			} else {
				tempm = tempm.slice(1);
				pol1 = pol1 + "\n" + rect[t] + tempm;
				t++;
			}
		} else if (t === 0) {
			pol = pol + " " + tempm;
		} else {
			pol1 = pol1 + " " + tempm;
		}
	}
	
	if (t === 0) return message.reply("Hmm, esperas que respondam como?! O_o");
	if (t > 10) return message.reply("Só podes meter 10 respostas na poll");
	
	usern = message.member.nickname;
	if(usern == null) usern = autor.username;
	
	embed = new Discord.RichEmbed()
		.setAuthor(`Alliance- Poll`)
		.setThumbnail(client.user.avatarURL)
		.setColor(0x00AE86)
		.addBlankField(true)
		.addField(`${pol}`,
			`${pol1}`)
		.setFooter(`${usern}`);	
	message.channel.send(`@everyone`);
	message.channel.send(embed)
		.then(async message =>{
			for(i = 0; i < t; i++){
				await message.react(`${rect[i]}`).catch();
			}
		});
	return;
}

exports.poll = poll