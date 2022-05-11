var rolesman = async function(message, command, membro, castigo, user, alliance, lead, ctry, err, args, ct){
		
	if(command === "user") {
		message.delete().catch(O_o=>{});
		if(!membro) return message.reply(err);
		if(membro.roles.has(user)){
		  return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
		} else {
			message.guild.channels.get("474251743136448524").send(`Role <@&${user}> dado a ${membro} por ${message.member}!`);
			
			for(i = 0; i < ctry["country"].id.length; i++){
				if(membro.roles.has(ctry["country"].id[i])) ct = ctry["country"].id[i];
			}
			
			membro.setRoles([user, ct]);
			return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'User'!`);
		}
	}
	
	if(command === "alliance") {
		message.delete().catch(O_o=>{});
		if(!membro) return message.reply(err);
		if(membro.roles.has(alliance)){
			return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
		} else {
			message.guild.channels.get("474251743136448524").send(`Role <@&${alliance}> dado a ${membro} por ${message.member}!`);
			
			for(i = 0; i < ctry["country"].id.length; i++){
				if(membro.roles.has(ctry["country"].id[i])) ct = ctry["country"].id[i];
			}
			
			membro.setRoles([alliance, ct]);
			return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Alliance-'!`);
		}
	}

	if(command === "lead") {
		message.delete().catch(O_o=>{});
		if(!membro) return message.reply(err);
		if(membro.roles.has(lead)){
			message.guild.channels.get("474251743136448524").send(`Role <@&${lead}> retirado de ${membro} por ${message.member}!`);
			membro.deleteRole(lead);
			return message.channel.send(`O utilizador ${membro} foi removido do role 'TeamLeader'!`);
		} else if(membro.roles.has(alliance)){
			membro.addRole(lead);
			message.guild.channels.get("474251743136448524").send(`Role <@&${lead}> dado a ${membro} por ${message.member}!`);
			return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'TeamLeader'!`);
		} else {
			return message.channel.send(`O utilizador ${membro} não pertence ao clan ou tem permissões de Gerente/Admin`);
		}
	}
	
	if(command === "castigo") {
		message.delete().catch(O_o=>{});
		if(!membro) return message.reply(err);
		if(membro.roles.has(castigo)){
			message.guild.channels.get("474251743136448524").send(`${membro} retirado do castigo por ${message.member}!`);
			membro.removeRole(castigo).catch();
			return message.channel.send(`O utilizador ${membro} foi retirado do castigo`);
		} else {
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o castigo");
			message.guild.channels.get("474251743136448524").send(`${membro} castigado por ${message.member}! **Razão**: ${razao}`);
			membro.addRole(castigo).catch();
			return message.channel.send(`O utilizador ${membro} foi castigado! **Razão**: ${razao}`);
		}
	}
}

exports.rolesman = rolesman;