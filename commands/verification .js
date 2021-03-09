const Discord = require('discord.js');

module.exports = {
    name: 'verification', // The name of the command
    description: 'Verification', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    aliases: ['v','verify'],
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Verification')
        .setURL('https://wickbot.com/docs/setup#28_Verification')
 
        .addFields(
            { name: '<:rightSort:809165006477459507> Status', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **On:** `w!v 1 ?on` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Off:** `w!v 1 ?off`' },
       
           { name: '<:rightSort:809165006477459507> Action', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!v m/k/b ?set 2`**[m: mute, k: kick, b: ban]** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> We recommend making Wick kick the user in case they fail verification. This way, even if they fail verification, they won\'t be able to mass dm your members. ' },
           { name: '<:rightSort:809165006477459507> Target', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!v <all/suspicious> ?set 3` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> We recommend verifying everyone. If you don\'t want to annoy genuine members, you can choose to verify only suspicious members.' },
           { name: '<:rightSort:809165006477459507> Bots', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!v 4 <?on/?off>` <:danger:809528345981222943> \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Unless you have **Bot Addition Filter on joinGate enabled, you should not turn this off!**           ' },
           { name: '<:rightSort:809165006477459507> Role', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!s @role ?add 5` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This role will be given after completing verification and you can have up to 5 ' },
           { name: '<:rightSort:809165006477459507> Duration', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!v X ?set 5` where `X` is the period you want in 1s, 1m or 1h format \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `30s < X < 1h` ' },

           { name: '<:console:809527649889812551> Dashboard', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can also change verification settings through the **[dashboard](https://wickbot.com/dashboard)**' },

        )
        .setImage('https://media.discordapp.net/attachments/753161435520958477/809624126535893024/unknown.png')
      
    
    message.channel.send(exampleEmbed);
    },
};