const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';
const token = require('../token.json')
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.username} właśnie przybył!`);
});

client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'link'){
        client.commands.get('link').execute(message, args);
    } else if (command == 'msg'){
        client.commands.get('msg').execute(message, args);
    } else if (command == 'dm'){
        client.commands.get('dm').execute(message, args);
    }
})

client.login(token.DISCORD_BOT.TOKEN);