const Discord = require('discord.js');

module.exports = {
    name: 'sweep', // The name of the command
    description: 'Server Sweep', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
  
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Server Sweep')
        .setURL('https://wickbot.com/dashboard')

        .addFields(
            { name: '<:console:809527649889812551> Sweep', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Want to see how safe your server really is? Head over to the **[Dashboard](https://wickbot.com/dashboard)** and click magnify icon to have wick sweep your server' },

        )
   
       .setImage('https://cdn.discordapp.com/attachments/809410819803709447/809861172068352000/a.gif')
    
    
    message.channel.send(exampleEmbed);
    },
};