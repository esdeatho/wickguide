//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'ancaps',
    description: 'Anti Nuke Caps / Triggers',
    aliases: ['anc'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        if (args[0] == "?t") {
            // parameters 
            if (args[1] == "b") {
            message.channel.send({
                embed: {
                    color:'#36393f',
                    title:'Ban/Kick',
                    fields: [
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 1a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 1a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Most nukes happen with mass kicks and bans, you should never disable this filter \n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> We absolutely recommend not giving your staff members native Discord Ban/Kick permissions, force them to use Wick\'s kick and ban commands that are supervised by the antinuke to ensure no casualties! '},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 1b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 1c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ]
                }
            })
            }
    
            if (args[1] == "rc") {
                message.channel.send({
                    embed: {
                        color:'#36393f',
                        title:'Role Creations',
                        fields: [
        
                            {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 2a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 2a ?off`'},
                            {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 2b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                            {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 2c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                        ]
                    }
                })
                }
                if (args[1] == "rd") {
                    message.channel.send({
                        embed: {
                            color:'#36393f',
                            title:'Role Deletions',
                            fields: [
                                {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 3a ?off`'},
                                {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 3b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 3c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                            ]
                        }
                    })
                    }
                    if (args[1] == "cc") {
                        message.channel.send({
                            embed: {
                                color:'#36393f',
                                title:'Channel Creations',
                                fields: [
                                    {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 4a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 4a ?off`'},
                                    {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 4b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                    {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 4c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                                ]
                            }
                        })
                        }
                        if (args[1] == "cd") {
                            message.channel.send({
                                embed: {
                                    color:'#36393f',
                                    title:'Channel Deletions',
                                    fields: [
                                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 5a ?off`'},
                                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 5b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 5c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                                    ]
                                }
                            })
                            }
                            if (args[1] == "wc") {
                                message.channel.send({
                                    embed: {
                                        color:'#36393f',
                                        title:'Webhook Creations',
                                        fields: [
                                            {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 6a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 6a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Webhooks can become very nasty! Make sure to make this filter super harsh on your staff!'},
                                            {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 6b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                            {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 6c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                                        ]
                                    }
                                })
                                }
                                if (args[1] == "wd") {
                                    message.channel.send({
                                        embed: {
                                            color:'#36393f',
                                            title:'Webhook Deletions',
                                            fields: [
                                                {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 7a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 7a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Webhook deletions are generally not harmful.'},
                                                {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 7b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                                 {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 7c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                                            ]
                                        }
                                    })
                                    }
                                    if (args[1] == "ec") {
                                        message.channel.send({
                                            embed: {
                                                color:'#36393f',
                                                title:'Emoji Creation',
                                                fields: [
                                                    {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 8a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 8a ?off`'},
                                                    {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 8b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                                    {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 8c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                                                ]
                                            }
                                        })
                                        }
                                        if (args[1] == "ed") {
                                            message.channel.send({
                                                embed: {
                                                    color:'#36393f',
                                                    title:'Emoji Deletions',
                                                    fields: [
                                                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 9a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 9a ?off`'},
                                                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 9b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                                                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 9c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
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
                    title: 'Ancaps',
                    color: '#36393f',
                   fields:[
                     {name:'<:alarm:809533151277613077> Info',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If all of this seems complex you can use the [**dashboard**](https://wickbot.com/dashboard) to tweak your ancaps'},
                     {name:'<:rightSort:809165006477459507> Specfic Ancaps' , value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ban/Kick** `!anc ?t b` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role Creation** `!anc ?t rc` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role Deletion** `!anc ?t rd` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel Creation** `!anc ?t cc` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel Deletion** `!anc ?t cd` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook Creation** `!anc ?t wc` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook Deletion** `!anc ?t wd` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Emoji Creation** `!anc ?t ec` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Emoji Deletion** `!anc ?t ed`'}
                    //    {name:'<:premium:809589966153711707> Imaging (Backups) ',value:''}
                ],
                footer:{text:'Page: 1/10'}
                }),
                reactions: {
                    '816377788516532275': 'main', 
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
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
                name: 'banKick',
                content: new MessageEmbed({
                    title: 'Ban/Kick',
                    color: '#36393f',
                   fields:[
                       {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 1a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 1a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Most nukes happen with mass kicks and bans, you should never disable this filter \n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> We absolutely recommend not giving your staff members native Discord Ban/Kick permissions, force them to use Wick\'s kick and ban commands that are supervised by the antinuke to ensure no casualties! '},
                       {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 1b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                       {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 1c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    //    {name:'<:premium:809589966153711707> Imaging (Backups) ',value:''}

                   ],
                   footer:{text:'Page: 2/10'}
                }),
                reactions: {
                    '816377788516532275': 'main', 
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'roleCreations',
                content: new MessageEmbed({
                    title: 'Role Creations',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 2a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 2a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 2b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 2c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},


                     
                       //  {name:''}
                    ],
                    footer:{text:'Page: 3/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
        
            {
                name: 'roleDeletions',
                content: new MessageEmbed({
                    title: 'Role Deletions',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 3a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 3b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 3c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 4/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'channelCreations',
                content: new MessageEmbed({
                    title: 'Channel Creations',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 4a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 4a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 4b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 4c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 5/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'channelDeletions',
                content: new MessageEmbed({
                    title: 'Channel Deletions',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 5a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 5b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 5c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 6/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'webhookCreations',
                content: new MessageEmbed({
                    title: 'Webhook Creations',
                    color: '#36393f',
                    fields:[
                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 6a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 6a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Webhooks can become very nasty! Make sure to make this filter super harsh on your staff!'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 6b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 6c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 7/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'webhookDeletions',
                content: new MessageEmbed({
                    title: 'Webhook Deletions',
                    color: '#36393f',
                    fields:[
                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 7a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 7a ?off` \n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Webhook deletions are generally not harmful.'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 7b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 7c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 8/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'emojiCreations',
                content: new MessageEmbed({
                    title: 'Emoji Creations',
                    color: '#36393f',
                    fields:[
                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 8a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 8a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 8b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 8c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 9/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'emojiDeletions',
                content: new MessageEmbed({
                    title: 'Emoji Deletions',
                    color: '#36393f',
                    fields:[
                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!ancaps 9a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!ancaps 9a ?off`'},
                        {name:'<:rightSort:809165006477459507> Minute Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 9b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the minute cap you want '},
                        {name:'<:rightSort:809165006477459507> Hour Cap',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!ancaps X ?set 9c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the hour cap you want '},
                    ],
                    footer:{text:'Page: 10/10'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            }
        ],         300000)

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