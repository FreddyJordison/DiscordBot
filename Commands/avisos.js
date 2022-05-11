var avisos = async function(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err){
	if(!membro) return message.reply(err);
	
	usern = autor.nickname;
	if(usern == null) usern = message.author.username;
	
	usern1 = membro.nickname;
	if(usern1 == null) usern1 = membro.user.username;
	
	if(!warns[membro.id] || warns[membro.id].warns == 0) return message.reply(`O membro ${membro} não tem avisos.`);
	
	embed = new Discord.RichEmbed()
		.setTitle(`Avisos de ${usern1}`)
		.setAuthor(`${usern}`)
		.setThumbnail(client.user.avatarURL)
		.setColor(0x00AE86)
		
	for(i=0; i < warns[membro.id].warns; i++){
		embed.addBlankField(true);
		embed.addField(`${warns[membro.id].razao[i]}`,
		`Avisado por ${warns[membro.id].autor[i]} \n${warns[membro.id].time[i]}`);
	};
		
	message.channel.send(embed)
	return;
}

exports.avisos = avisos;