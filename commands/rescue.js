const Discord = require('discord.js');

module.exports = {
    name: 'rescue', // The name of the command
    description: 'How to use rescue key', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Rescue Key')
   
        .addFields(
            { name: '<:rightSort:809165006477459507> What is a rescue key and what is it used for?', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> As soon as Wick is added to a server, it will dm the server owner (the account with the crown <:owner:809530582714941520> ) with a message containing important information. The welcoming message refers to many things you should be aware of, the most important being the **RESCUE KEY**' },
           // { name: '\u200B', value: '\u200B' },
           { name: '<:rightSort:809165006477459507>  Rescue Key', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The rescue key is used when you no longer have access to the owner account and you can no longer control Wick. **Keep the rescue key safe and do NOT share it!**' },
      
           { name: '<:rightSort:809165006477459507>  Usage', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The rescue key can be activated by DMing <@!196672168388591616> with it to regain **WICK OWNERSHIP** in your server, if you are unable to log into your main account. \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Fnaki, upon receiving the key, will validate it at once and if proven to be correct, will give you your wick owner permit level in your server.  ' },
           
           { name: '<:rightSort:809165006477459507>  <:alarm:809533151277613077> Notice', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Please note that we\'re unable to use screenshots, bot logs, attachments, or by any other means that does not include wick rescue keys to verify you as the aforementioned screenshots, logs etc can be forged with great ease.' },
           { name: 'Rescue Key:', value: '<:rescueKey:809851939529424937> ||your-key-here|| *[click to show]*' },


        )
   
    
    message.channel.send(exampleEmbed);
    },
};