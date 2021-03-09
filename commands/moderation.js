//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'moderation',
    description: 'moderation',
    aliases: ['mod'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        if (args[0] == "?t") {
            // parameters 
            if (args[1] == "b") {
            message.channel.send({
                embed: {
                    color:'#36393f',
                    title:'Ban',
                    fields: [
                        {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?t` time \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?h` ban users that are not in your server \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to ban with a briefing on why they got banned \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?soft` ban the member then instantly unban'},
                        {name:'<:rightSort:809165006477459507> Example' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!b @icey ?r cute ?dm ?soft` '}
                    ]
                }
            })
            }
            if (args[1] == "k") {
                message.channel.send({
                    embed: {
                        color:'#36393f',
                        title:'Kick',
                        fields: [
                            {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to kick with a briefing on why they got kicked'},
                            {name:'<:rightSort:809165006477459507> Example' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!k @icey ?r cute ?dm`'}
                        ]
                    }
                })
                }
                if (args[1] == "m") {
                    message.channel.send({
                        embed: {
                            color:'#36393f',
                            title:'Mute',
                            fields: [
                                {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?t` time \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?h` mute users that are not in your server \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to mute with a briefing on why they got muted'},
                                {name:'<:rightSort:809165006477459507> Example' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!m @icey ?r cute ?dm`'}
                            ]
                        }
                    })
                    }
                    if (args[1] == "p") {
                        message.channel.send({
                            embed: {
                                color:'#36393f',
                                title:'Purge',
                                fields: [
                                    {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `suspicious / s` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `bots / b` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `users / u` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `webhooks / w` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `noavatar / na` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `norole / nr` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `embeds / e` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `discord / system` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `links / l` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `files / imgs / i / attachments` '},
                                    {name:'<:purge:812024610363146270> Format',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!purge <types> <parameters>`'},
                                    {name:'<:rightSort:809165006477459507> Example' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!purge 10 ?t bots`'}
                                ]
                            }
                        })
                        }
                        if (args[1] == "c") {
                            message.channel.send({
                                embed: {
                                    color:'#36393f',
                                    title:'Cases',
                                    fields: [
                                        {name:'<:rightSort:809165006477459507> null' , value: 'null'}
                                    ]
                                }
                            })
                            }
                            if (args[1] == "w") {
                                message.channel.send({
                                    embed: {
                                        color:'#36393f',
                                        title:'Warn',
                                        fields: [
                                            {name:'<:rightSort:809165006477459507> Parameters' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>'},
                                            {name:'<:rightSort:809165006477459507> Example ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!warn @user ?r cute`'},
                                            { name: '<:warn:812019922435440670> Clear Warn', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!cases (case ID) ?e ?off` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `case ID` can be found in the modlogs. \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can also find a specific user\'s WARN case ID by asking wick directly \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!cases @user ?t warns`' },

                                        ]
                                    }
                                })
                                }
                                if (args[1] == "ub") {
                                    message.channel.send({
                                        embed: {
                                            color:'#36393f',
                                            title:'Unban',
                                            fields: [
                                                {name:'<:rightSort:809165006477459507> Parameters' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>'},
                                                {name:'<:rightSort:809165006477459507> Example ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!unban user ?r cute`'},
    
                                            ]
                                        }
                                    })
                                    }
                                    if (args[1] == "um") {
                                        message.channel.send({
                                            embed: {
                                                color:'#36393f',
                                                title:'Unmute',
                                                fields: [
                                                    {name:'<:rightSort:809165006477459507> Parameters' , value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>'},
                                                    {name:'<:rightSort:809165006477459507> Example ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!unmute user ?r cute`'},
        
                                                ]
                                            }
                                        })
                                        }
            }

        let helpMenu = new Menu(message.channel, message.author.id, [

            {
                /*
                 * A page object consists of three items:
                 * 1) A name. This is used as a unique destination name for reactions.
                 * 2) Some content. This is a rich embed. 
                 * You can use {object: formatting} or .functionFormatting() for embeds. Whichever you prefer.
                 * 3) A set of reactions, linked to either a page destination or a function.* (See example pages)
                 * 
                 * Reactions can be emojis or custom emote IDs, and reaction destinations can be either the names
                 * of pages, () => { functions }, or special destination names. See below for a list of these.
                 */

                /* You can call pages whatever you like. The first in the array is always loaded first. */
                name: 'main',
                content: new MessageEmbed({
                    title: 'Moderation',
                    color: '#36393f',
                    description:'<:ban:810254366203314268> [**Ban**](https://docs.wickbot.com/v3/commands/moderation/ban) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ban @user`\n<:kick:817089443470770206> [**Kick**](https://docs.wickbot.com/v3/commands/moderation/kick) \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!kick @user` \n<:Mute:817089217016496168>  [**Mute**](https://docs.wickbot.com/v3/commands/moderation/mute) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!mute @user` \n<:delete:818584313837649930> [**Purge**](https://docs.wickbot.com/v3/commands/moderation/purge) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!purge 100` \n<:rightSort:809165006477459507> [**Cases**](https://docs.wickbot.com/v3/commands/moderation/cases) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!cases` \n<:rightSort:809165006477459507> [**Warn**](https://docs.wickbot.com/v3/commands/moderation/warn) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!warn @user` \n<:rightSort:809165006477459507> [**Unban**](https://docs.wickbot.com/v3/commands/moderation/unban) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!unban user-id` \n<:rightSort:809165006477459507> [**Unmute**](https://docs.wickbot.com/v3/commands/moderation/unmute) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!unmute user-id`   ',
                     fields:[
                       {name:'<:alarm:809533151277613077> Notice', value:'<:blank:809168046052474881> <:rightSort:809165006477459507> These are just basic commands just to show you some **basic** wick moderation commands. It is **highly** suggested that you read the docs to get the full experience of Wick\'s moderation'}
                    ],
                    footer: {text:'Page: 1/9'}
                }),
                reactions: {
                    '816377788516532275': 'main',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'ban',
                content: new MessageEmbed({
                    title: 'Ban',
                    color: '#36393f',
                    fields:[
                        { name: '<:rightSort:809165006477459507> Parameters', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?t` time \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?h` ban users that are not in your server \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to ban with a briefing on why they got banned \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?soft` ban the member then instantly unban \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!b @icey ?r cute ?dm ?soft` ' },
                    ],
                    footer: {text:'Page: 2/9'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'main',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
        {
            name: 'kick',
            content: new MessageEmbed({
                title: 'Kick',
                color: '#36393f',
                fields:[
                    { name: '<:rightSort:809165006477459507> Parameters', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to kick with a briefing on why they got kicked \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!k @icey ?r cute ?dm` ' },
                ],
                footer: {text:'Page: 3/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },

        {
            name: 'mute',
            content: new MessageEmbed({
                title: 'Mute',
                color: '#36393f',
                fields:[
                    { name: '<:rightSort:809165006477459507> Parameters', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?t` time \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` reason \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?h` mute users that are not in your server \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?dm` dm the member(s) you want to mute with a briefing on why they got muted \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!m @icey ?r cute ?dm` ' },
                ],
                footer: {text:'Page: 4/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },
        {
            name: 'purge',
            content: new MessageEmbed({
                title: 'Purge',
                color: '#36393f',
                fields:[
                    { name: '<:rightSort:809165006477459507> Types', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `suspicious / s` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `bots / b` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `users / u` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `webhooks / w` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `noavatar / na` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `norole / nr` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `embeds / e` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `discord / system` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `links / l` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `files / imgs / i / attachments` ' },
                    {name: '<:purge:812024610363146270> Format' , value : '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!purge <types> <parameters>` \n<:rightSort:809165006477459507> **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!purge 10 ?t bots` '},
                ],
                footer: {text:'Page: 5/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },
        {
            name: 'cases',
            content: new MessageEmbed({
                title: 'Cases',
                color: '#36393f',
                fields:[
                    {name:'<:alarm:809533151277613077> Notice',value:'To fully understand the cases command please read the cases docs since cases has mulitple uses and parameters and way to many to fit in a embed and make it look nice and im lazy :/'}
                ],
                footer: {text:'Page: 6/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },
        {
            name: 'warn',
            content: new MessageEmbed({
                title: 'Warn',
                color: '#36393f',
                fields:[
                    { name: '<:rightSort:809165006477459507> Parameters', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!warn @user ?r cute`' },
                    { name: '<:warn:812019922435440670> Clear Warn', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!cases (case ID) ?e ?off` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `case ID` can be found in the modlogs. \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can also find a specific user\'s WARN case ID by asking wick directly \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!cases @user ?t warns`' },
                ],
                footer: {text:'Page: 7/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },
        {
            name: 'unban',
            content: new MessageEmbed({
                title: 'Unban',
                color: '#36393f',
                fields:[
                   {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!unban user ?r cute`'}
                ],
                footer: {text:'Page: 8/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'next',
                '809847979368120470': 'stop',
            }
        },
        {
            name: 'unmute',
            content: new MessageEmbed({
                title: 'Unmute',
                color: '#36393f',
                fields:[
                    {name:'<:rightSort:809165006477459507> Parameters',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `?r` \n<:rightSort:809165006477459507>  **Example** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!unmute user ?r cute`'}
                ],
                footer: {text:'Page: 9/9'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'previous',
                '809587446182445086': 'unmute',
                '809847979368120470': 'stop',
            }
        }
        
    ], 300000)

        /* Run Menu.start() when you're ready to send the menu in chat.
         * Once sent, the menu will automatically handle everything else.
         */ 
        if (!args[0])(helpMenu.start());
      // console.log(!args[0])
      //  helpMenu.start()

      
        /* The menu also has a singular event you can use for, well, whatever you like.
         * The "pageChange" event fires just before a new page is sent. You can use
         * this to edit pages on the fly, or run some other logic.
         * It's your menu, man, do whatever.
         * 
         * The "destination" is the Page object it's about to change to.
         */
        //helpMenu.on('pageChange', destination => {
          //  destination.content.title = "Hey, " + message.author.username
        
    }
};
