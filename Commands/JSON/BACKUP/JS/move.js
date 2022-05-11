var cmd = async function(message, command, client, autor, mmbrs) {
	var vc = message.member.voiceChannel.id
	
	mmbrs = message.mentions.members.array();
	
	if(command === "cadm"){
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('398613898518855680').catch();
		}
		return message.reply(`${mmbrs.length} membros movidos para <#398613898518855680>`);
	}
	
	if(command === "alla"){
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('398614836172423168').catch();
		}
		return message.reply(`${mmbrs.length} membros movidos para <#398614836172423168>`);
	}
	
	if(command === "allb"){
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('402501924999528458').catch();
		}
		return message.reply(`${mmbrs.length} membros movidos para <#402501924999528458>`);
	}
	
	if(command === "allc"){
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('419213755310931988').catch();
		}
		return message.reply(`${mmbrs.length} membros movidos para <#419213755310931988>`);
	}
	
	if(command === "cw"){
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de CW!");
		
		if (client.channels.get('405321237506818050').members.size + mmbrs.length <= client.channels.get('405321237506818050').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('405321237506818050').catch();
			}
			return message.reply(`${mmbrs.length} membros movidos para <#405321237506818050>`);
			
		} else if (client.channels.get('413819595695194134').members.size + mmbrs.length <= client.channels.get('413819595695194134').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('413819595695194134').catch();
			}
			return message.reply(`${mmbrs.length} membros movidos para <#413819595695194134>`);
			
		} else if (client.channels.get('417804753125507072').members.size + mmbrs.length <= client.channels.get('417804753125507072').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('417804753125507072').catch();
			}
			return message.reply(`${mmbrs.length} membros movidos para <#417804753125507072>`);
			
		} else {
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('414168583141064715').catch();
			}
			return message.reply(`Todos os canais de cw estão cheios! ${mmbrs.length} membros movidos para <#414168583141064715>`);
		}
	}
}

exports.cmd = cmd;