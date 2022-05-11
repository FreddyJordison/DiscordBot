var aviso = async function(usern, usern1, message, Discord, client, args, membro, autor, err){
	
	let aviso = "833386004891172884"
	let avisos = "833386136122294294"
	
	
	if(!membro) return message.reply(err);
	let razao = args.join(" ").slice(args[0].length);
	if (!razao) return message.reply("Tens de dar uma razão para o aviso");
	
	usern = autor.nickname;
	if(usern == null) usern = message.author.username;
	
	usern1 = membro.nickname;
	if(usern1 == null) usern1 = membro.user.username;
	
	if(!membro) return message.reply(err);
	
	if(membro.roles.cache.has(aviso)){
		membro.roles.add(avisos)
		membro.roles.remove(aviso)
	} else {
		membro.roles.add(aviso)
	}
	
	client.channels.cache.get("833386975603720232").send(`${membro}`)
	
	embed = new Discord.MessageEmbed()
		.setTitle(`${usern1} avisado por ${usern}`)
		.setAuthor("AVISO")
		.setThumbnail(client.user.avatarURL())
		.setColor(0x00AE86)
		.setTimestamp()
		.addField(`\u200b`, `\u200b`)
		.addField(`Razão:`, `${razao}`)
		.addField(`\u200b`, `\u200b`);
	
	client.channels.cache.get("833386975603720232").send(embed);	
	return;
}

exports.aviso = aviso;
	
