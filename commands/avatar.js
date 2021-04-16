const { MessageEmbed } = require("discord.js")

module.exports = {
 name: 'avatar',
 description: "av",
 aliases: ['av'],
 execute(message, args, Discord) {
  if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

   const newEmbed = new MessageEmbed()
    .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setDescription(`<:rightSort:809165006477459507> **User Tag:** \`${member.user.tag}\`\n<:rightSort:809165006477459507> **User ID:** \`${member.user.id}\``)
    .setColor('#36393f');
   message.channel.send(newEmbed);
  } else {
   message.channel.send({
    embed: {
     color: '#ff1a2a',
     title: 'You can\'t use this command!',
     description: '<:fail:809847979368120470> Only **Team Members** can use this command\n<:blank:809168046052474881> <:rightSort:809165006477459507> Your permit level is: `1` (**Regular Member**)'
    }
   })
  }
 }
}