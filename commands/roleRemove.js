const { MessageEmbed } = require('discord.js');

module.exports = {
 name: 'drole',
 aliases:["dr"],
 execute(message, args, Discord) {
    if(!message.member.roles.cache.find(r => r.name === "Changes")) {
        return message.channel.send({
            embed: {
                color:'#ff1a2a',
                title:`${message.member.displayName}, an error happened!`,
                description:`<:owner:809530582714941520> Exectued By: \`${message.author.tag}\` \n<:fail:809847979368120470> You already don\'t have the role`
            }
        }); // (`Yay, the author of the message has the role!`);
      } else {

            message.channel.send({
                embed:{
                    color:'#36393f',
                    description:`<:owner:809530582714941520> Exectued By: \`${message.author.tag}\` \n<:fail:809847979368120470> <@&829794246163824671> Role Removed \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> To add the role use \`!arole\``
                }
            })
            let member = message.member;
              let role = message.guild.roles.cache.find(r => r.name === "Changes");
              member.roles.remove(role).catch(console.error);
        }}
    }
