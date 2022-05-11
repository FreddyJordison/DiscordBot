var regras = function (message, args) {
	const regras =  ["**Regras**: \n\n",
				"	1 - Respeito acima de tudo. Respeite os administradores, gestores e os membros;\n\n",
				"	2 - Não xingar, ofender, criar discussões inúteis;\n\n",
				"	3 - Cada CW terá que ser realizada na presença de um membro da administração, gerente ou team leader;\n\n",
				"	4 - Uma CW só pode ser realizada se todos os membros tiverem tempo para a realizar até ao final. Quem sair a meio sem motivo, irá ser penalizado;\n\n",
				"	5 - Passe salas CW: 8521;\n\n",
				"	6 - É proibido o uso de hacks/cheats/macros por membros do clan. O desrespeito poderá levar ao ban;\n\n",
				"	7 - Quem sair do clan por vontade própria, se quiser voltar a entrar, irá a votações pelos membros da administração;\n\n",
				"	8 - Canais de voz de CW são para jogadores que estão em CW. Caso haja uma CW a decorrer, se houver mais de 5 pessoas no canal, quem estiver a mais não pode interferir com a mesma;\n\n",
				"	9 - Ao interferir numa CW, o infrator pode levar um castigo, que pode mesmo ser o kick do clan, caso seja recorrente;\n\n",
				"	10 - Membros com o role @Castigo não podem ir CW;\n\n",
				"	11 - Durante uma CW, especialmente durante *clutch*, é recomendado o mínimo barulho possível;\n\n",
				"	12 - A ausência de infos durante as CW's pode levar a castigo;\n\n",
				"	13 - Quem tiver que se ausentar por muito tempo terá que avisar, caso contrário poderá ser confundido como afk e ser kikado;\n\n",
				"	14 - Todos os membros do clan podem ir como *ringer* em CW's alheias ao clan. Regras de CW não se aplicarão nessa situação;\n\n",
				"	15 - Regras são para ser cumpridas. Quem não cumprir as regras, é castigado;\n\n",
				"	16 - Jogadores têm de ter mais de 16 anos para entrar no clan."]
	
	if (!args[0]){
		var msg = " "
		for (i = 0;i < regras.length;i++){
			msg = msg + regras[i]
		}
	
		return message.channel.send(msg);
	}
	
	const a = parseInt(args[0])
	
	if(regras[a] == undefined){
		return message.reply('Tens de inserir um número válido')
	} else {
		if(a <= 0){
			return message.reply('Tens de inserir um número superior a 0')
		}
		if(a >= regras.length){
			return message.reply('Tens de inserir um número inferior a '+regras.length)
		}
		
		var b = 'Regra '+a+'\n\n'+regras[a]
		
		return message.channel.send(b)
	}
}

exports.regras = regras;