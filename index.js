const Discord = require('discord.js');

const config = require('./config.json');

const Client = new Discord.Client({disableEveryone: true});
const keepAlive = require ("./server")

const fs = require('fs');

Client.on("ready", async () => {
    console.log(`${Client.user.username} đang hoạt động!`)

   Client.user.setActivity("Discord", {type: "STREAMING", url: "https://www.twitch.tv/discord"})
});

Client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'CHANNEL NAME')
    welcomeChannel.send (`welcome! ${member}`)
})

Client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'CHANNEL NAME')
    welcomeChannel.send (`Goodbye! ${member}`)
})

Client.on("message", async message => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    if(cmd === `${prefix}hi`) {
        return message.channel.send("Check `=changelog` for more info")
    }

    if(cmd === `${prefix}hello`) {
        return message.reply("Check `=changelog` for more info")
    }

})

Client.on("message", async message => {
    if(message.author.Client || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    if(message.content.startsWith("=changelog")){
        let user = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
        .setTitle("Hello!")
        .setColor("RED")
        .addField("What happened?", "Because I'm working in The Coder Community Server, so we will make this bot private!")
        .addField("So?", "All the cmd (except developer command) will be disable!")
        message.channel.send(embed)
    }
})

        


        
keepAlive()
Client.login(process.env.token);

