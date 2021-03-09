const Discord = require('discord.js');

module.exports = {
    name: 'webhook', 
    description: 'Webhook',
    args: false, 
    aliases: ['web'],
    usage: '', 
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('How to whitelist a Webhook')

        .addFields(
            { name: '<:rightSort:809165006477459507> First Method', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **1.** Go to the webhook\'s page (Server Settings -> Webhooks <:blank:809168046052474881><:blank:809168046052474881><:blank:809168046052474881>Click on the **edit** button of the specific webhook) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **2.** **Copy** Webhook UrL \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **3.** Only copy the ID part: `https://discord.com/api/webhooks`**606416669234324480**`/uIolZIDed1yw9GLSjOwgg2biTPliUGLqsdqd83IlqksdqdscJFrEVnzrBa8A7` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **4.** Use the ID to whitelist \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist ID ?add X` where `ID` is the webhook ID you now have and `X` is the type of whitelist you want to target ' },

           { name: '<:rightSort:809165006477459507>  Second Method', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **1.** Make sure the webhook has a unique name (no channel/role/user would have a matching name). Like a webhook named **Memes Webhook** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **2)** Use the name. `w!whitelist Webhook-name ?add X` where `X` is the type of whitelist.' },
 
           { name: '<:rightSort:809165006477459507>  Third Method', value: '<:blank:809168046052474881> <:console:809527649889812551> **[Dashboard](https://wickbot.com/dashboard)** ' },
 

        )
        .setImage('https://media.discordapp.net/attachments/753161435520958477/809538755652223026/unknown.png')

    
    message.channel.send(exampleEmbed);
    },
};