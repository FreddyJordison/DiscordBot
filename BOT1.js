const Discord = require("discord.js");
const config = require("./Commands/JSON/config.json");
const fs = require("fs");
const ms = require("ms");
const ffmpeg = require("ffmpeg-static")
const opus = require("@discordjs/opus")

//EXPORTS
const sites = require("./Commands/sites");
const help = require("./Commands/help");
const espera = require("./Commands/espera");
const regras = require("./Commands/regras");
const rep = require("./Commands/rep");
const move = require("./Commands/move");
const poll = require("./Commands/poll");
const aviso = require("./Commands/aviso");
const avisos = require("./Commands/avisos");
const lavisos = require("./Commands/lavisos");
const test = require("./Commands/test");
const rolesman = require("./Commands/rolesman");
const misc = require("./Commands/misc");
const poker = require("./Commands/Poker/poker");

const client = new Discord.Client();

//LOCAL VARIABLES
let rgr =  JSON.parse(fs.readFileSync("./Commands/JSON/regras.json", "utf8"));
let cont = JSON.parse(fs.readFileSync("./Commands/JSON/cont.json", "utf8"));
let temporizador = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let timer = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let chck = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let ctry = JSON.parse(fs.readFileSync("./Commands/JSON/country.json", "utf8"));
let level = JSON.parse(fs.readFileSync("./Commands/JSON/level.json", "utf8"));
let Scards = JSON.parse(fs.readFileSync("./Commands/Poker/poker.json", "utf8"));
let players = JSON.parse(fs.readFileSync("./Commands/Poker/players.json", "utf8"));
let ajuda = JSON.parse(fs.readFileSync("./Commands/JSON/help.json", "utf8"));

