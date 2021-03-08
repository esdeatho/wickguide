const Discord = require('discord.js');

module.exports = {
    name: 'owner', // The name of the command
    description: 'im owner', // The description of the command (for help text)
    aliases: ['o'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
         .setTitle('Im Owner')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
      //  .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')

        .addFields(
            { name: '<:rightSort:809165006477459507> Permits', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You are not the **physical owner** of the server *(the person with the crown <:owner:809530582714941520>)* \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> ask the physical owner to give you **Extra Owner** permits by using the command `w!s @user ?add 11`' },

        )
        
      
    message.channel.send(exampleEmbed);
    },
};