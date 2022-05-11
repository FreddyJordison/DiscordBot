var lavisos = async function(usern, usern1, message, Discord, client, args, membro, autor, err) {
	if(!membro) return message.reply(err);

	let aviso = "833386004891172884"
	let avisos = "833386136122294294"

	if(!membro.roles.cache.has(aviso) && !membro.roles.cache.has(avisos)) return message.reply(`O membro ${membro} não tem avisos.`);

	if(!membro.roles.cache.has(aviso)){
		membro.roles.remove(aviso)
	}else{
		membro.roles.remove(avisos)
	}
	
	client.channels.cache.get("833386975603720232").send(`Avisos de ${membro} limpos por ${message.member}!`);
	return client.channels.cache.get("833386975603720232").send(`Os avisos do membro ${membro} foram limpos.`);
}

exports.lavisos = lavisos