var aviso = async function(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err){
	
	const user = "398436822474293248"
	const alliance = '398115606928424960';
	const lead = '421767386266599425';
	const man = '416749202350145546';
	const admin = '398190150787530753';
	const castigo = '425434860815908875';
	
	if(!membro) return message.reply(err);
	let razao = args.join(" ").slice(args[0].length);
	if (!razao) return message.reply("Tens de dar uma razão para o aviso");
	
	var kickr = "Demasiados avisos!";
	
	usern = autor.nickname;
	if(usern == null) usern = message.author.username;
	
	usern1 = membro.nickname;
	if(usern1 == null) usern1 = membro.user.username;
	
	if(!warns[membro.id]) warns[membro.id] = {
		warns: 0,
		razao: [],
		autor: [],
		time: []
	};
	
	var currentdate = new Date(); 
	var mints;
	var scds;
	
	if (currentdate.getMinutes() < 10){
		mints = "0" + currentdate.getMinutes();
	} else {
		mints = currentdate.getMinutes();
	}
	
	if (currentdate.getSeconds() < 10){
		scds = "0" + currentdate.getSeconds();
	} else {
		scds = currentdate.getSeconds();
	}
	
	var datetime = "Data: " + currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " @ "  
		+ currentdate.getHours() + ":"  
		+ mints + ":" 
		+ scds;
		
	warns[membro.id].warns++;	
	warns[membro.id].razao.push(razao);
	warns[membro.id].autor.push(usern);
	warns[membro.id].time.push(datetime);
	
		fs.writeFile("./Commands/JSON/warning.json", JSON.stringify(warns, null, 2), (err) => {
	if (err) console.log(err);
	});
	
	message.channel.send(`${membro}`)
	
	embed = new Discord.RichEmbed()
		.setTitle(`${usern1} avisado por ${usern}`)
		.setAuthor("AVISO")
		.setThumbnail(client.user.avatarURL)
		.setColor(0x00AE86)
		.setTimestamp()
		.addBlankField(true)
		.addField(`Razão:`, `${razao}`)
		.addBlankField(true)
		.addField(`Avisos de ${usern1}:`,
			`${warns[membro.id].warns}`);
	
	message.channel.send(embed)
	
	if(warns[membro.id].warns == 3) {
		if (message.member.roles.some(r=>[alliance, man, admin].includes(r.id))) {
			membro.addRole(castigo).catch();
			return message.channel.send(`O membro ${membro} foi castigado. **Razão**: ${kickr}`);
		}else{
			message.guild.member(membro).kick(kickr);
			warns[membro.id] = {
				warns: 0,
				razao: [],
				autor: [],
				time: []
			}
			fs.writeFile("./Commands/JSON/warning.json", JSON.stringify(warns, null, 2), (err) => {
			if (err) console.log(err);
			});
			return message.channel.send(`O membro ${membro} foi kickado do servidor. **Razão**: ${kickr}`);
		}
	}
	
	return;
}

exports.aviso = aviso;
	