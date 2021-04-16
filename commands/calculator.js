  
 const math = require('mathjs');

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "calculate",
    aliases: ['calc','hc'],
    description: "Get the answer to a math problem",


    execute: async function (message, args, Discord) {

        if(!args[0])  return message.channel.send({
            embed: {
                color:'#ff1a2a',
                title:`${message.member.displayName}, an error happened!`,
                description:`<:owner:809530582714941520> **Executed by:** \`${message.author.tag}\` \n<:verified:823679412331347969> **Valid calculation:** <:fail:809847979368120470> \n<:blank:809168046052474881> <:rightSort:809165006477459507> Please provide a valid calculation`,
                thumbnail: {
                    url:'https://images-ext-2.discordapp.net/external/a-aGfSRGdJcx_pHzHaY7NEwpH3Y6BhJDPXJghP5cnNI/https/i.imgur.com/RgO2vAV.png'
                }
            }
        });

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send({
                embed: {
                    color:'#ff1a2a',
                    title:`${message.member.displayName}, an error happened!`,
                    description:`<:owner:809530582714941520> **Executed by:** \`${message.author.tag}\` \n<:verified:823679412331347969> **Valid calculation:** <:fail:809847979368120470> \n<:blank:809168046052474881> <:rightSort:809165006477459507> Please provide a valid calculation`,
                    thumbnail: {
                        url:'https://images-ext-2.discordapp.net/external/a-aGfSRGdJcx_pHzHaY7NEwpH3Y6BhJDPXJghP5cnNI/https/i.imgur.com/RgO2vAV.png'
                    }
                }
            })// ('Please provide a **valid** question')
        }

        const embed = new MessageEmbed()
        .setColor('#36393f')
        .addField(`<:invites:820002639773171713> Info`,`
        <:blank:809168046052474881> <:owner:809530582714941520> **Executed by:** \`${message.author.tag}\`\n<:blank:809168046052474881> <:verified:823679412331347969> **Valid calculation:** <:check:809847958878552164>`)
         // .setTitle('Calculator')
        .addField('<:joinraid:816722693230559304> Input', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('<:console:809527649889812551> Result', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}