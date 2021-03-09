//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'heat',
    description: 'Heat',
    aliases: ['he'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
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
                    title: 'Heat',
                    color: '#36393f',
                   fields:[
                       {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 1 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 1 ?off`'},
                       {name:'<:rightSort:809165006477459507> Spam Filters', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 2 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 2 ?off`'},
                       {name:'<:premium:809589966153711707> Max Heat Percentage', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 3` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the max heat percentage you want '},
                       {name:'<:notnewbutyeahfreenow:817474716080144395> Heat Degradation ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 4` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the heat degradation you want '},
                       {name:'<:rightSort:809165006477459507> Strikes CAP', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 5` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the strike cap you want '},
                       {name:'<:rightSort:809165006477459507> Webhook Coverage',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 6 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 6 ?off` \n <:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Should always be on '},

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
                name: 'timeMutes',
                content: new MessageEmbed({
                    title: 'Timed Mutes',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 7a ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 7a ?off`'},
                        {name:'<:rightSort:809165006477459507> Regular Strike Mute Duration',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 7b`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the duration you want'},
                        {name:'<:rightSort:809165006477459507> CAP Strike Mute Duration',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 7c`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the duration you want'},
                        {name:'<:premium:809589966153711707> Multiplier Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 7d ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 7d ?off`'},
                        {name:'<:premium:809589966153711707> Multiplier Percentage',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 7e` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the multiplier percent you want '},
                        {name:'<:rightSort:809165006477459507> Reset Heat On Mute',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 8 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 8 ?off`'},
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
                name: 'heatPanicMode',
                content: new MessageEmbed({
                    title: 'Heat Panic Mode',
                    color: '#36393f',
                    fields:[
                        {name:'<:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!heat 9a ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!heat 9a ?off`'},
                        {name:'<:premium:809589966153711707> Trigger',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 9b`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the number of people you want before wick triggers heat panic mode'},
                         {name:'<:premium:809589966153711707> Panic Duration', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!heat X ?set 9c`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the amount of time you want panic mode to last for'}
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


