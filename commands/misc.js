/*const Discord = require('discord.js');

module.exports = {
    name: 'misc', // The name of the command
    description: 'How to ban', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Misc')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
      //    .setURL('https://docs.wickbot.com/v3/commands/moderation/ban')
.addFields(
    {name:'<:rightSort:809165006477459507> Prefix', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 1` \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is your new prefix'}, 
    {name:'<:rightSort:809165006477459507> Mod Misc', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Confirm Actions** \n <:blank:809168046052474881> <:blank:809168046052474881> <:check:809847958878552164> On `w!misc 2a ?on` \n <:blank:809168046052474881> <:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 2a ?off` '}
)
      
    message.channel.send(exampleEmbed);
    },
};
*/

const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'misc',
    description: 'misc',
    aliases: ['m'],
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
                    title: 'Misc',
                    color: '#36393f',
                    fields:[ 
                   
                        {name:'<:rightSort:809165006477459507> Prefix', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 1` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is your new prefix'}
                              
                    ],
                    footer: {text:'Page: 1/4'}
                }),
                reactions: {
                    '816377788516532275': 'main',
                    '809587446182445086': 'modMisc',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'modMisc',
                content: new MessageEmbed({
                    title: 'Mod Misc',
                    color: '#36393f',
                    fields:[
                        {name:'<:rightSort:809165006477459507> Confirm Actions', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 2a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 2a ?off` '},
                        {name:'<:rightSort:809165006477459507> Days Purged on Bans ', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 2b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `0d > X > 14d`'},
                        {name:'<:rightSort:809165006477459507> Default Mute Duration',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 2c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the amount of time you want '},
                        {name:'<:rightSort:809165006477459507> Remove Main Roles on Mute', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 2d ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 2d ?off`'}
                    ],
                    footer: {text:'Page: 2/4'}
                    
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'modMisc',
                    '809587446182445086': 'warnSettings',
                    '809847979368120470': 'stop',
                }
            },
        {
            name: 'warnSettings',
            content: new MessageEmbed({
                title: 'Warn Settings',
                color: '#36393f',
                fields:[
                    {name:'<:rightSort:809165006477459507> Status', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 3a ?off` '},
                    {name:'<:rightSort:809165006477459507> Action', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 3b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban`'},
                    {name:'<:rightSort:809165006477459507> Max warns',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> `w!misc X ?set 3c` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is the amount of warns you want before wick takes action '},
                ],
                footer: {text:'Page: 3/4'}
                
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'modMisc',
                '809587446182445086': 'misc',
                '809847979368120470': 'stop',
            }
        },
          {
            name: 'misc',
            content: new MessageEmbed({
                title: 'Misc',
                color: '#36393f',
                fields:[
                    {name:'<:rightSort:809165006477459507> Compact Outputs', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 4a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 4a ?off` '},
                    {name:'<:rightSort:809165006477459507> Delete Informing Messages', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 5a ?off` '},
                    {name:'<:rightSort:809165006477459507> Enforce Wick Roles', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!misc 6a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!misc 6a ?off` '}

                ],
                footer: {text:'Page: 4/4'}
                
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'warnSettings',
                '809587446182445086': 'misc',
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

