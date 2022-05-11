let msg = " "

var misc = async function(message, autor, command, fs) {
	
	let twitch = JSON.parse(fs.readFileSync("./Commands/JSON/twitch.json", "utf8"))
	
	switch(command) {
		
		case "live":
			if(!twitch[autor.id]){
				msg = "Ainda não temos registo do teu canal twitch. Fala com um Manager para inserir o teu canal."
				
				break;
			}
			
			let usern = autor.nickname;
			if(usern == null) usern = message.author.username;
			
			msg = '@everyone\n'+usern+' está agora em directo! Assiste à transmissão.\n'+twitch[autor.id]
			
			break;
		
		case "games":
			msg = "`BlackSquad - [O.M.G]` https://store.steampowered.com/app/550650/Black_Squad/\n`CoD: Warzone - EuroGaming-` https://www.callofduty.com/br/pt/warzone/download\n"
				
			break;
	}
	
	return message.channel.send(msg);
}

exports.misc = misc;