var help = function(message, args, ajuda, fs) {
	const help1 = ajuda["admin"]
			
	const help2 = ajuda["all"]
			
	
	var msg = " "
	
	if (!args[0]){
		if(message.member.hasPermission('ADMINISTRATOR', true)){
			for (i = 0;i < help1.length;i++){
				msg += help1[i]
			}
			
			msg += "Prefixo de comando: +"
			
			return message.channel.send(msg);
		}else{
			for (i = 0;i < help2.length;i++){
				msg += help2[i]
			}
			
			msg += "Prefixo de comando: i'"
			
			return message.channel.send(msg);
		}
	} else {
		var msg = 'Ajuda comando +'+args[0];
		switch(args[0]) {
			case "user":
			case "man":
			case "clan":
				msg = msg+
					'```Pode ser usado com ID ou Nickname. Ex:\n\n	ID: +'+
					args[0]+
					' 437711381320695810\n\n	Nickname: i\''+
					args[0]+
					' @MasterBot#8278 ```';
					
				break;
				
			case "poll":
				msg = msg+
					'```Cria uma poll, com opções de resposta em reação.\n'+
					' Ex: +poll Isto é uma +ajuda +de +comando\n\n'+
					' Este exemplo faria uma poll parecida com isto: ```'+
					' Isto é uma\n'+
					'	1⃣ ajuda\n'+
					'	2⃣ de\n'+
					'	3⃣ comando\n\n'+
					'	1⃣ `1`  2⃣ `1`  3⃣ `1` '
					
				break;
			
			case "Q1":
			case "Q2":
			case "Q3":
				msg = msg+
					'```Move membros para canal de voz.\n\nPode ser usado com e sem argumentos('+
					'i.e. Podes mencionar os utilizadores a mover)'+
					'\n\nCaso nenhum utilizador seja mencionado, todos os membros do mesmo canal de voz serão movidos'+
					'\n\n	Ex: +'+args[0]+' @MasterBot#8278\n\n'+
					'Ao mencionar, só este membro será movido. Caso não haja menção nenhuma, todos serão movidos.```';
				
				break;
				
			case "twitch":
				msg = msg+
					'```Adiciona canal twitch a #twitch.\n\n'+
					'Ex: +twitch @MasterBot#8278  https://www.twitch.tv/MasterBot ```'
				
				break;
				
			/*case "aviso":
				msg	= msg+
					'```Dá aviso ao membro.\n\nPode ser usado com ID ou Nickname.\n'+
					'Para todos os avisos, tem de se dar uma razão!\n\n'+
					'Ex:\n\n	ID: i\'aviso 429624717222215721 Razão para o aviso.'+
					'\n	Nickname: i\'aviso @Alliance-#4854 Razão para o aviso.\n\n'+
					'Ao 3º aviso, será aplicada uma punição:\n'+
					'	Membro do clan fica em castigo, até ser retirado (castigo tem de ser retirado por um gerente ou admin)\n'+
					'	Não membro do clan é kickado do servidor. Poderá entrar mais tarde, com convite.```'
					
				break;
				*/
			case "poker":
				msg = msg+
					'```Usar comando +poker join para entrar ou *+poker leave* para sair.\n\n'+
					'Durante o jogo usar:\n'+
					'\t+fold: Desiste do jogo\n'+
					'\t+raise <valor>: Aumente a aposta\n'+
					'\t+call: Iguala aposta feita pelo jogador anterior\n'+
					'\t+check: Passa a vez\n'+
					'\t+credits: Verifica os créditos```'
					
				break;
				
			case "add":
				if(!message.member.hasPermission('ADMINISTRATOR', true)) break;
				if(!args[1] || (args[1] != 'all' && args[1] != 'man')){
					msg	= msg+
						'```Adiciona comando à lista de ajuda.\n\nTem de se identificar que tipo de comando é.\n'+
						'Tipos de comando:\n\tall: Global\n\tman: Gerente\n\n'+
						'Variáveis a usar com o comando adicionado têm de ser iniciadas por \'<\'\n\n'+
						'Ex: +help add Man ban <id/nickname> <razao> Bane o membro\n\n'+
						'Formatação de comando:\n'+
						'\t<tipo de comando> <nome do comando> <variáveis> <descriçao>```'
						
					break;
				}
				let temp = '\t**' + args[2] + '**'
				let f = 3;
				for(i = 3;i<args.length; i++){
					if(args[i].charAt(0) == "<" && f == i){
						temp += " " + args[i]
						f = i + 1
					} else {
						if(f == i) temp += ": "
						temp += " " + args[i]
					}
				}
				
				temp += "\n"
				
				if(args[1] == 'all'){
					ajuda["all"].push(temp)
					ajuda["admin"].push(temp)
					
					msg = "Comando "+args[2]+" adicionado à ajuda Global"
				}else if(args[1] == 'man'){
					ajuda["admin"].push(temp)
					
					msg = "Comando "+args[2]+" adicionado à ajuda de Gerente"
				}
				fs.writeFile("./Commands/JSON/help.json", JSON.stringify(ajuda, null, 2), (err) => {
				if (err) console.log(err);
				});
				
				break;
			
			default:
				msg = 'Esse comando não existe ou não tem ajuda';
				break;
		}
		message.channel.send(msg);
	}
}
exports.help = help;	