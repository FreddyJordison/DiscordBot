var avisos = async function(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err){
	if(!membro) return message.reply(err);
	
	usern = message.member.nickname;
	if(usern == null) usern = autor.username;
	
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
		embed.addField(`${warns[membro.id].razao[0]}`,
		`Avisado por ${warns[membro.id].autor[0]} \n${warns[membro.id].time[0]}`);
	};
		
	message.channel.send(embed)
	return;
}

exports.avisos = avisos;