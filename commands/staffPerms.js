const Discord = require('discord.js');

module.exports = {
    name: 'staffperms', // The name of the command
    description: 'what this bots about', // The description of the command (for help text)
    aliases: ['sp'],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Staff Permsssions')
       
     //   .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
   
        .addFields(
            {name:'<:danger:809528345981222943> Extra owners',value:'<:blank:809168046052474881> <:owner:809530582714941520> Extra Owners are Server Owners\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> They can do anything the actual owner with the crown <:owner:809530582714941520> can do\n<:blank:809168046052474881> <:fail:809847979368120470> The only thing extra owners can not do is add other extra owners\n<:alarm:809533151277613077> Extra Owners are immune to wick'},
            {name:'<:danger:809528345981222943> Trusted Admins',value:'<:blank:809168046052474881> <:an:822172754546655282> Unquarantine members\n<:blank:809168046052474881> <:an:822172754546655282> Quarantine members\n<:blank:809168046052474881> <:whitelist:809528328930197554> Change whitelist settings\n<:blank:809168046052474881> <:statics:822174129116676096> Change statics (some) settings\n<:blank:809168046052474881> <:nsfw:824713357851361341> Lockdown the server\n<:blank:809168046052474881> <:automod:822177843517325383> Everything the Moderator/Admin statics can do\n<:blank:809168046052474881> <:verifi:822171507807223848> Change verification settings\n<:blank:809168046052474881> <:Mute:817089217016496168> Change heat filters\n<:blank:809168046052474881> <:kick:817089443470770206> Change join gate settings\n<:blank:809168046052474881> <:premium:809589966153711707> <:joinraid:816722693230559304> Change join raid settings\n<:alarm:809533151277613077> Trusted Admins are immune to wick'},
            {name:'<:ban:810254366203314268> Admins',value:'<:blank:809168046052474881> <:ban:810254366203314268> Ban members\n<:blank:809168046052474881> <:delete:818584313837649930> Purge messages\n<:blank:809168046052474881> <:check:809847958878552164> Unban members\n<:blank:809168046052474881> <:automod:822177843517325383> Everything moderators can do'},
            {name:'<:kick:817089443470770206> Moderators', value:'<:blank:809168046052474881> <:kick:817089443470770206> Kick members\n<:blank:809168046052474881> <:Mute:817089217016496168> Mute/unmute members\n<:blank:809168046052474881> <:warn:812019922435440670> Warn members\n<:blank:809168046052474881> <:invites:820002639773171713> Use the activity command *`[w!activity]`*\n<:blank:809168046052474881> <:dsh:809525643627724801> View & edit cases\n<:blank:809168046052474881> <:docs:818565890021785600> View info of other users'}
          

        )
        
    
    message.channel.send(exampleEmbed);
    },
};

