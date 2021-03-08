const Discord = require('discord.js');

module.exports = {
    name: 'whitelist', // The name of the command
    description: 'Whitelist', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    aliases: ['w'],
    execute(message, args) {

        if (args[0] == "?t") {
            // parameters 
            if (args[1] == "1") {
               
                message.channel.send({
                    embed: {
                        color:'#36393f',
                      title:'Spam Whitelist',
                      fields: [
                          {name:'<:rightSort:809165006477459507> Member',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @member ?add 1`'},
                          {name:'<:rightSort:809165006477459507> Channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist #channel ?add 1`'},
                          {name:'<:rightSort:809165006477459507> Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @role ?add 1`'},
                          {name:'<:rightSort:809165006477459507> Category',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist category-id ?add 1`'},
                          {name:'<:rightSort:809165006477459507> Webhook',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist webhook-id ?add 1`'}
                        ] 
                 }
                })
            }
            if (args[1] == "2") {
               
                message.channel.send({
                    embed: {
                        color:'#36393f',
                      title:'Ping Whitelist',
                      fields: [
                          {name:'<:rightSort:809165006477459507> Member',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @member ?add 2`'},
                          {name:'<:rightSort:809165006477459507> Channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist #channel ?add 2`'},
                          {name:'<:rightSort:809165006477459507> Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @role ?add 2`'},
                          {name:'<:rightSort:809165006477459507> Category',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist category-id ?add 2`'},
                          {name:'<:rightSort:809165006477459507> Webhook',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist webhook-id ?add 2`'}
                        ] 
                 }
                })
            }
            if (args[1] == "3") {
               
                message.channel.send({
                    embed: {
                        color:'#36393f',
                      title:'Advert Whitelist',
                      fields: [
                          {name:'<:rightSort:809165006477459507> Member',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @member ?add 3`'},
                          {name:'<:rightSort:809165006477459507> Channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist #channel ?add 3`'},
                          {name:'<:rightSort:809165006477459507> Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @role ?add 3`'},
                          {name:'<:rightSort:809165006477459507> Category',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist category-id ?add 3`'},
                          {name:'<:rightSort:809165006477459507> Webhook',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist webhook-id ?add 3`'}
                        ] 
                 }
                })
            }
            if (args[1] == "4") {
               
                message.channel.send({
                    embed: {
                        color:'#36393f',
                      title:'Qurantine Whitelist',
                      description:'<:danger:809528345981222943> **People who are Quarantine-Whitelisted will never be punished when taking the Quarantine role from someone, or adding any role to someone quarantined**',
                      fields: [
                          {name:'<:rightSort:809165006477459507> Member',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @member ?add 4`'},
                        ] 
                 }
                })
            }
            if (args[1] == "5") {
               
                message.channel.send({
                    embed: {
                        color:'#36393f',
                      title:'Mentioning Public Role Whitelist',
                      fields: [
                          {name:'<:rightSort:809165006477459507> Member',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @member ?add 5`'},
                          {name:'<:rightSort:809165006477459507> Channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist #channel ?add 5`'},
                          {name:'<:rightSort:809165006477459507> Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist @role ?add 5`'},
                          {name:'<:rightSort:809165006477459507> Category',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist category-id ?add 5`'},
                          {name:'<:rightSort:809165006477459507> Webhook',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!whitelist webhook-id ?add 5`'}
                        ] 
                 }
                })
            }
            }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Whitelist')
        .setURL('https://docs.wickbot.com/v3/setup/katemoon#11-whitelist-people')
     //   .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
      //  .setDescription('Some description here')
      //  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: '<:rightSort:809165006477459507> Spam <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 1` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 1` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 1` \n   <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 1` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 1`' },
           // { name: '\u200B', value: '\u200B' },
           {name: '<:rightSort:809165006477459507> Ping <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 2` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 2` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 2` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 2` \n  <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 2`'},
            // { name: '\u200B', value: '\u200B' },
           {name: '<:rightSort:809165006477459507> Advert <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 3` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 3` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 3` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 3` \n  <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 3`'},
            // { name: '\u200B', value: '\u200B' },
            {name: '<:rightSort:809165006477459507> Quarantine <:whitelist:809528328930197554> <:danger:809528345981222943> ', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 4`'},
            // { name: '\u200B', value: '\u200B' },
            {name: '<:rightSort:809165006477459507> @here/@everyone <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 5` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 5` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 5` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 5` \n  <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 5`'},
            // { name: '\u200B', value: '\u200B' },
            {name: '<:console:809527649889812551> Dashboard', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>You can also change your whitelist through the **[dashboard](https://wickbot.com/dashboard)**'},

        )
        .setImage('https://cdn.discordapp.com/attachments/753161435520958477/809523312547069982/unknown.png')
         //.setImage('https://i.imgur.com/AX3GY2E.png')
        
        //.addField('Inline field title', 'Some value here', true)
         // .setImage('https://i.imgur.com/wSTFkRM.png')
        //.setTimestamp()
       // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
       if (!args[0]) message.channel.send(exampleEmbed);
   // message.channel.send(exampleEmbed);
    },
};