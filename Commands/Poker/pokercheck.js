//WIP

var winner = "For some reason, I can't get the winner. Missing code?"

var pokerc = async function(Scards, player, players, client, winner) {

	var cards = []
	var suits = []
	
	var values = [["A","K","Q","J","10","9","8","7","6","5","4","3","2","A"],[13,12,11,10,9,8,7,6,5,4,3,2,1,0]]
	
	for (i=0; i < player.length; i++){
		cards[i] = []

		cards[i][0] = player[i]

		cards[i][1] = players[player[i]][4][0]

		cards[i][2] = players[player[i]][5][0]

		for (o=0; o < Scards["bot"].length; o++){

			cards[i][o+3] = Scards["bot"][o][0]
		}
	}
	
	for (i=0; i < player.length; i++){
		suits[i] = []

		suits[i][0] = player[i]

		suits[i][1] = players[player[i]][4][1]

		suits[i][2] = players[player[i]][5][1]

		for (o=0; o < Scards["bot"].length; o++){
 
			suits[i][o+3] = Scards["bot"][o][1]
		}
	}
	var idf = []
	
	var id = []
	
	var rsf = []
	
	var sf = []
	
	var Count = 0
	
	var High = 1
	
	var value = []
	for (i=0;i < player.length; i++){
		value[i] = []
		value[i][0] = [player[i]]
		value[i][1] = 0;
	}

	for (i=0; i < value.length; i++){
		for (w=0; i < values[0].length; w++){
			if (players[player[i]][4][0] == values[0][w] || players[player[i]][5][0] == values[0][w]){
				value[i][1] = values[1][w]
				break
			}
		}
	}

	console.log("Cards:")
	console.log(cards)
	console.log(" ")
	console.log("Suits:")
	console.log(suits)
	console.log(" ")
	
	var temp = [[],[],[],[],[]]
	
	
	
	//return client.channels.get("504736518217138184").send('End of match. Winner verification still to come!')
	
	var suitCount = [0,0,0,0]
	var rsfCount = [0,0,0,0,0]
	var ptpCount = [0,0,0,0,0,0,0,0,0,0,0,0,0]
	
	async function Flush(temp, sf, rsf, value, idf, values, cards) {
		console.log("Value:")
		console.log(value)

		console.log("Temp:")
		console.log(temp)

		if(idf.length > 0){
			//Royal Straight Flush (Corrigido)
			for(i=0; i < cards.length; i++){
				rsfCount = [0,0,0,0,0]
				cards[i].forEach(function(f){
					switch(f) {
						case "A":
							rsfCount[0]++
							break
						case "K":
							rsfCount[1]++
							break
						case "Q":
							rsfCount[2]++
							break
						case "J":
							rsfCount[3]++
							break
						case "10":
							rsfCount[4]++
							break
						default:
							break
					}
				})
				
				if(!rsfCount.includes(0)){
					rsf.push(cards[i][0])
				}
			}
			if (rsf.length == 1){
				return winner = `<@${rsf[0]}> is the winner with a Royal Straight Flush!`
			} else if (rsf.length > 1){
				for (i=0; i < rsf.length; i++){
					players[rsf[i]].forEach(function(f){
						for  (o=0; o < values[0].length; o++){
							if (f === values[0][o] && values[1][o] > value[i][1]){
								value[i][1] = values[1][o]
								value[i][0] = rsf[i]
								break
							}
						}
					})
				}
				
				let top = 0
				var ind = 0
				
				for (i=0; i < value.length; i++){
					if (value[i][1] > top){
						top = value[i][1]
						ind = i
					}
				}
				return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
			}
			
			//Straight Flush (Corrigido)
			for (o=0; o < cards.length;o++){
				for (f=1; f < cards[o].length; f++){
					for (i=0; i < values[0].length; i++){
						if(cards[o][f] === values[0][i]){
							if(cards[o][f] === values[0][0]){
								cards[o].push(0)
							}
							cards[o][f] = values[1][i]		
						}
					}
				}
				cards[o].sort(function(a,b){return a-b})
				Count = cards[o][0]
				for (h=1; h < cards[o].length - 1; h++){
					if(cards[o][h] == Count + 1){
						High++
						Count++
						if(High == 5){
							sf.push(cards[o][cards[o].length-1])
							break
						}
					}else if (cards[o][h] == Count){
						
					}else{
						High = 1
						Count = cards[o][h]
					}
			}		
		}
		
		if (sf.length == 1){
			return winner = `<@${sf[0]}> is the winner with a Straight Flush!`
		} else if (sf.length > 1){
			for (i=0; i < sf.length; i++){
				players[sf[i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = sf[i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		}
		//Four of a Kind
		if(temp[0].length === 1){
			return winner = `<@${temp[0][0]}> is the winner with a Four of a Kind`
		}else if(temp[0] > 1){
			for (i=0; i < temp[0].length; i++){
				players[temp[0][i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = temp[0][i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		
		//Full House
		if(temp[1].length === 1){
			return winner = `<@${temp[1][0]}> is the winner with a Full House`
		}else if(temp[1].length > 1){
			for (i=0; i < temp[1].length; i++){
				players[temp[1][i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = temp[1][i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		
		
		//Flush
		if(idf.length > 0){
			if (idf.length == 1){
				return winner = `<@${idf[0]}> is the winner with a Flush!`
			}else{
				for (i=0; i < idf.length; i++){
					players[idf[i]].forEach(function(f){
						for  (o=0; o < values[0].length; o++){
							if (f === values[0][o] && values[1][o] > value[i][1]){
								value[i][1] = values[1][o]
								value[i][0] = idf[i]
								break
							}
						}	
					})
				}
			
				let top = 0
				var ind = 0
				
				for (i=0; i < value.length; i++){
					if (value[i][1] > top){
						top = value[i][1]
						ind = i
					}
				}
				return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
			}
		}
		
		//Straight (Corrigido(?))
		for (o=0; o < cards.length;o++){
			for (f=1; f < cards[o].length; f++){
				for (i=0; i < values[0].length; i++){
					if(cards[o][f] === values[0][i]){
						if(cards[o][f] === values[0][0]){
							cards[o].push(0)
						}
						cards[o][f] = values[1][i]
						
						
					}
				}
			}
			cards[o].sort(function(a,b){return a-b})
			Count = cards[o][0]
			for (h=1; h < cards[o].length - 1; h++){
				if(cards[o][h] == Count + 1){
					High++
					Count++
					if(High == 5){
						sf.push(cards[o][cards[o].length-1])
						break
					}
				}else if (cards[o][h] == Count){}
				else{
					High = 1
					Count = cards[o][h]
				}
			}		
		}
		
		if (sf.length == 1){
			return winner = `<@${sf[0]}> is the winner with a Straight!`
		} else if (sf.length > 1){
			for (i=0; i < sf.length; i++){
				players[sf[i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = sf[i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		
		//Three of a Kind
		if(temp[2].length == 1){
			return winner = `<@${temp[2][0]}> is the winner with a Three of a Kind`
		}else if(temp[2] > 1){
			for (i=0; i < temp[2].length; i++){
				players[temp[2][i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = temp[2][i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		
		//Two Pairs
		if(temp[3].length === 1){
			return winner = `<@${temp[3][0]}> is the winner with Two Pairs`
		}else if(temp[3] > 1){
			for (i=0; i < temp[3].length; i++){
				players[temp[3][i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = temp[3][i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			
			return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
		}
		
		//Pair
		if(temp[4].length === 1){
			return winner = `<@${temp[4][0]}> is the winner with a Pair`
		}else if(temp[4] > 1){
			for (i=0; i < temp[4].length; i++){
				players[temp[4][i]].forEach(function(f){
					for  (o=0; o < values[0].length; o++){
						if (f === values[0][o] && values[1][o] > value[i][1]){
							value[i][1] = values[1][o]
							value[i][0] = temp[4][i]
							break
						}
					}	
				})
			}
			
			let top = 0
			var ind = 0
			
			for (i=0; i < value.length; i++){
				if (value[i][1] > top){
					top = value[i][1]
					ind = i
				}
			}
			
			return winner = `<@${value[ind][0]}> is the winner with the HighCard`
		}
		
		//HighCard
		for (i=0; i < player.length; i++){
			players[player[i]].forEach(function(f){
				for  (o=0; o < values[0].length; o++){
					if (f === values[0][o] && values[1][o] > value[i][1]){
						value[i][1] = values[1][o]
						value[i][0] = player[i]
						break
					}
				}	
			})
		}
			
		let top = 0
		var ind = 0

		for (i=0; i < value.length; i++){
			if (value[i][1] > top){
				top = value[i][1]
				ind = i
			}
		}
		
		return winner = `<@${value[ind][0]}> is the winner with the HighCard!`
			
	}
	
	for (i=0; i < suits.length; i++){
		suitCount = [0,0,0,0]
		suits[i].forEach(function(f) {
			switch(f){
				case "C":
					suitCount[0]++
					break
				
				case "E":
					suitCount[1]++
					break
				
				case "O":
					suitCount[2]++
					break
					
				case "P":
					suitCount[3]++
					break
					
				default:
					break
					
			}
		})
		for(n=0;n < suitCount.length;n++){
			if (suitCount[n] >= 5){
				idf.push(suits[i][0])
			}
		}
	}
	
	var q = 0
	for (i=0; i < cards.length; i++){
		id[i] = [0,0,0,0,0,0,0]
		ptpCount = [0,0,0,0,0,0,0,0,0,0,0,0,0]
		cards[i].forEach(function(f) {
			switch(f){
				case "A":
					ptpCount[0]++
					if (value[i] < 13){
						value[i] == 13
					}
					break
				
				case "K":
					ptpCount[1]++
					if (value[i] < 12){
						value[i] == 12
					}
					break
				
				case "Q":
					ptpCount[2]++
					if (value[i] < 11){
						value[i] == 11
					}
					break
					
				case "J":
					ptpCount[3]++
					if (value[i] < 10){
						value[i] == 10
					}
					break
					
				case "10":
					ptpCount[4]++
					if (value[i] < 9){
						value[i] == 9
					}
					break
	
				case "9":
					ptpCount[5]++
					if (value[i] < 8){
						value[i] == 8
					}
					break
	
				case "8":
					ptpCount[6]++
					if (value[i] < 7){
						value[i] == 7
					}
					break
	
				case "7":
					ptpCount[7]++
					if (value[i] < 6){
						value[i] == 6
					}
					break
	
				case "6":
					ptpCount[8]++
					if (value[i] < 5){
						value[i] == 5
					}
					break
	
				case "5":
					ptpCount[9]++
					if (value[i] < 4){
						value[i] == 4
					}
					break

				case "4":
					ptpCount[10]++
					if (value[i] < 3){
						value[i] == 3
					}
					break
				
				case "3":
					ptpCount[11]++
					if (value[i] < 2){
						value[i] == 2
					}
					break
	
				case "2":
					ptpCount[12]++
					if (value[i] < 1){
						value[i] == 1
					}
					break
				
				default:
				break
					
			}
		})

		id[i][0] = cards[i][0]
		for (n=0; n < ptpCount.length;n++){
			if (ptpCount[n] == 4){
				id[i][1]++
				id[i][2] = n
				
			}else if (ptpCount[n] == 3){
				id[i][3]++
				id[i][4] = n				
				
			} else if (ptpCount[n] == 2){
				id[i][5]++
				id[i][6] = n
			}
		}
	}
	


	var j = [0,0,0]
	if (id.length > 0){
		for (i=0;i < id.length;i++){
			
			if (id[i][1] > 0){
				temp[0].push(id[i][0])
			}else if (id[i][3] > 0 && id[i][5] > 0){
				temp[1].push(id[i][0])
			}else if (id[i][3] > 0){
				temp[2].push(id[i][0])
			}else if (id[i][5] === 2){
				temp[3].push(id[i][0])
			}else if (id[i][5] === 1){
				temp[4].push(id[i][0])
			}	
		}
	}
		
	Flush(temp, sf, rsf, value, idf, values, cards)
	client.channels.cache.get("513792859330183168").send(winner)
	return
}

module.exports = {
	pokerc
}