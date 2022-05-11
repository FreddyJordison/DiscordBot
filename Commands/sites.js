var sites = async function(message, args, command) {
	var msg
	
	switch(command) {
	
		case "wiki":
			msg = "http://www.wikipedia.org/wiki/" + args.join("_")
			break
			
		case "facebook":
			msg = "https://www.facebook.com/groups/322577151571208/"
			break
			
		case "google":
			msg = "https://www.google.com/search?q=" + args.join("+")
			break

		default:
			msg = "Algo correu mal :/"
			break
			
	}
 	
	return message.channel.send(msg)
	
}

exports.sites = sites;