var cmd = async function(message, command, client, autor, mmbrs) {
	var vc = message.member.voice.channel;
	
	var msg = " ";
	
	mmbrs = message.mentions.members.array();
	
	switch(command) {
	
	case "q1":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('513723945070100496').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#513723945070100496>`
		
		break;
	
	case "q2":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('513723976854405122').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#513723976854405122>`
		
		break;
	
	case "q3":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('513723624276885504').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#513723624276885504>`
		
		break;
		
	case "cod":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('710949129509011541').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#710949129509011541>`
		
		break;
		
	case "gta":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].voice.setChannel('710949027742744728').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#710949027742744728>`
		
		break;
	
/*	case "isa":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('402501924999528458').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#402501924999528458>`
		
		break;
	
	case "isb":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('498940970356703232').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#498940970356703232>`
		
		break;
	
	
	case "esp":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('414168583141064715').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#414168583141064715>`
		
		break;
		
	case "comp1":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('447818685944692756').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#447818685944692756>`
		
		break;
		
	case "comp2":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		for (i = 0; i < mmbrs.length; i++){
			await mmbrs[i].setVoiceChannel('442129692414443531').catch();
		}
		msg = `${mmbrs.length} membros movidos para <#442129692414443531>`
		
		break;
		
	case "cw":
		if (mmbrs.length <= 0) {
			mmbrs = client.channels.get(vc).members.array();
		}
		
		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de CW!");
		
		if (client.channels.get('405321237506818050').members.size + mmbrs.length <= client.channels.get('405321237506818050').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('405321237506818050').catch();
			}
			msg = `${mmbrs.length} membros movidos para <#405321237506818050>`
			
			break;
			
		} else if (client.channels.get('413819595695194134').members.size + mmbrs.length <= client.channels.get('413819595695194134').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('413819595695194134').catch();
			}
			msg = `${mmbrs.length} membros movidos para <#413819595695194134>`
			
			break;
			
		/*} else if (client.channels.get('417804753125507072').members.size + mmbrs.length <= client.channels.get('417804753125507072').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('417804753125507072').catch();
			}
			msg = `${mmbrs.length} membros movidos para <#417804753125507072>`
			
			break;
			
		} else {
			for (i = 0; i < mmbrs.length; i++){
				await mmbrs[i].setVoiceChannel('414168583141064715').catch();
			}
			msg = `Todos os canais de cw estão cheios! ${mmbrs.length} membros movidos para <#414168583141064715>`
		}
		
		break;
*/	}
	
	return message.reply(msg);
}

exports.cmd = cmd;