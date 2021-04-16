const Discord = require('discord.js')
const ms = require('ms');
module.exports = {
    name: 'remind',
    description:'set a reminder',
    execute: async function (message, args, Discord) {
        if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {
        let time = args[0]

        if(!time) {
            return message.channel.send({
                embed:  {
                    color:'#36393f',
                    //  title:`${message.member.displayName}, an error happened!`,
                    description:'<:check:809847958878552164> Successful Reminders `0`\n<:fail:809847979368120470> Unsuccessful Reminders `1`',
                }
            }) // ('What should i remind you about')
        }

        const reminder = args.slice(1).join(" ").trim()
        
        if (reminder) {
            if (!args[1]) {
                return message.channel.send({
                    embed: {
                        color:'#36393f',
                        //  title:`${message.member.displayName}, an error happened!`,
                        description:'<:check:809847958878552164> Successful Reminders `0`\n<:fail:809847979368120470> Unsuccessful Reminders `1`',
                    }
                })
            }
        
        message.channel.send({
            embed:{
                color:'#36393f',
                description:`<:check:809847958878552164> Successful Reminders \`1\`\n<:fail:809847979368120470> Unsuccessful Reminders \`0\`\n<:docs:818565890021785600> Reason: \`${reminder}\`\n<:duration:824345758664097792> Duration: \`${time}\``,

            }
        })

        setTimeout(function (){
            message.channel.send(`${message.author} ${reminder}`)
        }, ms(time));
    }
} else {
    message.channel.send({
     embed: {
      color: '#ff1a2a',
      title: 'You can\'t use this command!',
      description: '<:fail:809847979368120470> Only **Team Members** can use this command\n<:blank:809168046052474881> <:rightSort:809165006477459507> Your permit level is: `1` (**Regular Member**)'
     }
    })
   }}
}