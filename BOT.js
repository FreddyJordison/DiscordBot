const Discord = require("discord.js");
const config = require("./Commands/JSON/config.json");
const fs = require("fs");
const ms = require("ms");

//EXPORTS
const lavisos = require("./Commands/lavisos");
const aviso = require("./Commands/aviso");
const move = require("./Commands/move");
const poll = require("./Commands/poll");
const help = require("./Commands/help");
const birthdays = require("./Commands/birthdays");
const randm = require("./Commands/randomizer");


//Local variables
let ajuda = JSON.parse(fs.readFileSync("./Commands/JSON/help.json", "utf8"));
let bd = JSON.parse(fs.readFileSync("./Commands/JSON/birthdays.json", "utf8"));

var mmbrs = [];
var members = [];
var players = []

const client = new Discord.Client();

client.commands = new Discord.Collection();

client.on("ready", async () => {
	console.log(`Bot wG.Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
	client.user.setActivity(`+help`);

	birthdays.birth(client, bd);
});

 client.on("error", (e) => {
	str = require("util").inspect(e, {depth: 1});
	
	if(str.length > 1999) {
		console.error(e);
		return;
	}
	return;
 });

client.on("guildCreate", guild => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`+help`);
});

client.on("guildDelete", guild => {
	console.log(`Fui removido de: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`+help`);
});

/*client.on('voiceStateUpdate', async (oldMember, newMember) => {
	let newUserChannel = newMember.channel
	let oldUserChannel = oldMember.channel
  
	console.log(newUserChannel)
  
	if(oldUserChannel === undefined && newUserChannel !== undefined) {

		
		
		await newUserChannel.join().catch()

	} else if(newUserChannel === undefined){
  
	  // User leaves a voice channel
  
	}
  })*/
		

client.on("message", async message => {
	
	if(message.author.bot) return;

	var autor = message.member;		
	
	var usern;
	var usern1;
	var args;
	
	let istmsg = message.content.charAt(0);

	const err = "\:octagonal_sign: Tens de mencionar um utilizador válido! \:octagonal_sign:";
	
	if (message.channel.type === 'dm') {
		return message.author.send ("Ainda não tenho conhecimentos suficientes para responder a mensagens privadas. Porque não tentas num servidor?")
	}
	
	const mmbr = message.mentions.members.array() || new Array();
	
	if(mmbr.length > 0){
		for(let i = 0; i < mmbr.length; i++){
			if(mmbr[i].id == '429624717222215721') return message.reply('Se precisares da minha ajuda, utiliza o comando +help');
		}
	}
	
	if(istmsg != config.prefix) return;
	
	args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	
	const command = args.shift().toLowerCase();
	
	/** COMANDOS */
	const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
	
	if(command === "help") {
		message.delete().catch(O_o=>{});
		help.help(message, args, ajuda, fs);
		return;
	}
	
	/**   COMANDOS ADMIN      */
	if(message.member.hasPermission('CHANGE_NICKNAME')){

		if(command === "fun1" || command === "fun2" || command === "musica" || command === "convm"|| command === "recepçao" || command === "outros" || command === "espera" || command === "compa" || command === "compb" || command === "treino1" || command === "treino2" || command === "cw1" || command === "cw2" || command === "cw3" || command === "convivio"){
			message.delete().catch();
			move.cmd(message, command, client, autor, mmbrs);
			return;
		}

		if(command === "random" || command === "sort" || command === "teams" || command === "reset"){
			message.delete().catch(O_o=>{})
			randm.randm(message, command, client, autor, mmbrs, members, players, args)
			return
		}
		
		if(command === "poll"){
			message.delete().catch(O_o=>{});
			poll.poll(usern, message, args, autor, Discord, client);
			return;
		}
		
		if(command === "ping") {
			message.delete().catch(O_o=>{});
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
			return
		}

		if(command === "say") {
			const sayMessage = args.join(" ");
			message.delete().catch(O_o=>{});
			return message.channel.send(sayMessage);
		}
		
		if(command === "logout") {
			client.logout;
			client.close;
		}

		if(command === "aviso") {
			message.delete().catch(O_o=>{});
			aviso.aviso(usern, usern1, message, Discord, client, args, membro, autor, err);
			return;
		}

		if(command === "lavisos") {
			message.delete().catch(O_o=>{});
			lavisos.lavisos(usern, usern1, message, Discord, client, args, membro, autor, err);
			return;
		}

		if(command === "kick"){
			if(!membro) return message.reply(err);
			let razao = args.join(" ").slice(args[0].length);
			if (!razao) return message.reply("Tens de dar uma razão para o kick!");
			message.guild.member(membro).kick(razao);
			client.channels.cache.get("410560916770258944").send(`${membro} kickado por ${autor}! **Razão**: ${razao}`);
			return client.channels.cache.send(`O membro ${membro} foi kickado do servidor. **Razão**: ${razao}`);
		}
			
	}

});

client.login(config.token);
