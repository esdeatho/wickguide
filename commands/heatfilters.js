
//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'heat filters',
    description: 'Heat Filters',
    aliases: ['hf'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        return;
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
                    title: 'Heat Filters',
                    color: '#36393f',
                   fields:[
                       {name:'<:rightSort:809165006477459507> [1] Normal Message Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 1a ?on` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 1b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 1c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                       {name:'<:rightSort:809165006477459507> [2] Similiar Message Repetition Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 2a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 2a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 2b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 2c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Ratio** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 2d` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the ratio you want'},
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
                name: 'page1',
                content: new MessageEmbed({
                    title: 'Heat Filters',
                    color: '#36393f', 
                    fields:[ 
                        {name:'<:rightSort:809165006477459507> [3] Suspicion Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 3a ?off` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 3b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 3c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                       {name:'<:rightSort:809165006477459507> [4] Advertisement Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 4a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 4a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 4b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 4c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
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
                name: 'page2',
                content: new MessageEmbed({
                    title: 'Heat Filters',
                    color: '#36393f',
                    fields:[
                       {name:'<:rightSort:809165006477459507> [5] NSFW Websites Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 5a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 5b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 5c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                       {name:'<:rightSort:809165006477459507> [6] Malicious Websites Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 6a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 6a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 6b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 6c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                    ],
                    footer:{text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'page3',
                content: new MessageEmbed({
                    title: 'Heat Filters',
                    color: '#36393f',
                    fields:[
                       {name:'<:rightSort:809165006477459507> [7] Emojis Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 7a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 7a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 7b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 7c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                       {name:'<:rightSort:809165006477459507> [8] Message Characters Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 8a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 8a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 8b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **LC Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 8c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **UC Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 8d` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                    ],
                    footer:{text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'page4',
                content: new MessageEmbed({
                    title: 'Heat Filters',
                    color: '#36393f',
                    fields:[
                       {name:'<:rightSort:809165006477459507> [9]  New Line Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 9a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 9a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 9b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 9c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                       {name:'<:premium:809589966153711707> [10] Inactive Channel Heat',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!hfilters 10a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!hfilters 10a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 10b` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Heat** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 10c` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Trigger** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> `w!hfilters X ?set 10d` \n<:blank:809168046052474881> <:blank:809168046052474881> Where `X` is the heat you want'},
                    ],
                    footer:{text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            }
        ],      300000)

        /* Run Menu.start() when you're ready to send the menu in chat.
         * Once sent, the menu will automatically handle everything else.
         */ 
        helpMenu.start()

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