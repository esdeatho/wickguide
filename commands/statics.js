//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'statics',
    description: 'statics',
    aliases: ['st','static'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        if (args[0] == "?t") {
            // parameters 
            if (args[1] == "r") {
            message.channel.send({
                embed: {
                    title:'Static Roles',
                    color:'#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> [1] Mute',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?set 1` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Wick needs this role to function \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                       {name:'<:rightSort:809165006477459507> [2] Quarantine',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?set 1` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Wick needs this role to function \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                       {name:'<:rightSort:809165006477459507> [3] Admin',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 3` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick admins get `Ban/Kick/Purge/Mute/Warn` perms'},
                       {name:'<:rightSort:809165006477459507> [4] Moderator',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 4` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick admins get `Kick/Mute/Warn` perms'},
                       {name:'<:rightSort:809165006477459507> [5] Main Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 5` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> The main role is given upon completing verification and removed when a user gets muted'},
                    ]
                }
            })
            }
            if (args[1] == "c") {
                message.channel.send({
                    embed: {
                        title:'Static Channels',
                        color:'#36393f',
                        fields:[
                            {name:'<:rightSort:809165006477459507> [6] Logging',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 6` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> This channel is important it lets wick let you know what its doing \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                            {name:'<:rightSort:809165006477459507> [7] Mod Logging',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 7` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> This channel is important it lets wick let you know what your mods are doing \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                            {name:'<:rightSort:809165006477459507> [8] Partnering',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 8` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is used for server partnerships this channel is `Spam/Advert/Ping` whitelisted'},
                            {name:'<:rightSort:809165006477459507> [9] Main channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 9` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is used for inactive heat filter which is a premium feature'},
                            {name:'<:rightSort:809165006477459507> [12] Verification ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 12` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is where wick will send its verification captcha \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick will make one once a new member joins after enabling verification'},
                        ]
                    }
                })
                }
                if (args[1] == "u") {
                    message.channel.send({
                        embed: {
                            title:'Static Members',
                            color:'#36393f',
                            fields:[
                                {name:'<:rightSort:809165006477459507> [10] Trusted Admin',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics user ?add 10` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Trusted Admins are immune to wick'},
                                {name:'<:danger:809528345981222943> Trusted Admins can change', value:'<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Statics \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Joingate \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Joinraid \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Whitelist \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Heat \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Heatfilters'},
                                {name:'<:rightSort:809165006477459507> [11] Extra Owner',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics user ?add 11` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Extra Owners are immune to wick'},
                                {name:'<:danger:809528345981222943> Extra Owners can change', value:'<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Wick treats Extra Owners like the server owner'},
                            ]
                        }
                    })
                    }
                    if (args[1] == "5") {
                        message.channel.send({
                            embed: {
                                title:'Main Role',
                                color:'#36393f',
                                fields:[
                                    {name:'<:rightSort:809165006477459507> [5] Main Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 5` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> The main role is given upon completing verification and removed when a user gets muted'},
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
                    title: 'Statics Roles',
                    color: '#36393f',
                   fields:[
                       {name:'<:rightSort:809165006477459507> [1] Mute',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?set 1` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Wick needs this role to function \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                       {name:'<:rightSort:809165006477459507> [2] Quarantine',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?set 1` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Wick needs this role to function \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                       {name:'<:rightSort:809165006477459507> [3] Admin',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 3` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick admins get `Ban/Kick/Purge/Mute/Warn` perms'},
                       {name:'<:rightSort:809165006477459507> [4] Moderator',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 4` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick admins get `Kick/Mute/Warn` perms'},
                       {name:'<:rightSort:809165006477459507> [5] Main Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics @role ?add 5` \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> The main role is given upon completing verification and removed when a user gets muted'},

                   ],
                   footer:{text:'Page: 1/3'}
                }),
                reactions: {
                    '816377788516532275': 'main', 
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'staticsChannels',
                content: new MessageEmbed({
                    title: 'Statics Channels',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> [6] Logging',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 6` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> This channel is important it lets wick let you know what its doing \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                        {name:'<:rightSort:809165006477459507> [7] Mod Logging',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 7` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> This channel is important it lets wick let you know what your mods are doing \n <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> You can have wick make one for you by using `w!setup`'},
                        {name:'<:rightSort:809165006477459507> [8] Partnering',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 8` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is used for server partnerships this channel is `Spam/Advert/Ping` whitelisted'},
                        {name:'<:rightSort:809165006477459507> [9] Main channel',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 9` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is used for inactive heat filter which is a premium feature'},
                        {name:'<:rightSort:809165006477459507> [12] Verification ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics #channel ?add 12` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Channel is where wick will send its verification captcha \n  <:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Wick will make one once a new member joins after enabling verification'},
                       //  {name:''}
                    ],
                    footer:{text:'Page: 2/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
        
            {
                name: 'staticsMembers',
                content: new MessageEmbed({
                    title: 'Static Members',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> [10] Trusted Admin',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics user ?add 10` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Trusted Admins are immune to wick'},
                        {name:'<:danger:809528345981222943> Trusted Admins can change', value:'<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Statics \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Joingate \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Joinraid \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Whitelist \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Heat \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Heatfilters'},
                        {name:'<:rightSort:809165006477459507> [11] Extra Owner',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!statics user ?add 11` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Extra Owners are immune to wick'},
                        {name:'<:danger:809528345981222943> Extra Owners can change', value:'<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Wick treats Extra Owners like the server owner'},
                    ],
                    footer:{text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'heatPanicMode',
                    '809847979368120470': 'stop',
                }
            }
        ],    300000)

        /* Run Menu.start() when you're ready to send the menu in chat.
         * Once sent, the menu will automatically handle everything else.
         */ 
        if (!args[0])(helpMenu.start());

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
