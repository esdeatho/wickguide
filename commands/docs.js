const Discord = require('discord.js');

module.exports = {
    name: 'docs', // The name of the command
    description: 'docs', // The description of the command (for help text)
    aliases: ['doc','docs','d'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
       .setTitle('Docs')
       .setDescription('<:check:809847958878552164> [**Setup**](https://wickbot.com/docs/setup) *`https://wickbot.com/docs/setup`* \n<:bot:812027101493460992> [**Add**](https://wickbot.com/docs/setup#0_AddWick) *`https://wickbot.com/docs/setup#0_AddWick`* \n<:docs:818565890021785600> [**Sort Roles**](https://wickbot.com/docs/setup#3_SortWickRole) *`https://wickbot.com/docs/setup#3_SortWickRole`* \n<:statics:822174129116676096> [**Statics**](https://wickbot.com/docs/setup#4_Statics) *`https://wickbot.com/docs/setup#4_Statics`* \n<:whitelist:809528328930197554> [**Whitelist**](https://wickbot.com/docs/setup#8_Whitelist) *`https://wickbot.com/docs/setup#8_Whitelist`* \n<:an:822172754546655282> [**AntiNuke**](https://wickbot.com/docs/setup#14_AntiNuke) *`https://wickbot.com/docs/setup#14_AntiNuke`* \n<:kick:817089443470770206> [**Joingate**](https://wickbot.com/docs/setup#20_JoinGate) *`https://wickbot.com/docs/setup#20_JoinGate`* \n<:joinraid:816722693230559304> [**Joinraid**](https://wickbot.com/docs/setup#27_JoinRaid) *`https://wickbot.com/docs/setup#27_JoinRaid`* \n<:verifi:822171507807223848> [**Verification**](https://wickbot.com/docs/setup#28_Verification) *`https://wickbot.com/docs/setup#28_Verification`* \n<:automod:822177843517325383> [**Automod**](https://wickbot.com/docs/setup#29_HeatSystem) *`https://wickbot.com/docs/setup#29_HeatSystem`* \n<:console:809527649889812551> [**SetupCommand**](https://wickbot.com/docs/setup#32_SetupCommand) *`https://wickbot.com/docs/setup#32_SetupCommand`* \n<:Mute:817089217016496168> [**M + Q**](https://wickbot.com/docs/setup#34_Misc) *`https://wickbot.com/docs/setup#33_placeMQ`* \n<:dsh:809525643627724801> [**Tips**](https://wickbot.com/docs/setup#35_FinalTips) *`https://wickbot.com/docs/setup#35_FinalTips`* \n<:blank:809168046052474881> <:notnewbutyeahfreenow:817474716080144395> [**Dashboard**](https://wickbot.com/dashboard) *`https://wickbot.com/dashboard`*') //\n<:blank:809168046052474881> <:notnewbutyeahfreenow:817474716080144395> [**Dashboard**](https://wickbot.com/dashboard) *`https://wickbot.com/dashboard`*
      // .setFooter('https://wickbot.com/dashboard')
        
    
    message.channel.send(exampleEmbed);
    },
};