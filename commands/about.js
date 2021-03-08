const Discord = require('discord.js');

module.exports = {
    name: 'about', // The name of the command
    description: 'what this bots about', // The description of the command (for help text)
    aliases: ['ab'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
        .addFields(
            { name: '<:rightSort:809165006477459507> Info', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This bot is a private bot for the server Wick Lounge. This bot has **nothing** to do with the actual wick devs and is a bot made by <@737913175697129582>' },

        )
        
    
    message.channel.send(exampleEmbed);
    },
};



