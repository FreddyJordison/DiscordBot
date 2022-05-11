var espera = async function(message, timex, temporizador, fs, client, autor) {
	const alliance = '398115606928424960';
	const lead = '421767386266599425';
	const man = '416749202350145546';
	const admin = '398190150787530753';
	
	if (message.member.roles.some(r=>[alliance, man, admin].includes(r.id))){
		if(!temporizador[autor.id]) temporizador[autor.id] = {
			temporizador: 0,
			timer: 0,
			chck: 15
		};
		fs.writeFile("./../Alliance-/Commands/JSON/tempo.json", JSON.stringify(temporizador, null, 2), (err) => {
		if (err) console.log(err);
		});
		
		usern = message.member.nickname;
		if(usern == null) usern = autor.username;
		
		if(temporizador[autor.id].timer == 0){
			var canal = message.guild.channels.get('414168583141064715');
			var canal1 = message.member.voiceChannel;
			if (canal1 == canal){
				temporizador[autor.id].timer = 1;
				message.channel.startTyping();
				setTimeout(async function() {
					await message.reply("Foste colocado em espera de cw").catch();
					message.channel.stopTyping(true);
				},1000);
				timex = setInterval(async canal1 =>{
					canal1 = message.member.voiceChannel;
					temporizador[autor.id].temporizador += 5;
					if (canal1 == canal){
						if(temporizador[autor.id].chck == temporizador[autor.id].temporizador){
							var voiceChannel1;
							voiceChannel1 = client.channels.get('405321237506818050');
							voiceChannel1.join()
								.then(connection => {
									const dispatcher = connection.playFile('./EspCW.mp3',{volume:0.5});					
								})
								.catch(console.error);
							setTimeout(function leave(){
							voiceChannel1.leave();
						}, 3500);
			
							setTimeout(function wait(){
							voiceChannel1 = client.channels.get('413819595695194134');
							voiceChannel1.join()
								.then(connection => {
									const dispatcher = connection.playFile('./EspCW.mp3',{volume:0.5});
								})
								.catch(console.error);
							}, 4000);
							
							setTimeout(function leave(){
								voiceChannel1.leave();
							}, 7500);
							
							setTimeout(function wait(){
							voiceChannel1 = client.channels.get('417804753125507072');
							voiceChannel1.join()
								.then(connection => {
									const dispatcher = connection.playFile('./EspCW.mp3',{volume:0.5});
								})
								.catch(console.error);
							}, 8000);
							setTimeout(function leave(){
								voiceChannel1.leave();
							}, 11500);
							temporizador[autor.id].chck += 15;
						}
						
						message.channel.startTyping();
						setTimeout(async function() {
							await message.channel.send(`@everyone **${usern}** está em espera de cw ha ${temporizador[autor.id].temporizador} minutos!`).catch();
							message.channel.stopTyping(true);
						}, 1000);
					}else{
						temporizador[autor.id].temporizador = 0;
						temporizador[autor.id].timer = 0;
						temporizador[autor.id].chck = 15;
						message.channel.startTyping();
						await message.reply("Espera cancelada!");
						message.channel.stopTyping(true);
						return clearInterval(timex);
					}
				}, 300000);
			}else{
				message.channel.startTyping();
				setTimeout(async function() {
					await message.reply(`Tens de estar no canal <#414168583141064715> para ficares em espera`).catch();
					message.channel.stopTyping(true);
				}, 1000);
				return;
			}
		}else{
			temporizador[autor.id] = {
				temporizador : 0,
				timer : 0,
				chck: 15
			}
			message.channel.startTyping();
			setTimeout(async function() {
				await message.reply("Espera cancelada!");
				message.channel.stopTyping(true);
			}, 1000);
			clearInterval(timex);				
		}
		fs.writeFile("./../Alliance-/Commands/JSON/tempo.json", JSON.stringify(temporizador, null, 2), (err) => {
		if (err) console.log(err);
		});
		return;
	}
}	
exports.espera = espera;