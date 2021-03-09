const Discord = require('discord.js');

module.exports = {
    name: 'unquarantine', // The name of the command
    description: 'How to get someone out of quarantine', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    aliases: 'r,uq',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        //.setTitle('Ban')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')

        .addFields(
            { name: '<:rightSort:809165006477459507> Unquarantine', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> To get someone out of quarantine use the command `w!r @user` where `@user` is the actual user \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ex.** w!r <@737913175697129582>' },

        )
        
      
    message.channel.send(exampleEmbed);
    },
};