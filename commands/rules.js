const Discord = require('discord.js');

module.exports = {
    name: 'rules', // The name of the command
    description: 'Wick Lounge rules', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
     .addFields(
         {name:'<:docs:818565890021785600> Rules',value:'<:blank:809168046052474881> <:adv:824002198245212160> **No Advertising**\n<:blank:809168046052474881> <:nsfw:824713357851361341> **No NSFW of any kind**\n<:blank:809168046052474881> <:user:812027437915439144> **Respect the staff and the other members**\n<:blank:809168046052474881> <:Mute:817089217016496168> **Any type of harassment will result in a permanent ban**\n<:blank:809168046052474881> <:an:822172754546655282> **No punishment evading**\n<:blank:809168046052474881> <:verifi:822171507807223848> **Use common sense "but it\'s not in the rules!" is not a valid excuse**\n<:blank:809168046052474881> <:check:809847958878552164> **All members are required to follow the discord ToS** \n<:blank:809168046052474881> <:statics:822174129116676096> **Keep Topics in the appropriate channels**'},
         {name:'<:invites:820002639773171713> Links',value:'<:blank:809168046052474881> <:whitelist:809528328930197554> [**Wick\'s ToS**](https://wickbot.com/tos) *`[https://wickbot.com/tos]`*\n<:blank:809168046052474881> <:whitelist:809528328930197554> [**Wick\'s Privacy Policy**](https://wickbot.com/privacy) *`[https://wickbot.com/privacy]`*\n<:blank:809168046052474881> <:whitelist:809528328930197554> [**Discord Guidelines**](https://discordapp.com/guidelines) *`[https://discord.com/guidelines]`*\n<:blank:809168046052474881> <:whitelist:809528328930197554> [**Discord Terms**](https://discordapp.com/terms) *`[https://discord.com/terms]`*'}
     )
     
    //Follow Wick\'s ToS: https://wickbot.com/tos
    //https://discordapp.com/guidelines
    //https://discordapp.com/terms')
        
    
    message.channel.send(exampleEmbed);
    },
};
