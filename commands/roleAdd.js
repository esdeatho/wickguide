const { MessageEmbed } = require('discord.js');

module.exports = {
 name: 'arole',
 aliases:["cl","ar"],
 execute(message, args, Discord) {

    if(message.member.roles.cache.find(r => r.name === "Changes")) {
        return message.channel.send({
            embed: {
                color:'#ff1a2a',
                title:`${message.member.displayName}, an error happened!`,
                description:`<:owner:809530582714941520> Exectued By: \`${message.author.tag}\` \n<:fail:809847979368120470> You already have the role`
            }
        }); // (`Yay, the author of the message has the role!`);
      } else {
        
      
            message.channel.send({
                embed:{
                    color:'#36393f',
                    description:`<:owner:809530582714941520> Exectued By: \`${message.author.tag}\` \n<:check:809847958878552164> <@&829794246163824671> Role Given\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> To remove the role use \`!drole\``
                }
            })
            let member = message.member;
              let role = message.guild.roles.cache.find(r => r.name === "Changes");
            member.roles.add(role).catch(console.error);
        }}}


 