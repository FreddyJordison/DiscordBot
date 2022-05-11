var cmd = async function(message, command, client, autor, mmbrs) {
	
	if(message.member.voice.channel){
		var vc = message.member.voice.channel;
	}

	var msg = "Tens de mencionar membros!";

	mmbrs = message.mentions.members.array() || new Array();

	
	switch(command) {
	
	case "fun1":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('738490118184370267').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#738490118184370267>`
		
		break;
	
	case "musica":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('426513915652997121').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#426513915652997121>`
		
		break;

	case "convivio":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('416367488142409730').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#416367488142409730>`
		
		break;
	
	case "convm":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('411301767066681374').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#411301767066681374>`
		
		break;
		
	case "recepçao":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('189465877333147649').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#189465877333147649>`
		
		break;
		
	case "outros":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('402178687631622146').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#402178687631622146>`
		
		break;
	
	case "espera":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('738490285860061274').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#738490285860061274>`
		
		break;
	
	case "fun2":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		for (i = 0; i < mmbrs.length; i++){
			if (mmbrs[i].voice.channel){
				await message.guild.member(mmbrs[i]).voice.setChannel('738490184760295485').catch();
			} else {
				mmbrs.splice(i, 1);
			}
		}
		msg = `${mmbrs.length} membros movidos para <#738490184760295485>`
		
		break;
	
	
	case "compa":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Competitivo!");
		
		if (client.channels.cache.get('493145493862613002').members.size + mmbrs.length <= client.channels.cache.get('493145493862613002').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('493145493862613002').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#493145493862613002>`
		
			break;
		} else {
			msg = `Canal Competitivo Alpha está cheio ou não consegue juntar todos os jogadores movidos!`
		}
			
		break;

		
	case "compb":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Competitivo!");
		
		if (client.channels.cache.get('674960822748971019').members.size + mmbrs.length <= client.channels.cache.get('674960822748971019').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('674960822748971019').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#674960822748971019>`
		
			break;
		} else {
			msg = `Canal Competitivo Bravo está cheio ou não consegue juntar todos os jogadores movidos!`
		}
			
		break;

		
	case "treino1":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Treino!");
		
		if (client.channels.cache.get('411301922663038988').members.size + mmbrs.length <= client.channels.cache.get('411301922663038988').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('411301922663038988').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#411301922663038988>`
		
			break;
		} else {
			msg = `Canal Treino 1 está cheio ou não consegue juntar todos os jogadores movidos!`
		}
			
		break;

		
	case "treino2":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Treino!");
		
		if (client.channels.cache.get('411301979462303744').members.size + mmbrs.length <= client.channels.cache.get('411301979462303744').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('411301979462303744').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#411301979462303744>`
			
			break;
			
		} else {
			msg = `Canal Treino 2 está cheio ou não consegue juntar todos os jogadores movidos!`
		}
		
		break;

	case "cw1":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Clan War!");
		
		if (client.channels.cache.get('189465595002093568').members.size + mmbrs.length <= client.channels.cache.get('189465595002093568').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('189465595002093568').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#189465595002093568>`
			
			break;
			
		} else {
			msg = `Canal Clan War 1 está cheio ou não consegue juntar todos os jogadores movidos!`
		}
		
		break;

	case "cw2":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Clan War!");
		
		if (client.channels.cache.get('402179628061556737').members.size + mmbrs.length <= client.channels.cache.get('402179628061556737').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('402179628061556737').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#402179628061556737>`
			
			break;
			
		} else {
			msg = `Canal Clan War 2 está cheio ou não consegue juntar todos os jogadores movidos!`
		}
		
		break;

	case "cw3":
		if (mmbrs.length <= 0) {
			mmbrs = vc.members.array();
		}

		if (mmbrs.length > 5) return message.reply("Não podes mover mais de 5 membros para canais de Clan War!");
		
		if (client.channels.cache.get('411299669730394113').members.size + mmbrs.length <= client.channels.cache.get('411299669730394113').userLimit){
			for (i = 0; i < mmbrs.length; i++){
				if (mmbrs[i].voice.channel){
					await message.guild.member(mmbrs[i]).voice.setChannel('411299669730394113').catch();
				} else {
					mmbrs.splice(i, 1);
				}
			}
			msg = `${mmbrs.length} membros movidos para <#411299669730394113>`
			
			break;
			
		} else {
			msg = `Canal Clan War 3 está cheio ou não consegue juntar todos os jogadores movidos!`
		}
		
		break;

	}
	
	return client.channels.cache.get("817917451471028234").send(`${autor}, ${msg}`);
}

exports.cmd = cmd;
