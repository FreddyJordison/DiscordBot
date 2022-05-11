var randm = async function(message, command, client, autor, mmbrs, members, players, args){

    var p1
    var p2
    var t1
    var teams = new Array()

    if(command === "random"){

        mmbrs = message.mentions.members.array() || new Array();

        for(i = 0; i < mmbrs.length; i++){
            var b = false
            if(members.length){
                for(a = 0; a < members.length; a++){
                    if(mmbrs[i].id === members[a]){
                        b  = true
                        break
                    }
                }
            }
            if (b === false){
                members.push(mmbrs[i].id)
            }
        }
        return members;

    }else if(command === "sort"){
        if(!members.length){
            return message.reply('Tens, primeiro, que selecionar jogadores a sortear!')
        }

        if(args[0] > 2 && args[0] < 9){
            if (members.length < args[0] * 2){
                return message.reply("Tens de indicar jogadores para, pelo menos, duas equipas. Atualmente só estão "+members.length+" jogadores selecionados!")
            }
            while (members.length > 0){
                t1 = []
                if(members.length >= args[0]){
                    for(i = 0; i < args[0]; i++){                
                        p1 = Math.floor(Math.random()*members.length)
                    
                        t1.push(members[p1])
                    
                        members.splice(p1, 1)
                    }
                    players.push(t1);
                }else{
                    break
                }
            }
        }else{
            while (members.length > 0){
                t1 = []
                p1 = Math.floor(Math.random()*members.length)
                t1.push(members[p1])
                members.splice(p1, 1)
    
                p2 = Math.floor(Math.random()*members.length)
                t1.push(members[p2])
                members.splice(p2,1)
                
                players.push(t1);
            }
        }

        var msg

        for(i = 0; i < players.length; i++){
            msg = `**Equipa ${i+1}**: `
            if(args[0] > 2 && args[0] < 9){
                for(a = 0; a < args[0]; a++){
                    msg = msg + `<@${players[i][a]}> `
                }
            }else{
                msg = msg + `<@${players[i][0]}> e <@${players[i][1]}>`
            }

            message.channel.send(msg)
        }

        return players

    }else if(command === "teams"){
        if(!players.length){return message.reply('Tens, primeiro, que sortear os jogadores!')}

        while (players.length > 0){
            t1 = []
            p1 = Math.floor(Math.random()*players.length)
            t1.push(players[p1])
            players.splice(p1, 1)

            p2 = Math.floor(Math.random()*players.length)
            t1.push(players[p2])
            players.splice(p2,1)
            
            teams.push(t1[0]);
            teams.push(t1[1]);
        }

        var f = true

        for(i = 0; i < teams.length; i++){
            if (f === true && teams[i+1] != undefined){
                message.channel.send(` \`\`\` \`\`\` `)
                f = false
            }else if(f === false && teams[i] != undefined){
                message.channel.send(`**VS**`)
                f = true
            }else if(teams[i] === undefined || teams[i+1] === undefined){
                return
            }
            message.channel.send(`<@${teams[i][0]}> e <@${teams[i][1]}>`)
        }
    }else if(command === "reset"){
        player = []
        members = []
        teams = []

        return {
            players,
            members,
            teams
        }
    }

}

exports.randm = randm;