//GLOBAL VARIABLES
Scards["copas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
Scards["ouros"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
Scards["espadas"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
Scards["paus"] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
Scards["naipes"] = ["C", "O", "E", "P"]
Scards["bot"] = []

fs.writeFile("./Commands/Poker/poker.json", JSON.stringify(Scards, null, 2), (err) => {
if (err) console.log(err);
});

var embed;
var timex;
var mmbrs = [];
var str;
var lvl = level["level"].level



//CONSTANTS
const user = "513858673450156033"
const MC = '513858580881997848';
const man = '513858453236613120';
const mensagem = "Repetido: ";

client.on("ready", async () => {
	console.log(`Bot MasterBot has started, with ${client.users.cache.size - 2} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
	client.user.setActivity(`+help`);
});

 client.on("error", (e) => {
	str = require("util").inspect(e, {depth: 1});
	
	if(str.length > 1999) {
		console.error(e);
		client.channels.cache.cache.get("513860554172137473").send(`Erro! ${ErrorEvent.error}`).catch(O_o=>{});
		return;
	}else{
		client.channels.cache.get("513860554172137473").send('Erro! ```' + str + '```').catch(O_o=>{});
	}
	return;
 });

client.on("guildCreate", guild => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`Level: ${lvl}`);
});

client.on("guildDelete", guild => {
	console.log(`Fui removido de: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`Level: ${lvl}`);
});

client.on("guildMemberAdd", member => {
	setTimeout(function(){
	member.setRoles([user]).catch();
		member.guild.channels.cache.get("513723623832420359").send(`Bem vindo/Welcome ${member}!`);
	}, 1000);
});

client.on('voiceStateUpdate', async (oldMember, newMember) => {
	let newUserChannel = newMember.channelID
	let oldUserChannel = oldMember.channelID
	let voicechannel = client.channels.cache.get(newUserChannel)
  
	if(newUserChannel !== undefined) {

		await voicechannel.join().then(connection => connection.on("speaking", user => {
			const dispatcher = connection.play('./Woodpecker.mp3',{volume:0.5})
		})).catch()

	} else if(newUserChannel === undefined){
  
	  // User leaves a voice channel
  
	}
  })

  client.on('speaking', (user, speaking) => {
	if (client.guild.member(user).channelID == client.channelID) return;
		console.log("speaking")
  });
		

client.on("message", async message => {
	
	if(message.author.bot) return;

	var autor = message.member;
	
	var usern;
	var usern1;
	var ct;
	
	if(!cont[mensagem]) cont[mensagem] = {
			cont: 0
		};
		
	
	var args
	
	let istmsg = message.content.charAt(0);

	const err = "\:octagonal_sign: Tens de mencionar um utilizador válido! \:octagonal_sign:";
	
	if (message.channel.type === 'dm') {
		return message.author.send ("Ainda não tenho conhecimentos suficientes para responder a mensagens privadas. Porque não tentas num servidor?")
	}

	if(istmsg != config.prefix){
		rep.msg(message, cont, autor, mensagem, fs, mmbrs);
		return
	}
	
	if(istmsg != config.prefix) return;
	
	args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	
	const command = args.shift().toLowerCase();
	
	/** COMANDOS */

	const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

	if(membro.length > 0){
		for(let i = 0; i < membro.length; i++){
			if(membro[i].id == '437711381320695810') return message.reply('Se precisares da minha ajuda, utiliza o comando +help');
		}
	}
	
	if (command === "wiki" || command === "google") {
		sites.sites(message, args, command);
		return;
	}
	
	/*if(command === "espera") {
		message.delete().catch(O_o=>{});
		espera.espera(message, timex, temporizador, fs, client, autor);
		return;
	}
	
	if(command === "regras") {
		regras.regras(message, args, fs, rgr);
		return;
	}
*/	
	
	

	switch(command){
		case "poker":
		case "fold":
		case "raise":
		case "call":
		case "check":
		case "credits":
			message.delete().catch(O_o=>{"Erro"});
			poker.poker(message, args, autor, client, Scards, fs, players, command);
			return;
	}

	if(command === "help") {
		help.help(message, args, ajuda, fs);
		return;
	}
	
	if(command === "live" || command === "games") {
		misc.misc(message, autor, command, fs)
		return;
	}

	if(command === "adm") {
		message.delete().catch(O_o=>{});
		const temp1 = "\<@&513858453236613120>"
		const temp2 = args.join(" ");
		let msg = temp1 + temp2;
		return message.channel.send(`${autor}:  ${msg}`);
	}
	
	if(command === "q1" || command === "q2" || command === "q3" || command === "cod"|| command === "gta"){
		message.delete().catch();
		move.cmd(message, command, client, autor, mmbrs);
		return;
	}
	
		
		

	
	/**   COMANDOS ADMIN      */
	if(message.member.hasPermission('ADMINISTRATOR')){
		
		if(command === "kick"){
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o kick!");
			message.guild.member(membro).kick(razao);
			message.guild.channels.cache.get("513860554172137473").send(`${membro} kickado por ${message.member}! **Razão**: ${razao}`);
			return message.channel.send(`O membro ${membro} foi kickado do servidor. **Razão**: ${razao}`);
		}
		
		if(command === "twitch") {
			let twitch = JSON.parse(fs.readFileSync("./Commands/JSON/twitch.json", "utf8"))
			
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(!args[1]) return message.reply("Tens de introduzir link do *twitch*");
			const link = args[1];
			let nome = membro.nickname;
			if(nome == null) nome = membro.user.username;
			
			message.channel.send(`Twitch de ${nome} adicionado ao canal <#516018439614103586>`)
			
			twitch[membro.id] = link
			
			fs.writeFile("./Commands/JSON/twitch.json", JSON.stringify(twitch, null, 2), (err) => {
				if(err) console.log(err);
			});
			
			return message.guild.channels.cache.get("516018439614103586").send(`*Streamer*: ${nome}\n${link}`);
		}
		
		if(command === "poll"){
			message.delete().catch(O_o=>{});
			poll.poll(usern, message, args, autor, Discord, client);
			return;
		}
			
	
		if(command === "ban"){
			message.delete().catch();
			if(!membro) return message.reply(err);
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o ban!");
			message.guild.member(membro).ban(razao);
			message.guild.channels.cache.get("474251743136448524").send(`${membro} banido por ${message.member}! **Razão**: ${razao}`);
			return message.channel.send(`O membro ${membro} foi banido do servidor. **Razão**: ${razao}`);
		}
		
/*		if(command === "spam") {
			message.delete().catch();
			if (!args[0]){
				return message.reply("Tens de indicar quantidade de mensagens a enviar!");
			}
			let count = args[0];
			let spamm = args.join(" ").slice(args[0].length);
			if (count <= 0){
				return message.reply("Tens de indicar quantidade de mensagens a enviar!");
			}else if(!spamm){
				return message.reply("Tens de escrever mensagem!");
			}else{
				for(i = 0; i < count; i++){
					await message.channel.send(`${spamm}`).catch();
				}
				return;
			}
		}   */
		
		if(command === "man") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(membro.roles.has(man)){
				return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
			} else {
				
				membro.setRoles([man]);
				message.guild.channels.cache.get("513860554172137473").send(`${membro} adicionado ao role 'Manager' por ${autor}`)
				return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Manager'!`);
			}
		}

		if(command === "clan") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(membro.roles.has(MC)){
					return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
			} else {
				membro.setRoles([MC]);
				message.guild.channels.cache.get("513860554172137473").send(`${membro} adicionado ao role 'Clan Member' por ${autor}`)
				return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Clan Member'!`);
			}
		}
		
		if(command === "user") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(membro.roles.has(user)){
					return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
			} else {
				membro.setRoles([user]);
				message.guild.channels.cache.get("513860554172137473").send(`${membro} adicionado ao role 'Member' por ${autor}`)
				return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Member'!`);
			}
		}
		
		if(command === "ping") {
			message.delete().catch(O_o=>{});
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms. Latência de API é ${Math.round(client.ping)}ms`);
			return
		}

		if(command === "say") {
			const sayMessage = args.join(" ");
			message.delete().catch(O_o=>{});
			return message.channel.send(sayMessage);
		}

		if(command === "purge") {
			message.delete().catch(O_o=>{});
			const deleteCount = parseInt(args[0]);

			if(!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply("Introduz um número entre 2 e 100!");
			message.guild.channels.cache.get("513860554172137473").send(`${deleteCount} mensagens apagadas por ${message.member} no canal ${message.channel}!`);
			message.channel.bulkDelete(deleteCount, true)
			.catch(error => message.reply(`Não consegui apagar as mensagens. Razão: ${error}`));
			return
		}
		
		/*if(command === "test"){
			message.delete().catch(O_o => {});
			test.test(message, Discord, config, fs, ms, help, espera, regras, rep, move, poll, aviso, avisos, lavisos, client, cont, temporizador, timer, chck, ctry, timex, mmbrs, mensagem, user, alliance, lead, man, admin, castigo, autor, usern, usern1, embed, ct, args, command, err, membro);
			return;
		}*/
		
		if(command === "reset"){
			const a = await message.channel.send('A reiniciar...');
			message.channel.startTyping();
			
			await client.destroy();
			await client.login(config.token);
			a.edit('Feito!');
			message.channel.stopTyping(true);
			return;
		}			
			
	}
});

client.login(config.token);