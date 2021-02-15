const Discord = require('discord.js');

module.exports = {
    name: 'permits', // The name of the command
    description: 'Permits', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Permits')
        .setURL('https://discordapp.com/channels/536277067310956565/536288784422141988/798665200928686100')
 
        .addFields(
            { name: '<:rightSort:809165006477459507> Permit 5 <:danger:809528345981222943>', value: '`Server Owner and Extra Owners` \n \u200B \n <:rightsmall:809587446182445086> To add an extra owner, do `w!s extraOwner ?add 11` where `extraOwner` is the `actual username of the user` you want to add **extra owners are immune to wick** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ex.** if a user is named `fnAki` use the command `w!s fnaki ?add 11` to set them as a extra owner' },
           // { name: '\u200B', value: '\u200B' },
            { name: '<:rightSort:809165006477459507> Permit 4 <:danger:809528345981222943>', value: '`Trusted Admins` \n \u200B \n <:rightsmall:809587446182445086> To add a trusted admin, do `w!s trustedAdmin ?add 10` where `trustedAdmin` is the `actual username of the user` you want to add **trusted admins are immune to wick** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ex.** if a user is named `fnAki` use the command `w!s fnaki ?add 10` to set them as a trusted admin'},
           //  { name: '\u200B', value: '\u200B' },
            { name: '<:rightSort:809165006477459507> Permit 3', value: ' `Admins` \n \u200B \n <:rightsmall:809587446182445086>  Make a role for your admins and then do w!s AdminRole ?add 3 where `AdminRole` is the `actual name of the role` you made.**admins are immune to spam** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ex.** if a role called `admin` is the name of your admin role, use the command `w!s admins ?add 3` to set admins as a wick admin role'},
           // { name: '\u200B', value: '\u200B' },
            { name: '<:rightSort:809165006477459507> Permit 2', value: '`Moderators` \n \u200B \n <:rightsmall:809587446182445086> Make a role for your mods and then do `w!s ModRole ?add 4` where `ModeratorRole` is the `actual name of the role` you made. **admins/mods are immune to spam** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ex.** if a role called `mods` is the name of your moderator role, use the command `w!s mods ?add 4` to set Mods as a wick moderator role'},
            { name: '<:console:809527649889812551> Dashboard', value: 'you can also add your permits through the **[dashboard](https://wickbot.com/dashboard)**'},

        )
        .setImage('https://i.imgur.com/AX3GY2E.png')
        
 
    
    message.channel.send(exampleEmbed);

    },
};