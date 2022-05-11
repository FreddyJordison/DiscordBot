const fs = require("fs");

var poll1 = [],
	car,
	tempm

var poll = async function(usern, message, args, autor, Discord, client) {
	var pol = new String("**");
	var pol1 = new String();
	var rect = ["1⃣", "2⃣", "3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟"];
	var t = 0;
	if (!args[0]) return message.reply("Tens de introduzir algum texto na poll");
	if (args[0].indexOf("+") == 0) return message.reply("Usa o \"+\" apenas para apresentar as respostas!");
	
	usern = autor.nickname;
	if(usern == null) usern = message.author.username;
	
	var autor = 'wG Poll'
	
	if (args[0] == "edit") {
		poll1[message.author.id].delete()
		if (!args[1]) return message.reply("Tens de introduzir algum texto na poll");
		if (args[1].indexOf("+") == 0) return message.reply("Usa o \"+\" apenas para apresentar as respostas!");
		for (i = 1; i < args.length; i++) {
			tempm = args[i];
			if (args[i].indexOf("+") == 0){
				if (t === 0){
					pol = pol + "**";
					tempm = tempm.slice(1);
					pol1 = pol1 + "" + rect[t] + " " + tempm;
					t++;
				} else {
					tempm = tempm.slice(1);
					pol1 = pol1 + "\n" + rect[t] + " " + tempm;
					t++;
				}
			} else if (t === 0) {
				pol = pol + " " + tempm;
			} else {
				pol1 = pol1 + " " + tempm;
			}
		}
	
		car = pol.length + pol1.length + usern.length + autor.length
	
		if(car > 255) return message.reply('A tua poll tem '+ car +' caracteres. O máximo é 256!')
	
		if (t === 0) return message.reply("Hmm, esperas que respondam como?! O_o");
		if (t > 10) return message.reply("Só podes meter 10 respostas na poll");
	
	
	
		embed = new Discord.MessageEmbed()
			.setAuthor(`${autor}`)
			.setThumbnail(client.user.avatarURL())
			.setColor(0x00AE86)
			.addField(`\u200b`, `\u200b`)
			.addField(`${pol}`,
				`${pol1}`)
			.setFooter(`${usern}`);	
		message.channel.send(`@everyone`);
		poll1[message.author.id] = await message.channel.send(embed)
	
		for(i = 0; i < t; i++){
			await poll1[message.author.id].react(`${rect[i]}`).catch();
		}
		
		return
	}
	
	for (i = 0; i < args.length; i++) {
		tempm = args[i];
		if (args[i].indexOf("+") == 0){
			if (t === 0){
				pol = pol + "**";
				tempm = tempm.slice(1);
				pol1 = pol1 + "" + rect[t] + " " + tempm;
				t++;
			} else {
				tempm = tempm.slice(1);
				pol1 = pol1 + "\n" + rect[t] + " " + tempm;
				t++;
			}
		} else if (t === 0) {
			pol = pol + " " + tempm;
		} else {
			pol1 = pol1 + " " + tempm;
		}
	}
	
	car = pol.length + pol1.length + usern.length + autor.length
	
	if(car > 255) return message.reply('A tua poll tem '+ car +' caracteres. O máximo é 256!')
	
	if (t === 0) return message.reply("Hmm, esperas que respondam como?! O_o");
	if (t > 10) return message.reply("Só podes meter 10 respostas na poll");
	
	
	
	embed = new Discord.MessageEmbed()
		.setAuthor(`${autor}`)
		.setThumbnail(client.user.avatarURL())
		.setColor(0x00AE86)
		.addField(`\u200b`, `\u200b`)
		.addField( `${pol}`,
			`${pol1}`)
		.setFooter(`${usern}`);	
	message.channel.send(`@everyone`);
	poll1[message.author.id] = await message.channel.send(embed)
	
	for(i = 0; i < t; i++){
		await poll1[message.author.id].react(`${rect[i]}`).catch();
	}
		
	return;
}

exports.poll = poll