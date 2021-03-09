const Discord = require('discord.js');

module.exports = {
    name: 'open', // The name of the command
    description: 'Open Source?', // The description of the command (for help text)
    aliases: ['os'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        //.setTitle('Open Source')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        //.setURL('https://docs.wickbot.com/v3/commands/moderation/ban')

        .addFields(
            { name: '<:rightSort:809165006477459507> Open Source', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The bot will **never** be open source \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Head over to this [page](https://wickbot.com/premium) to see some of our supporters' },
        )
        .setImage('https://media.discordapp.net/attachments/753161435520958477/811339976011939850/unknown.png?width=1440&height=543')
      //  .setFooter('you wont be able to host it regardless')
      
    message.channel.send(exampleEmbed);
    },
};