const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'afk', // The name of the command
    description: 'afk', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
   execute: async function (message, args, Discord) {
        if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {

    const status = new db.table("AFKs");
    let afkFetch = await status.fetch(message.author.id);
    const embed = new MessageEmbed().setColor('#36393f')
    db.set(`${message.author.id}-afkSet`, Date.now());
 
    if (!afkFetch) {

        //embed.setTitle(`**${message.author.tag}** now afk.`)
        embed.setDescription(`<:check:809847958878552164> ${message.author}, You are now **AFK.**\n<:statics:822174129116676096> Members, upon pinging you will be notified of it!\n<:docs:818565890021785600> **Reason:** ${args.join(" ") ? args.join(" ") : "<:fail:809847979368120470> **[Not stated]**"}`)
        embed.setColor('#36393f')
        //  embed.setThumbnail(`https://media.discordapp.net/attachments/739760105431760978/792293033189179392/ezgif.com-gif-maker_2.gif`)
        status.set(message.author.id, args.join(" ") || "<:fail:809847979368120470> **[Not stated]**");
    } else {
        embed.setColor('#36393f')
        embed.setDescription(`How good to see you again so soon, Mr. ${message.member.displayName}`);
        status.delete(message.author.id);
    }

    message.channel.send(embed)
}else {
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