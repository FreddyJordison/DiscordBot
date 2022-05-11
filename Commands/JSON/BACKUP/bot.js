const Discord = require("discord.js");
const config = require("./config.json");
const music = require("discord.js-music-v11");
const fs = require("fs");
const ms = require("ms");
const country = require("./Commands/country");
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

const client = new Discord.Client();

//LOCAL VARIABLES
let warns = JSON.parse(fs.readFileSync("./Commands/JSON/warning.json", "utf8"));
let cont = JSON.parse(fs.readFileSync("./Commands/JSON/cont.json", "utf8"));
let temporizador = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let timer = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let chck = JSON.parse(fs.readFileSync("./Commands/JSON/tempo.json", "utf8"));
let ctry = JSON.parse(fs.readFileSync("./Commands/JSON/country.json", "utf8"));
let level = JSON.parse(fs.readFileSync("./Commands/JSON/level.json", "utf8"));
let tst = JSON.parse(fs.readFileSync("./Commands/JSON/test.json", "utf8"));
let commands = JSON.parse(fs.readFileSync("./Commands/JSON/test.json", "utf8"));

//GLOBAL VARIABLES
var embed;
var timex;
var mmbrs = [];
var str;
var oldmm;



//CONSTANTS
const unregistered = '425583142532022286';
const mensagem = "Repetido: ";

client.on("ready", async () => {
	console.log(`Bot has started, with ${client.users.size - 4} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`Level: ${level["level"].level}`);
});

 client.on("error", (e) => {
	str = require("util").inspect(e, {depth: 1});
	
	if(str.length > 1999) {
		console.error(e);
		client.channels.get("474251743136448524").send(`Erro! ${ErrorEvent.error}`)
			.then(msg => client.destroy())
			.then(() => client.login(config.token))
			.catch(O_o=>{});
		return;
	}else{
		client.channels.get("474251743136448524").send('Erro! ```' + str + '```')
			.then(msg => client.destroy())
			.then(() => client.login(config.token))
			.catch(O_o=>{});
	}
	return;
 });
 
  client.on("warn", (e) => {
	str = require("util").inspect(e, {depth: 1});
	
	if(str.length > 1999) {
		console.warn(e);
		client.channels.get("474251743136448524").send(`Aviso! ${ErrorEvent.error}`)
			.catch(O_o=>{});
		return;
	}else{
		client.channels.get("474251743136448524").send('Aviso! ```'+str+'```').catch(O_o=>{});;
	}
	return;
 });

client.on("guildCreate", guild => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`Level: ${level["level"].level}`);
});

client.on("guildDelete", guild => {
	console.log(`Fui removido de: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`Level: ${level["level"].level}`);
});

client.on("guildMemberAdd", member => {
	setTimeout(function(){
	member.setRoles([unregistered]).catch();
		member.guild.channels.get("435532737479180300").send(`Bem vindo/Welcome ${member}!\nEscreve ***entrar*** para te juntares a nós.\nWrite ***join*** to join us.`);
	}, 1000);
});

