var regras = function (message, args, fs, rgr) {
	
	if (!args[0]){
		var msg = " "
		for (i = 0;i < rgr["regras"].length;i++){
			msg += rgr["regras"][i]
		}
	
		return message.channel.send(msg);
	}
	
	const a = parseInt(args[0])
	
	if(rgr["regras"][a] == undefined){
		return message.reply('Tens de inserir um número válido')
	} else {
		if(a <= 0){
			return message.reply('Tens de inserir um número superior a 0')
		}
		if(a >= rgr["regras"].length){
			return message.reply('Tens de inserir um número inferior a '+rgr["regras"].length)
		}
		
		var b = 'Regra '+a+'\n\n'+rgr["regras"][a]
		
		return message.channel.send(b)
	}
}

exports.regras = regras;