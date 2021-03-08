//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'joinraid',
    description: 'Joinraid',
    aliases: ['jr'],
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
                    title: 'Joinraid',
                    color: '#36393f',
                  fields: [
                      {name: '<:premium:809589966153711707> <:joinraid:816722693230559304> Status' , value: '<:blank:809168046052474881> <:check:809847958878552164> On `w!joinraid 1 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joinraid 1 ?off`'},
                      {name: '<:ban:810254366203314268> Action', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!joinraid X ?set 2` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` '}
                  ],
                  footer: {text:'Page: 1/2'}
                }),
                reactions: {
                    '816377788516532275': 'main',
                    '809587446182445086': 'extra',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'extra',
                content: new MessageEmbed({
                    title: 'Details',
                    color: '#36393f',
                  fields: [
                      {name:'<:rightSort:809165006477459507> Minimum Trigger',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!joinraid X ?set 3a`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `2 < X < 500`'},
                      {name:'<:rightSort:809165006477459507> Join History',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!joinraid X ?set 3b`\n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `30s < X < 1h` in in 1s, 1m or 1h format'},
                      {name:'<:rightSort:809165006477459507> Target', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Suspicious `w!joinraid suspicious ?set 3c` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All `w!joinraid all ?set 3c`'},
                      {name: '<:rightSort:809165006477459507> DM Members:', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!joinraid 3d ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joinraid 3d ?off`'},
                      {name: '<:rightSort:809165006477459507> Monitor Invites', value: '<:blank:809168046052474881> <:check:809847958878552164> On `w!joinraid 3e ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joinraid 3e ?off`'}
                  ],
                  footer: {text:'Page: 2/2'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'main',
                    '809587446182445086': 'extra',
                    '809847979368120470': 'stop',
                }
            }
        ], 300000)

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
