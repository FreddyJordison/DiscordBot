var birth = function (client, bd) {

    var currentdate = new Date();

    var dia = currentdate.getDate()

    var mes = currentdate.getMonth() + 1


    for (i=0; i < bd.anivs.length; i++){
        if(bd.anivs[i].dia == dia && bd.anivs[i].mes == mes){
            client.channels.cache.get("402184042516054017").send(`Parabéns <@${bd.anivs[i].membro}>!`);
        }
    }

}
exports.birth = birth