client.on("message", async message => {
	const user = "398436822474293248"
	const alliance = '398115606928424960';
	const lead = '421767386266599425';
	const man = '416749202350145546';
	const admin = '398190150787530753';
	const castigo = '425434860815908875';
	const non = '478915989216428042';
	
	if(message.author.bot) return;

	var autor = message.member;
	
	var usern;
	var usern1;
	var ct;
	
	if(!cont[mensagem]) cont[mensagem] = {
			cont: 0
		};
		
	
	var args
	
	if(message.guild.channels.get("435532737479180300") == message.channel){
		let args11 = message.content.trim().split(/ +/g);
		if(message.member.roles.has(unregistered) && (args11 == "join"  || args11 == "entrar")){
			message.member.setRoles([user, non]).catch();
			if (message.client.users.size - 4 == 200) {
				return message.guild.channels.get("397890218159505413").send(`Digam olá ao/à ${message.member}, o nosso 200º membro! Say hi to ${message.member}, our 200th member!`).catch();
			} else {
				return message.guild.channels.get("397890218159505413").send(`Digam olá ao/à ${message.member}! Say hi to ${message.member}!`).catch();
			}
		} else if(message.member.roles.has(unregistered)){
			return message.reply('\nTens de escrever ***entrar*** para te poderes juntar a nós.\nYou have to type ***join*** to join us.');
		}
	}
	
	let istmsg = message.content.charAt(0).toLowerCase() + message.content.charAt(1);
	
	if(istmsg != config.prefix){
		rep.msg(message, cont, autor, mensagem, fs, oldmm);
		return;
	}
	
	if(istmsg != config.prefix) return;

	const err = "\:octagonal_sign: Tens de mencionar um utilizador válido! \:octagonal_sign:";

	args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	/** COMANDOS */
	
	if(command === "espera") {
		message.delete().catch(O_o=>{});
		espera.espera(message, timex, temporizador, fs, client);
		return;
	}
	
	if(command === "country") {
		message.delete().catch(O_o=>{});
		country.ctry(message, args, config);
		return;
	}
	
	if(command === "regras") {
		regras.regras(message);
		return;
	}

	if(command === "help") {
		help.help(message);
		return;
	}

	if(command === "adm") {
		message.delete().catch(O_o=>{});
		const temp1 = "\<@&398190150787530753> \<@&416749202350145546>"
		const temp2 = args.join(" ");
		let msg = temp1 + temp2;
		return message.channel.send(`${autor}:  ${msg}`);
	}

	// Comandos	Admin/manager
	if(message.member.hasPermission('KICK_MEMBERS', true)) {

		const membro = message.mentions.members.first() || message.guild.members.get(args[0]);
		
		if(command === "cadm" || command === "alla" || command === "allb" || command === "allc" || command === "cw"){
			message.delete().catch();
			move.cmd(message, command, client);
			return;
		}
		
		if(command === "kick"){
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o kick!");
			message.guild.member(membro).kick(razao);
			message.guild.channels.get("474251743136448524").send(`${membro} kickado por ${message.member}! **Razão**: ${razao}`);
			return message.channel.send(`O membro ${membro} foi kickado do servidor. **Razão**: ${razao}`);
		}
		
		if(command === "twitch") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(!args[1]) return message.reply("Tens de introduzir link do *twitch*");
			const link = args[1];
			let nome = membro.nickname;
			if(nome == null) nome = membro.user.username;
			return message.guild.channels.get("407266898238111785").send(`*Streamer*: ${nome}\n${link}`);
		}
		
		//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		
		if(command === "aviso") {
			message.delete().catch(O_o=>{});
			aviso.aviso(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err);
			return;
		}
		
		if(command === "avisos") {
			message.delete().catch(O_o=>{});
			avisos.avisos(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err);
			return;
		}
		
		if(command === "lavisos") {
			message.delete().catch(O_o=>{});
			lavisos.lavisos(usern, usern1, message, Discord, client, args, warns, fs, membro, autor, err);
			return;
		}

		//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		
		if(command === "user" || command === "alliance" || command === "lead" || command === "castigo") {
			message.delete().catch(O_o=>{});
			rolesman.rolesman(message, command, membro, castigo, user, alliance, lead, ctry, err, args, ct);
			return;
		}
		
		if(command === "poll"){
			message.delete().catch(O_o=>{});
			poll.poll(usern, message, args, autor, Discord, client);
			return;
		}
	}
	
	/**   COMANDOS ADMIN      */
	if(message.member.hasPermission('ADMINISTRATOR', true)){
		
		const membro = message.mentions.members.first() || message.guild.members.get(args[0]);
		
		
		
		
		if(command === "level"){
			message.delete().catch();
			
			if(!level["level"]) level["level"] = {
				level: 0
			};
			fs.writeFile("./level.json", JSON.stringify(level), (err) => {
			if (err) console.log(err);
			});
			
			level["level"].level += 1;
			fs.writeFile("./level.json", JSON.stringify(level), (err) => {
			if (err) console.log(err);
			});
			await client.destroy();
			await client.login(config.token);
			return;
		}
		
		if(command === "ban"){
			message.delete().catch();
			if(!membro) return message.reply(err);
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o ban!");
			message.guild.member(membro).ban(razao);
			message.guild.channels.get("474251743136448524").send(`${membro} banido por ${message.member}! **Razão**: ${razao}`);
			return message.channel.send(`O membro ${membro} foi banido do servidor. **Razão**: ${razao}`);
		}
		
		if(command === "spam") {
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
		}
		
		if(command === "man") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(membro.roles.has(man)){
				return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
			} else {
				message.guild.channels.get("474251743136448524").send(`Role <@&${man}> dado a ${membro} por ${message.member}!`);
				
				for(i = 0; i < ctry["country"].id.length; i++){
					if(membro.roles.has(ctry["country"].id[i])) ct = ctry["country"].id[i];
				}
				
				membro.setRoles([man, ct]);
				return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Manager'!`);
			}
		}

		if(command === "admin") {
			message.delete().catch(O_o=>{});
			if(!membro) return message.reply(err);
			if(membro.roles.has(admin)){
					return message.channel.send(`O utilizador ${membro} já tem esse role. Não foram feitas alterações.`);
			} else {
				message.guild.channels.get("474251743136448524").send(`Role <@&${admin}> dado a ${membro} por ${message.member}!`);
				
				for(i = 0; i < ctry["country"].id.length; i++){
					if(membro.roles.has(ctry["country"].id[i])) ct = ctry["country"].id[i];
				}
				
				membro.setRoles([admin, ct]);
				return message.channel.send(`O utilizador ${membro} foi adicionado ao role 'Admin'!`);
			}
		}

		if(command === "ping") {
			message.delete().catch(O_o=>{});
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms. Latência de API é ${Math.round(client.ping)}ms`);
		}

		if(command === "say") {
			const sayMessage = args.join(" ");
			message.delete().catch(O_o=>{});
			message.channel.send(sayMessage);
		}

		if(command === "purge") {
			message.delete().catch(O_o=>{});
			const deleteCount = parseInt(args[0]);

			if(!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply("Introduz um número entre 2 e 100!");
			message.guild.channels.get("474251743136448524").send(`${deleteCount} mensagens apagadas por ${message.member}!`);
			message.channel.bulkDelete(deleteCount)
			.catch(error => message.reply(`Não consegui apagar as mensagens. Razão: ${error}`));
		}
		
		if(command === "addc") {
			message.delete().catch(O_o=>{});
			if(!args[0]) return message.reply('Tens de meter nome do país!');
			for(i = 0; i < ctry["country"].name.length; i++) {
				if (ctry["country"].name[i] == args[0]) return message.reply("Esse país já existe");
			}
			
			let capctry = args[0].charAt(0).toUpperCase() + args[0].slice(1);
			
			let tmprole = await message.guild.createRole({
				name: capctry,
				color: '#9239f1',
				mentionable: true,
				hoist: true,
				position: 6,
			});
			
			tmprole = message.guild.roles.find("name", capctry).id;
			
			ctry["country"].name.push(capctry);
			ctry["country"].id.push(tmprole);
			
			fs.writeFile("./country.json", JSON.stringify(ctry), (err) => {
			if (err) console.log(err);
			});
			
			return message.reply(`Adicionado <@&${tmprole}> à lista de países :smiley:`);
		}
		
		if(command === "test"){
			message.delete().catch(O_o => {});
			test.test(tst, commands, message, Discord, config, music, fs, ms, country, help, espera, regras, rep, move, poll, aviso, avisos, lavisos, client, warns, cont, temporizador, timer, chck, ctry, timex, mmbrs, unregistered, mensagem, user, alliance, lead, man, admin, castigo, autor, usern, usern1, embed, ct, args, command, err, membro);
			return;
		}
	}
});

client.login(config.token);
