if(command == "call"){
    if (players[autor.id][0] - lastBid <= 0 && players[autor.id][0] > 0){
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
} else if (command == "raise"){
    if(!args[0]){
        return message.reply("You have to insert an amount to bid!")
    } else if (a == undefined){
        return message.reply("You have to type a valid number!")
    } else if (a <= lastBid){
        return message.reply("Your raise must be higher than last bid!  ("+lastBid+")")
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
        } else {
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
}			
