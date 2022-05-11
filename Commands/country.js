var ctry = function(message, args, config){
	const fs = require("fs");
	var country = JSON.parse(fs.readFileSync(".Commands/JSON/country.json", "utf8"));
	const autor = message.author;

	let país = args[0].charAt(0).toUpperCase() + args[0].slice(1);
	
	usern = message.member.nickname;
	if(usern == null) usern = autor.username;
	if(!args) return message.reply('You must name your country.'); 
	
	for(i = 0; i < country["country"].name.length; i++){
		
		if(message.member.roles.has(country["country"].id[i]) && país != country["country"].name[i]) message.member.removeRole(country["country"].id[i]).catch();
		
		if(país == country["country"].name[i]){				
			message.member.addRole(country["country"].id[i]).catch();
			message.reply(`You were successfully added to <@&${country["country"].id[i]}> role! :smiley:`);
		}			
	}
	return;
}
	
	exports.ctry = ctry;