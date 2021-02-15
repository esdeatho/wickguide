const Discord = require('discord.js');

module.exports = {
    name: 'activate', // The name of the command
    description: 'How to activate Premium', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Premium')
        .setURL('https://wickbot.com/premium')
   
        .addFields(
            { name: '<:rightSort:809165006477459507> Activate', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Use `*activate Your-Server-ID` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Replace `Your-Server-ID` with your actual server ID' },
            { name: '<:rightSort:809165006477459507> Find Server id', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Read **[here](https://discordapp.com/channels/536277067310956565/536288784422141988/806655772921692190)**' },
            { name: '<:rightSort:809165006477459507> Transfer', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can transfer settings from free Wick to Premium wick \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Let <@!196672168388591616> know, make sure you provide the server id' },

//{ name: '<:rightSort:809165006477459507> Prices', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$5** x1  \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$7** x2\n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$10** x4' },
  //          { name: '<:rightSort:809165006477459507> Trusted', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$5** x1  \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$7** x2\n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **$10** x4' },

        )
        
    
        .setImage('https://media.discordapp.net/attachments/803306234894745670/809860707884859403/unknown.png?width=1440&height=326')
     
    
    message.channel.send(exampleEmbed);
    },
};