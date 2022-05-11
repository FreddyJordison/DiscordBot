var oldm = "new";
var oldmm = "1";

var msg = function (message, cont, autor, mensagem, fs, mmbrs) {
	let newm = message.content.toLowerCase();
	
	mmbrs = message.mentions.members.array();
	
	if(mmbrs.length > 0){
		for(let i = 0; i < mmbrs.length; i++){
			if(mmbrs[i].id == '429624717222215721') return message.reply('Se precisares da minha ajuda, utiliza o comando a\'help');
		}
	}
	
	if(newm == oldm && oldmm != autor.id){
		cont[mensagem].cont++
		fs.writeFile("./Commands/JSON/cont.json", JSON.stringify(cont), (err) => {
		if (err) console.log(err);
		});
		oldmm = autor.id;
		if(cont[mensagem].cont == 2){
			cont[mensagem].cont = 0;
			fs.writeFile("./Commands/JSON/cont.json", JSON.stringify(cont), (err) => {
			if (err) console.log(err);
			});;
			oldm = oldm.charAt(0).toUpperCase() + oldm.slice(1);
			var tt = oldm.length * 300;
			message.channel.startTyping();
			setTimeout(function() {
				message.channel.stopTyping(true);
				return message.channel.send(oldm).catch();
			}, tt);
		} else {
			return oldm = newm;
		}
	} else if(oldmm == autor.id){
		return oldmm;
	} else {
		cont[mensagem].cont = 0;
		fs.writeFile("./Commands/JSON/cont.json", JSON.stringify(cont), (err) => {
		if (err) console.log(err);
		});
		oldmm = autor.id;
		oldm = newm;
		return cont;
	}
}
exports.msg = msg;