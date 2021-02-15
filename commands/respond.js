const Discord = require('discord.js');

module.exports = {
    name: 'respond', // The name of the command
    description: 'Wick not responding', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Is wick not responding to your commands?')
     
        .addFields(
            { name: '<:rightSort:809165006477459507> Muted / Quarantine', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Check if you have the <@&538362437288853504> / <@&536289928913616906> role. *Wick does not respond to people with the muted or quarantine role*' },
            { name: '<:rightSort:809165006477459507> I dont have them on me', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Ask one of your fellow server users to type `w!ping` or any other wick command. If wick responds to them, you most likely have your Quarantined / Muted role on you.' },
            { name: '<:rightSort:809165006477459507> No Im server owner', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Wick does not care if your the server owner if you have those roles on you it will not respond' },
            { name: '<:rightSort:809165006477459507> Status', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Is wick even working? Check the **[status](https://wickbot.com/status)**' },
            { name: '<:rightSort:809165006477459507> Prefix', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Try to recall what you set as your new prefix as. You can\'t? Login into the **[Dashboard](https://wickbot.com/dashboard)** and head over to the miscellaneous tab' },


        )
        .setImage('https://media.discordapp.net/attachments/753161435520958477/809546626925854730/unknown.png')
    
    
    message.channel.send(exampleEmbed);
    },
};