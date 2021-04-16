const { MessageEmbed } = require('discord.js');

module.exports = {
 name: 'bug', // The name of the command
 description: 'what this bots about', // The description of the command (for help text)
 // aliases: ['ab'],
 args: false, // Specified that this command doesn't need any data other than the command
 usage: '', // Help text to explain how to use the command (if it had any arguments)
 // aliases: 's',

 execute: async function (message, args, Discord) {

  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

  const suggestionQuery = args.join(" ");
  if (!suggestionQuery) return message.channel.send({
   embed: {
    color: '#36393f',
    title: `<:fail:809847979368120470> ${message.member.displayName}, wrong syntax use!`,
    description: ':blank~1: :rightDoubleArrow: Please make sure to suggest something along with the command. An example is given below',
    image: {
     url: 'https://images-ext-1.discordapp.net/external/AdMODsTEVJpfgQzWAzJ_-SCldmDgCc3bEUyccYkKWFc/https/media.discordapp.net/attachments/753161435520958477/828894702908604416/unknown.png'
    }
   }
  });

  const embed = new MessageEmbed()
   .setTitle(`Bug report by ${message.author.tag}`)
   .setColor('#36393f')
   .setDescription(`<:docs:818565890021785600> ${suggestionQuery}`)
   .setTimestamp(Date.now())
   .setThumbnail(member.user.displayAvatarURL({ dynamic: false, size: 64 }))
   .addField(":rightSort: Status:", ":blank~1: :statics: This bug still needs to be tested");


  message.guild.channels.cache.get("699954781980065813").send(embed)
   .then(m => {
    message.channel.send({
     embed: {
      color: '#36393f',
      description: `**<:check:809847958878552164> [Bug submitted](${m.url})**`
     }
    }); m.react('809847958878552164')
    m.react('809847979368120470');
   });

 },
};