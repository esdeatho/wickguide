const Discord = require('discord.js');

module.exports = {
    name: 'prefix', // The name of the command
    description: 'Prefix', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Prefix')
    
        .addFields(
            { name: '<:rightSort:809165006477459507> Default', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!` ' },
            { name: '<:rightSort:809165006477459507> New Prefix', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 1` where `X` is your new prefix \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> **Example:** `w!misc . ?set 1`' },


        )

    message.channel.send(exampleEmbed);
    },
};