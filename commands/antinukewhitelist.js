const Discord = require('discord.js');

module.exports = {
    name: 'anw', // The name of the command
    description: 'Anti-Nuke Whitelist', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('AntiNuke Whitelist')
      
        .addFields(
            { name: '<:rightSort:809165006477459507> Free', value: 'The only ways you can whitelist a user from Wick’s anti-nuke are \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Adding them as an extra owner `w!s @user ?add 11` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Adding them as an trusted admin `w!s @user ?add 10` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Moving them above wick ' },
             {name: '<:danger:809528345981222943> Disclaimer', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All things mentioned above are highly dangerous and make them immune to wick,  especially moving them above wick since they can kick the bot '},
            {name: '<:premium:809589966153711707> Premium' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!anp category ID ?add 6` This will let people/bots make channels or delete channels in a specific category, ideal for ticket bots'}
      
            )
   
    message.channel.send(exampleEmbed);
    },
};