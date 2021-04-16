const Discord = require('discord.js');

module.exports = {
    name: 'boost', // The name of the command
    description: 'boosting perks', // The description of the command (for help text)
    aliases: ['b'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
        .addFields(
            { name: '<a:boost:822543186371149914> Boost Perks', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you boost the server you will be able to redeem a 15% off coupon on the payment panel and also a <@&613791938335735818> role which is hoisted directly below the staff roles!. ' },
            { name: '<:danger:809528345981222943> Disclaimer', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> We do reserve the right to charge that 15% if you remove your boost before a months time/95% of the time. ' },

        )
        
    
    message.channel.send(exampleEmbed);
    },
};
