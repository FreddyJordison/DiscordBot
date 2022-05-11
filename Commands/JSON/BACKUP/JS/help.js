var help = function(message, args) {
	const help1 = "**COMANDOS DE ADMIN:**\n"+
			"	*wiki* <termo(s) de pesquisa>: Pesquisa a Wikipédia por ti\n"+
			"	*user* <id/nickname>: Dá role User\n"+
			"	*alliance* <id/nickname>: Dá role Alliance\n"+
			"	*lead* <id/nickname>: Dá role Team-Leader\n"+
			"	*man* <id/nickname>: Dá role Alliance-Manager\n"+
			"	*admin* <id/nickname>: Dá role Admin (Fica com todas as permissões! Cuidado!)\n"+
			"	*castigo* <id/nickname> <razão>: Mete ou tira membro do castigo\n"+
			"	*say* <mensagem>: Faz o bot mandar mensagem\n"+
			"	*purge* <número>: Elimina mensagens (entre 2 e 100)\n"+
			"	*aviso* <id/nickname> <razão>: Dá aviso ao membro (Membro do clan: mete castigo ao 3º. Não membro: Kicka ao 3º)\n"+
			"	*avisos* <id/nickname>: Verifica avisos do membro\n"+
			"	*lavisos*  <id/nickname>: Limpa avisos do membro\n"+
			"	*twitch* <id/nickname> <link>: Adiciona canal ao #twitch\n"+
			"	*regras*: Mostra as regras\n"+
			"	*espera*: Avisa todos (a cada 5 minutos) que estás à espera de cw\n"+
			"	*kick* <id/nickname> <razao>: Kicka o membro\n"+
			"	*ban* <id/nickname> <razao>: Bane o membro\n"+
			"	*poll* <pergunta> <respostas>: Cria poll (perguntas iniciadas por '+')\n"+
			"	*alla* <id's/nicknames>: Move membro(s) para canal <#398614836172423168>\n"+
			"	*allb* <id's/nicknames>: Move membro(s) para canal <#402501924999528458>\n"+
			"	*allc* <id's/nicknames>: Move membro(s) para canal <#419213755310931988>\n"+
			"	*cadm* <id's/nicknames>: Move membro(s) para canal <#398613898518855680>\n"+
			"	*cw* <id's/nicknames>: Move membro(s) para canal cw\n"+
			"	*help*: Mostra esta lista\n\n"+
			"Prefixo de comando: a'";
			
	const help2 = "**COMANDOS GLOBAIS:**\n"+
			"	*wiki* <termo(s) de pesquisa>: Pesquisa a Wikipédia por ti\n"+
			"	*adm* <mensagem>: Contactar Admins/Gerentes\n\n"+
			"	*regras*: Mostra as regras\n\n"+
			"	*espera*: Avisa todos (a cada 5 minutos) que estás à espera de cw\n\n"+
			"	*help*: Mostra esta lista\n\n"+
			"Prefixo de comando: a'";
			
	const help3 = "**COMANDOS DE GERENTE:**\n"+
			"	*wiki* <termo(s) de pesquisa>: Pesquisa a Wikipédia por ti\n"+
			"	*user* <id/nickname>: Dá role User\n"+
			"	*alliance* <id/nickname>: Dá role Alliance\n"+
			"	*lead* <id/nickname>: Dá role Team-Leader\n"+
			"	*castigo* <id/nickname> <razão>: Mete ou tira membro do castigo\n"+
			"	*aviso* <id/nickname> <razão>: Dá aviso ao membro (Membro do clan: mete castigo ao 3º. Não membro: Kicka ao 3º)\n"+
			"	*avisos* <id/nickname>: Verifica avisos do membro\n"+
			"	*lavisos*  <id/nickname>: Limpa avisos do membro\n"+
			"	*twitch* <id/nickname> <link>: Adiciona canal ao #twitch\n"+
			"	*regras*: Mostra as regras\n"+
			"	*espera*: Avisa todos (a cada 5 minutos) que estás à espera de cw\n"+
			"	*kick* <id/nickname> <razao>: Kicka o membro\n"+
			"	*poll* <pergunta> <respostas>: Cria poll (perguntas iniciadas por '+')\n"+
			"	*alla* <id's/nicknames>: Move membro(s) para canal <#398614836172423168>\n"+
			"	*allb* <id's/nicknames>: Move membro(s) para canal <#402501924999528458>\n"+
			"	*allc* <id's/nicknames>: Move membro(s) para canal <#419213755310931988>\n"+
			"	*cadm* <id's/nicknames>: Move membro(s) para canal <#398613898518855680>\n"+
			"	*cw* <id's/nicknames>: Move membro(s) para canal cw\n"+
			"	*help*: Mostra esta lista\n\n"+
			"Prefixo de comando: a'";
	
	if (!args[0]){
		if(message.member.hasPermission('ADMINISTRATOR', true)){
			return message.channel.send(`${help1}`);
		} else if(message.member.hasPermission('KICK_MEMBERS', true)){
			return message.channel.send(`${help3}`);
		}else{
			return message.channel.send(`${help2}`);
		}
	} else {
		var msg;
		switch(args[0]) {
			case "user":
			case "alliance":
			case "lead":
			case "admin":
			case "man":
				msg = 'Ajuda comando a\''+
					args[0]+
					'``` Usa ID ou Nickname. Ex:\n\n	ID: a\''+
					args[0]+
					' 429624717222215721\n\n	Nickname: a\''+
					args[0]+
					' @Alliance-#4854 ```';
					
				break;
			
			case "castigo":
				msg = 'Ajuda comando a\'castigo ```'+
					' Usa ID ou Nickname. Caso seja para castigar, tens de escrever uma razão.'+
					' Ex:\n\n	ID: a\''+
					args[0]+
					' 429624717222215721 Ajuda de comando!\n\n	Nickname: a\''+
					args[0]+
					' @Alliance-#4854 Ajuda de comando!```'
					
					break;
					
			case "poll":
				msg = 'Ajuda comando a\'poll ``` '+
					'Cria uma poll, com opções de resposta em reação.\n'+
					' Ex: a\'poll Isto é uma +ajuda +de +comando\n\n'+
					' Este exemplo faria uma poll parecida com isto: ```'+
					' Isto é uma\n'+
					'	1⃣ ajuda\n'+
					'	2⃣ de\n'+
					'	3⃣ comando\n\n'+
					'	1⃣ `1`  2⃣ `1`  3⃣ `1` '
					
				break;
			
			case "alla":
			case "allb":
			case "allc":
			case "cadm":
			case "cw":
				msg = 'Ajuda comando a\''+
					args[0]+
					'```Move membros para canal de voz.\n\nPode ser usado com e sem argumentos('+
					'i.e. Podes mencionar os utilizadores a mover)'+
					'\n\nCaso nenhum utilizador seja mencionado, todos os membros do mesmo canal de voz serão movidos'+
					'\n\n	Ex: a\''+args[0]+' @Alliance-#4854 @Alliance- Tester#8278\n\n'+
					'Ao mencionar, só estes 2 membros serão movidos. Caso não haja menção nenhuma, todos serão movidos.\n'+
					'Para canais de cw, não podem ser movidos mais de 5 membros. O canal, caso não estejam todos cheios, '+
					'será seleccionado automaticamente. ```';
				
				break;
				
			case "twitch":
				msg = 'Ajuda comando a\''+
				args[0]+
				'```Adiciona canal twitch a #twitch.\n\n'+
				'Ex: a\'twitch @Alliance-#4854 https://www.twitch.tv/Alliance- ```'
				
				break;
			default:
				msg = 'Esse comando não existe ou não tem ajuda';
				break;
		}
		message.channel.send(msg);
	}
}
exports.help = help;	