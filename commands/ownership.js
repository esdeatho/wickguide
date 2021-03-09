const Discord = require('discord.js');

module.exports = {
    name: 'ownership', // The name of the command
    description: 'Transfer Ownership', // The description of the command (for help text)
    aliases: ['to'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Transfer Ownership')
        .setURL('https://support.discord.com/hc/en-us/requests/new')

        .addFields(
            { name: '<:owner:809530582714941520> Ownership', value: 'You can request the transfer of the ownership by e-mailing `support@discordapp.com` explaining your issue and adding the following details: \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Server Name \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Server ID \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Inactive owner\'s Discord Tag \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Inactive owner\'s User ID \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> New owner\'s Discord Tag \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> New owner\'s User ID' },

        )
        

    message.channel.send(exampleEmbed);
    },
};