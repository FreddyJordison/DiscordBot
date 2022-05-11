var lavisos = async function(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err) {
	if(!membro) return message.reply(err);
	if(!warns[membro.id] || warns[membro.id].warns == 0) return message.reply(`O membro ${membro} não tem avisos.`);
	
	warns[membro.id].warns = 0;
	warns[membro.id].autor = [];
	warns[membro.id].razao = [];
	warns[membro.id].time = [];
	
	fs.writeFile("./Commands/JSON/warning.json", JSON.stringify(warns, null, 2), (err) => {
	if (err) console.log(err);
	});
	message.guild.channels.get("474251743136448524").send(`Avisos de ${membro} limpos por ${message.member}!`);
	return message.channel.send(`Os avisos do membro ${membro} foram limpos.`);
}

exports.lavisos = lavisos