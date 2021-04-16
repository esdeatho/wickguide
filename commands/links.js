const Discord = require('discord.js');

module.exports = {
    name: 'links', // The name of the command
    description: 'important links', // The description of the command (for help text)
    aliases: ['li','link','l'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
       .setTitle('Links')
       .setDescription('<:console:809527649889812551> [**Dashboard**](https://wickbot.com/dashboard) *`https://wickbot.com/dashboard`* \n<:premium:809589966153711707> [**Premium**](https://wickbot.com/premium) *`https://wickbot.com/premium`*\n<:wickVip:818563609550389309> [**Vip**](https://r.wickbot.us/viplist) *`https://r.wickbot.us/viplist`* \n<:wickBugHunter:818565622010347540> [**Troubleshoot**](https://docs.wickbot.com/v3/troubleshooting) *`https://r.wickbot.us/tshoot`* \n<:docs:818565890021785600> [**Docs**](https://docs.wickbot.com/) *`https://r.wickbot.us/docs`* \n<:dsh:809525643627724801> [**Website**](https://wickbot.com/) *`https://wickbot.com/`* \n<:dsh:809525643627724801> [**Setup**](https://wickbot.com/docs/setup) *`https://wickbot.com/docs/setup`* \n<:dsh:809525643627724801> [**Status**](https://wickbot.com/status) *`https://wickbot.com/status`*')
        
    
    message.channel.send(exampleEmbed);
    },
};