const Discord = require('discord.js');

module.exports = {
    name: 'channel', // The name of the command
    description: 'Channel Perms', // The description of the command (for help text)
    aliases: ['ch'],
    args: false, // Specified that this command doesn't need any data other than the command
    
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Channel perms')
    
        .addFields(
            { name: 'Muted', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This means that the user has a certain role that is forced to **send messages** which makes the <@&536289928913616906> (and <@&538362437288853504>) role not work properly. \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Make sure the @everyone role has **neutral** <:neutral:809847927660216331> stance when it comes to Read Messages and Send Messages. *do the same with any other role.*  ' },

            {name: '<:danger:809528345981222943> Notice' , value:'You should never force a role to see or send messages (unless it\'s a private channel)'}
        )
        
       
       .setImage('https://media.discordapp.net/attachments/536288784422141988/773218379393007636/unknown.png')

    
    message.channel.send(exampleEmbed);
    },
};