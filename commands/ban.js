const Discord = require('discord.js');

module.exports = {
    name: 'ban', // The name of the command
    description: 'How to ban', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Ban')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')

        .addFields(
            { name: '<:rightSort:809165006477459507> Parameters', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?t` time \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?h` ban users that are not in your server \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to ban with a briefing on why they got banned \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?soft` ban the member then instantly unban \n <:rightSort:809165006477459507>  **Example** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!b @icey ?r cute ?dm ?soft` ' },

        )
        
      
    message.channel.send(exampleEmbed);
    },
};