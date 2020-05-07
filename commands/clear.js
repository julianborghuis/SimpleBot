module.exports.run = async (bot, message, args) =>
{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don\'t have permission for that.");
    if(!args[0]) return message.reply("You need to set how many messages you want to be deleted.");
    message.channel.bulkDelete(args[0]).then(() =>
    {
        message.channel.send(`I deleted **${args[0]}** messages!`).then(message => message.delete(5000));
    });
}

module.exports.help =
{
    name: "clear"
}
