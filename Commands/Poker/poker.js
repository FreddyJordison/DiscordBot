//WIP

var player = [],
	running = 0,
	temp = [],
	car1 = " ",
	car2 = " ",
	car = [],
	jogador = 0,
	lastBid = 2,
	hand = 0,
	batch = 0,
	call = false,
	naipe1 = -1,
	naipe2 = -1,
	card1 = -1,
	card2 = -1,
	msg,
	raise = [],
	preflop = 1


const pokerc = require("./pokercheck");

var poker = async function(message, args, autor, client, Scards, fs, players, command) {

	if(!players[autor.id]) players[autor.id] = [" "," "," "," ",[],[]]
	
	if (running == 0) Scards["bot"] = [["",""],["",""],["",""],["",""],["",""]]
		
	
	var members = message.guild.members.cache;
	
	
	async function finish(){
		Scards["copas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		Scards["ouros"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		Scards["espadas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		Scards["paus"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		Scards["naipes"] = ["C", "O", "E", "P"]
		
		for (i=0;i < player.length; i++) {
			await client.channels.cache.get("513792859330183168").send('<@'+player[i]+'>\'s cards:', {
				files: [
					players[player[i]][1],
					players[player[i]][2]
			]})
		}
		
		await pokerc.pokerc(Scards, player, players, client)
			
		return (
			running = 0,
			car = [],
			hand = 0,
			batch = 0,
			call = false,
			player = []
		)
	}
	
	async function gamestart(hand){
		
		switch(hand) {
		case 0:	
		
			msg.edit(`Poker game as started!\n	Small Blind: <@${player[0]}>\n	Big Blind: <@${player[1]}>\n\nBid is set at 2 credits!`)
			client.channels.cache.get("513792859330183168").send(`<@${player[2]}> It's your turn! Type *+call* to call 2 credits or *+raise* to set an higher ammount!`)		
			players[player[0]][0] = players[player[0]][0] - 1
			players[player[1]][0] = players[player[1]][0] - 2
			batch = batch + 3

			break
		
		case 1:
			for (i = 0; i < 3; i++){
				naipe1 = Math.floor(Math.random()*Scards["naipes"].length)
				Scards["bot"][i][1] = Scards["naipes"][naipe1]
				if(naipe1 == 0){
					card1 = Math.floor(Math.random()*Scards["copas"].length)
					car[i] = "./Commands/Poker/"+Scards["copas"][card1]+Scards["naipes"][naipe1]+".png"
					Scards["bot"][i][0] = Scards["copas"][card1]
					Scards["copas"].splice(card1, 1)
				} else if(naipe1 == 1){
					card1 = Math.floor(Math.random()*Scards["ouros"].length)
					car[i] = "./Commands/Poker/"+Scards["ouros"][card1]+Scards["naipes"][naipe1]+".png"
					Scards["bot"][i][0] = Scards["ouros"][card1]
					Scards["ouros"].splice(card1, 1)
				} else if(naipe1 == 2){
					card1 = Math.floor(Math.random()*Scards["espadas"].length)
					car[i] = "./Commands/Poker/"+Scards["espadas"][card1]+Scards["naipes"][naipe1]+".png"
					Scards["bot"][i][0] = Scards["espadas"][card1]
					Scards["espadas"].splice(card1, 1)
				} else {
					card1 = Math.floor(Math.random()*Scards["paus"].length)
					car[i] = "./Commands/Poker/"+Scards["paus"][card1]+Scards["naipes"][naipe1]+".png"
					Scards["bot"][i][0] = Scards["paus"][card1]
					Scards["paus"].splice(card1, 1)
				}

			}
			client.channels.cache.get("513792859330183168").send({
				files: [
					car[0],
					car[1],
					car[2]
				]})
			call = false
			
			fs.writeFile("./Commands/Poker/poker.json", JSON.stringify(Scards, null, 2), (err) => {
			if (err) console.log(err);
			});
			
			client.channels.cache.get("513792859330183168").send('<@'+player[0]+'> it\'s your turn!')

			break
		
		case 2:
		case 3:
			naipe1 = Math.floor(Math.random()*Scards["naipes"].length)
			Scards["bot"][hand + 1][1] = Scards["naipes"][naipe1]
			if(naipe1 == 0){
				card1 = Math.floor(Math.random()*Scards["copas"].length)
				car1 = "./Commands/Poker/"+Scards["copas"][card1]+Scards["naipes"][naipe1]+".png"
				Scards["bot"][hand + 1][0] = Scards["copas"][card1]
				Scards["copas"].splice(card1, 1)
			} else if(naipe1 == 1){
				card1 = Math.floor(Math.random()*Scards["ouros"].length)
				car1 = "./Commands/Poker/"+Scards["ouros"][card1]+Scards["naipes"][naipe1]+".png"
				Scards["bot"][hand + 1][0] = Scards["ouros"][card1]
				Scards["ouros"].splice(card1, 1)
			} else if(naipe1 == 2){
				card1 = Math.floor(Math.random()*Scards["espadas"].length)
				car1 = "./Commands/Poker/"+Scards["espadas"][card1]+Scards["naipes"][naipe1]+".png"
				Scards["bot"][hand + 1][0] = Scards["espadas"][card1]
				Scards["espadas"].splice(card1, 1)
			} else {
				card1 = Math.floor(Math.random()*Scards["paus"].length)
				car1 = "./Commands/Poker/"+Scards["paus"][card1]+Scards["naipes"][naipe1]+".png"
				Scards["bot"][hand + 1][0] = Scards["paus"][card1]
				Scards["paus"].splice(card1, 1)
			}

			client.channels.cache.get("513792859330183168").send({
				files: [
					car1
				]})
				
			call = false
			
			fs.writeFile("./Commands/Poker/poker.json", JSON.stringify(Scards, null, 2), (err) => {
			if (err) console.log(err);
			});
			
			client.channels.cache.get("513792859330183168").send(`<@${player[0]}> it's your turn!`)

			break
		
		case 4:
			finish()
			break
		}
		return
	}
		
	
	if (args[0] == "leave" && running == 0) {
		if(player.length > 0){
			for (i=0; i < player.length; i++){
				if (player[i] == autor.id){
					player.splice(i, 1)
					return message.reply("Removed from queue. \nQueue: "+player.length+"/4")
				}
			}
			return message.reply("You're not in the queue. Type *+poker join* to enter the queue!")
		} else {
			return message.reply("Queue is empty! Type *+poker join* to enter the queue!")
		}
	} else if(args[0] == "leave" && running == 0){
		return message.reply("Match is running! Type *+poker fold* to leave!")
	}
		
	
	if (args[0] == "join" && running == 0) {
		if (player.length == 0) {
			player.push(autor.id)
			return message.channel.send(`${autor} added to the queue. \n${player.length}/4`)
			
		} else {
			for (i=0; i < player.length; i++){
				if (player[i] == autor.id){
					return message.reply("You are already in the queue")
				}
			}
			player.push(autor.id)
			message.channel.send(`${autor} added to the queue. \n${player.length}/4`)
			if (player.length == 2){
				await client.channels.cache.get("513792859330183168").bulkDelete(100, true)
				.catch(error => message.reply(`Não consegui apagar as mensagens. Razão: ${error}`));
				msg = await message.channel.send("4 players in queue for Poker game. Game starting in 15 seconds.")
				setTimeout( function(){
					msg.edit("5 seconds to game start!")
				}, 10000)
				setTimeout( function(){
					msg.edit("4 seconds to game start!")
				}, 11000)
				setTimeout( function(){
					msg.edit("3 seconds to game start!")
				}, 12000)
				setTimeout( function(){
					msg.edit("2 seconds to game start!")
				}, 13000)
				setTimeout( function(){
					msg.edit("1 second to game start!")
				}, 14000)
				setTimeout( function(){
					msg.edit("Game starting...")
				}, 15000)
				
				setTimeout(async function(){
					for(i=0; i<player.length; i++){
						players[player[i]][0] = 100
						players[player[i]][3] = 2
						
						let member = members.get(player[i])
						
						naipe1 = Math.floor(Math.random()*Scards["naipes"].length)
						players[player[i]][4][1] = Scards["naipes"][naipe1]
						if(naipe1 == 0){
							card1 = Math.floor(Math.random()*Scards["copas"].length)
							car1 = "./Commands/Poker/"+Scards["copas"][card1]+Scards["naipes"][naipe1]+".png"
							players[player[i]][4][0] = Scards["copas"][card1]
							Scards["copas"].splice(card1, 1)
						} else if(naipe1 == 1){
							card1 = Math.floor(Math.random()*Scards["ouros"].length)
							car1 = "./Commands/Poker/"+Scards["ouros"][card1]+Scards["naipes"][naipe1]+".png"
							players[player[i]][4][0] = Scards["ouros"][card1]
							Scards["ouros"].splice(card1, 1)
						} else if(naipe1 == 2){
							card1 = Math.floor(Math.random()*Scards["espadas"].length)
							car1 = "./Commands/Poker/"+Scards["espadas"][card1]+Scards["naipes"][naipe1]+".png"
							players[player[i]][4][0] = Scards["espadas"][card1]
							Scards["espadas"].splice(card1, 1)
						} else {
							card1 = Math.floor(Math.random()*Scards["paus"].length)
							car1 = "./Commands/Poker/"+Scards["paus"][card1]+Scards["naipes"][naipe1]+".png"
							players[player[i]][4][0] = Scards["paus"][card1]
							Scards["paus"].splice(card1, 1)
						}
						
						naipe2 = Math.floor(Math.random()*Scards["naipes"].length)				
						players[player[i]][5][1] = Scards["naipes"][naipe2]						
						
						if(naipe2 == 0){
							card2 = Math.floor(Math.random()*Scards["copas"].length)
							car2 = "./Commands/Poker/"+Scards["copas"][card2]+Scards["naipes"][naipe2]+".png"
							players[player[i]][5][0] = Scards["copas"][card2]						
							Scards["copas"].splice(card2, 1)
						} else if(naipe2 == 1){
							card2 = Math.floor(Math.random()*Scards["ouros"].length)
							car2 = "./Commands/Poker/"+Scards["ouros"][card2]+Scards["naipes"][naipe2]+".png"
							players[player[i]][5][0] = Scards["ouros"][card2]
							Scards["ouros"].splice(card2, 1)
						} else if(naipe1 == 2){
							card2 = Math.floor(Math.random()*Scards["espadas"].length)
							car2 = "./Commands/Poker/"+Scards["espadas"][card2]+Scards["naipes"][naipe2]+".png"
							players[player[i]][5][0] = Scards["espadas"][card2]
							Scards["espadas"].splice(card2, 1)
						} else {
							card2 = Math.floor(Math.random()*Scards["paus"].length)
							car2 = "./Commands/Poker/"+Scards["paus"][card2]+Scards["naipes"][naipe2]+".png"
							players[player[i]][5][0] = Scards["paus"][card2]
							Scards["paus"].splice(card2, 1)
						}
						
						players[player[i]][1] = car1
						players[player[i]][2] = car2
						
						fs.writeFile("./Commands/Poker/players.json", JSON.stringify(players, null, 2), (err) => {
						if (err) console.log(err);
						});
						
						await member.send(">>> Your cards!", {
							files: [
								car1,
								car2
						]}).catch(O_o=>{})
					}
					gamestart(hand)
					running = 1
					console.log(player.length)
					return
					
				}, 30000)
		
			}
		}
	} else if(running == 1 && args[0] == "join"){
		for (i=0; i < player.length; i++){
			if (player[i] == autor.id){
				return message.reply("You are already in the game")
			}
		}
		return message.reply("You can't join an ongoing Poker game! Wait for another run.")
	}
	if(running == 1){
		var a = parseInt(args[0])
		if(autor.id == player[jogador]){
			if(command == "call"){
				if (players[autor.id][0] - lastBid + players[autor.id][3] <= 0 && players[autor.id][0] > 0){
					client.channels.cache.get("513792859330183168").send(`${autor} is now ALL IN!`)
					batch = batch + players[autor.id][0]
					lastBid = players[autor.id][0] + lastBid
					players[autor.id][0] = 0
					client.channels.cache.get("513792859330183168").send(`Bid is at ${lastBid}!`)
					call = true
					if (jogador < player.length - 1){
						jogador++
						if(jogador != raise[1]){
							if(hand == 3 && jogador < player.length) {
								return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
							} else if(hand != 3){
								return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
							}
						} else if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(jogador != raise[1]){
						jogador = 0
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else {
						hand++
						gamestart(hand)
						jogador = 0
						return
					}
					
				} else {
					client.channels.cache.get("513792859330183168").send(`${autor} called the bid!`)
					batch = batch + lastBid
					players[autor.id][0] = players[autor.id][0] - lastBid + players[autor.id][3]
					players[autor.id][3] = lastBid
					client.channels.cache.get("513792859330183168").send(`Bid is at ${lastBid}!`)
					if (jogador < player.length - 1){
						jogador++
						if(raise[1] && jogador != raise[1]){
							if(hand == 0 && jogador < player.length && preflop == 1) {
								return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
							} else if(hand != 3){
								return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
							}
						} else if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(raise[1] && jogador != raise[1]){
						jogador = 0
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else {
						hand++
						gamestart(hand)
						jogador = 0
						return
						
					}
				}
			}
		} else if (command == "raise"){
			if(!args[0]){
				return message.reply("You have to insert an amount to bid!")
			} else if (a == undefined){
				return message.reply("You have to type a valid number!")
			} else if (a > players[autor.id][0]){
				return message.reply("Your max bid, for ALL IN, is "+players[autor.id][0]+"!")
			} else if (a == players[autor.id][0]){
				client.channels.cache.get("513792859330183168").send(`${autor} made a raise to ${a} credits and is now ALL IN!`)
				raise[0] = player[autor.id]
				raise[1] = jogador
				players[autor.id][0] = players[autor.id][0] - a
				players[autor.id][3] = a
				batch = batch + a
				lastBid = a
				if (jogador < player.length - 1){
					jogador++
					if(jogador != raise[1]){
						if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(hand == 3 && jogador < player.length) {
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else if(hand != 3){
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					}
				} else if(raise[1] && jogador != raise[1]){
					jogador = 0
					return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
				} else {
					hand++
					gamestart(hand)
					jogador = 0
					return
					
				}
				
			} else {
				client.channels.cache.get("513792859330183168").send(`${autor} made a raise to ${a} credits!`)
				raise[0] = player[autor.id]
				raise[1] = jogador
				players[autor.id][0] = players[autor.id][0] - a
				players[autor.id][3] = a
				batch = batch + a
				lastBid = a
				if (jogador < player.length - 1){
					jogador++
					if(raise[1] && jogador != raise[1]){
						if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(hand == 3 && jogador < player.length) {
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else if(hand != 3){
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					}
				} else if(raise[1] && jogador != raise[1]){
					jogador = 0
					return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
				} else if (raise[1] && jogador == raise[1]) {
					raise = []
					jogador = 0
					return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					
				}
			}
			
		} else if (command == "check"){
			if (players[autor.id][3] < lastBid && players[autor.id][0] > 0 || call == true){
				return message.reply("You have to call, raise or fold!")
			} else {
				client.channels.cache.get("513792859330183168").send(`${autor} has checked!`)
				if (jogador < player.length - 1){
					jogador++
					if(raise[1] && jogador != raise[1]){
						if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(hand == 3 && jogador < player.length - 1) {
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else if(hand != 3){
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					}
				} else if(raise[1] && jogador != raise[1]){
					jogador = 0
					return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
				} else {
					hand++
					gamestart(hand)
					jogador = 0
					return	
				}
			}
		} else if (command == "fold"){
			for (i=0; i < player.length; i++){
				if (player[i] == autor.id){
					player.splice(i, 1)
				}
			}
			
			if (player.length == 1){
				running = 0
				hand = 0
					
				Scards["copas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
				Scards["ouros"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
				Scards["espadas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
				Scards["paus"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
				Scards["naipes"] = ["C", "O", "E", "P"]
				
				client.channels.cache.get("513792859330183168").send(`${autor} has folded!`)
				client.channels.cache.get("513792859330183168").send(`<@${player[0]}> is the winner!!`)
				return player = []
			} else {
				client.channels.cache.get("513792859330183168").send(`${autor} has folded!`)
				if (jogador < player.length - 1){
					jogador++
					if(raise[1] && jogador != raise[1]){
						if(hand == 3 && jogador < player.length) {
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						} else if(hand != 3){
							return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
						}
					} else if(hand == 3 && jogador < player.length) {
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					} else if(hand != 3){
						return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
					}
				} else if(raise[1] && jogador != raise[1]){
					jogador = 0
					return client.channels.cache.get("513792859330183168").send(`<@${player[jogador]}> it's your turn!`)
				} else {
					hand++
					gamestart(hand)
					jogador = 0
					return
					
				}
			}
		} else if(command != "credits") {
			return message.reply("It's not your turn!")
		} else if (command == "credits"){
				if (players[autor.id][0] == 0){
					return message.reply("You are ALL IN!")
				}else{
					return message.reply("You have "+players[autor.id][0]+" credits!")
				}
			}
	}
}

exports.poker = poker