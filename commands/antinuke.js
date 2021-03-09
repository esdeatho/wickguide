//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'antinuke',
    description: 'Anti Nuke',
    aliases: ['an'],
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
                    title: 'AntiNuke',
                    color: '#36393f',
                   fields:[
                       {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 1 ?on` \n<:blank:809168046052474881> <:danger:809528345981222943> Off ~~`w!antiuke 1 ?off`~~'},
                       {name:'<:premium:809589966153711707> Panic Mode', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!anpanic` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Use `!anpanic` to learn more '},
                    //    {name:'<:premium:809589966153711707> Imaging (Backups) ',value:''}

                   ],
                   footer: {text:'Page: 1/3'}
                }),
                reactions: {
                    '816377788516532275': 'main', 
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'images',
                content: new MessageEmbed({
                    title: 'Imaging (Backups)',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> <:premium:809589966153711707> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 3a ?off`'},
                        {name:'<:blank:809168046052474881> <:premium:809589966153711707> Max Images',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Max images are locked at `10`'},
                        {name:'<:blank:809168046052474881> <:premium:809589966153711707> Interval',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Intervals are locked at every `3h`'},
                        {name:'<:premium:809589966153711707> Prune Detection',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Status** \n<:blank:809168046052474881> <:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 4a ?on` \n<:blank:809168046052474881> <:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 4a ?off`'},


                     
                       //  {name:''}
                    ],
                    footer: {text:'Page: 2/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
        
            {
                name: 'quarantineHold',
                content: new MessageEmbed({
                    title: 'Quarantine Hold',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Status',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 5a ?off`'},
                        {name:'<:blank:809168046052474881> <:premium:809589966153711707> Strict Mode',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 5b ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 5b ?off`'},
                         {name:'<:blank:809168046052474881> <:rightSort:809165006477459507> Monitor Public Roles', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 5c ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 5c ?off`'},
                         {name:'<:rightSort:809165006477459507> Automatic Unique-Bots Whitelist (SOON)',value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!antinuke 6 ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!antinuke 6 ?off`'}
                    ],
                    footer: {text:'Page: 3/3'}
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

