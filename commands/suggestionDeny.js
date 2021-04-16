const { MessageEmbed } = require('discord.js');

module.exports = {
 name: 'denysuggestion', // The name of the command
 description: 'what this bots about', // The description of the command (for help text)
 aliases: ['ds'],
 args: false, // Specified that this command doesn't need any data other than the command
 usage: '', // Help text to explain how to use the command (if it had any arguments)
 // aliases: 's',
 execute: async function (message, args, Discord) {
  if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {

   const messageID = args[0];
   const acceptQuery = args.slice(1).join(" ");

   if (!messageID) return message.channel.send({
    embed: {
     color: '#36393f',
     description: '<:fail:809847979368120470> Specify a message ID'
    }
   });
   if (!acceptQuery) return message.channel.send({
    embed: {
     color: '#36393f',
     description: '<:fail:809847979368120470> Specify a reason'
    }
   });

   try {
    const suggestionChannel = message.guild.channels.cache.get("699741304904614018");

    const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
    // console.log(suggestedEmbed);
    const data = suggestedEmbed.embeds[0];
    const acceptEmbed = new MessageEmbed()
     .setTitle(data.title)
     .setDescription(data.description)
     .setColor('#ff1a2a')
     .setTimestamp(Date.now())
     .setThumbnail(suggestedEmbed.embeds[0].thumbnail.url)
     .addField("<:rightSort:809165006477459507> Status:", "<:blank:809168046052474881> <:fail:809847979368120470> This suggestion has been denied!")
     .addField(`<:noav:812028455625293834> Staff Answer (${message.author.tag}):`, `<:blank:809168046052474881> ${acceptQuery}`)
    suggestedEmbed.edit(acceptEmbed);
   } catch (err) {
    message.channel.send({
     embed: {
      color: '#36393f',
      description: '<:fail:809847979368120470> That suggestion does not exist'
     }
    });
   }
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