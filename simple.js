// Requiring and defining all the bots needs.
const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
require("moment-duration-format");
bot.commands = new Discord.Collection();

// Load all the commands.
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let commands = files.filter(f => f.split(".").pop() === "js")
    if (commands.length <= 0) {
        console.log('I have no commands! :(');
        return;
    }
    commands.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}. ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    })
    console.log('\nSimpleBot is created by JulianDev.');
});

// Set a game for the bot.
const act = {
    P: "PLAYING",
    W: "WATCHING",
    L: "LISTENING",
    N: "NONE"
};

bot.on("ready", async () => {
    await bot.user.setActivity("Discord Server", {type: `${act.W}`});
});

// Send a message when a user joins the server.
bot.on('guildMemberAdd', member => {
    const channel = bot.channels.cache.get(config.welcomeChannel);
    if (!channel) return;
    // Send the embed message.
    const embed = new Discord.MessageEmbed()
        .setColor("#59f442")
        .setAuthor(member.user.username, member.user.avatarURL({ dynamic:true }))
        .setDescription("Has joined the server.")
    channel.send({ embed });
});

// Send a message when a user leaves the server.
bot.on('guildMemberRemove', member => {
    const channel = bot.channels.cache.get(config.welcomeChannel);
    if (!channel) return;
    // Send the embed message.
    const embed = new Discord.MessageEmbed()
        .setColor("#f44242")
        .setAuthor(member.user.username, member.user.avatarURL({ dynamic:true }))
        .setDescription("Has left the server.")
    channel.send({ embed });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);


});
// Let the bot go online.
bot.login(config.token);
