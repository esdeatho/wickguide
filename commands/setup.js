/*const Discord = require('discord.js');

module.exports = {
    name: 'setup', // The name of the command
    description: 'How to Mute', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Setup')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        .setURL('https://wickbot.com/docs/setup')
  
        .addFields(
            { name: '<:alarm:809533151277613077> Notice', value: 'This bot can take several minutes of your time to have it completely setup and functional as it\'s a sensible, customizable and an advanced bot. \n This is just a small guide to get you on the right track and should not be used as a full wick guide. The full guide can be found [**here**](https://wickbot.com/docs/setup) \n <:alarm:809533151277613077> **Do not ask support to setup Wick for you. Setting up Wick is something only you must do as you know your server better than we do.**'},

        )
        
    
    message.channel.send(exampleEmbed);
    },
};
*/ 

//const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'setup',
    description: 'small setup guide',
    aliases: ['s'],
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
                    title: 'Setup',
                    color: '#36393f',
                    fields: [
                       {name:'<:alarm:809533151277613077> Info', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Do not ask support to setup Wick for you. Setting up Wick is something only you must do as you know your server better than we do. \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This bot can take several minutes of your time to have it completely setup and functional as it\'s a sensible, customizable and an advanced bot. \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This is just a small guide to get you on the right track and should not be used as a full wick guide. The full guide can be found [**here**](https://wickbot.com/docs/setup) '}
                   ],
                   footer: {text:'Page: 1/3'}
                }),
                reactions: {
                    '816377788516532275': 'main',
                    '809587446182445086': 'setup',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'setup',
                content: new MessageEmbed({
                 //   title: 'Setup',
                    color: '#36393f',
                    fields: [
                        {name:'<:rightSort:809165006477459507> Setup', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Invite wick and give the right permissions [Quick hint: admin] \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Type `w!setup` for wick to do at least 80% of the setup for you. \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Place the <@&538362437288853504> role right below wick and the <@&536289928913616906> role above the normal member roles and below your admins. \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Read the setup guide [**here**](https://wickbot.com/docs/setup)`https://wickbot.com/docs/setup` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Are certain parts of the docs so perplexing? Shoot us a question in <#536288784422141988>'},

                    ],
                    footer: {text:'Page: 2/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'main',
                    '809587446182445086': 'faq',
                    '809847979368120470': 'stop',
                }
            },
        
        {
            name: 'faq',
            content: new MessageEmbed({
                title: 'Common mistakes and FAQs',
                color: '#36393f',
                fields: [
                    {name:'<:rightSort:809165006477459507> Place Wick above most role so that it\'s able to monitor most members. ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Place the role <@&536289068032589825> which is managed by a bot integration above most of the user roles in your server **preferably at the top** for it to monitor most of or **all of your server members**'},
                    {name: '<:rightSort:809165006477459507> Wick lacks certain permissions to function properly', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Give Wick admin'}, 
                    {name:'<:rightSort:809165006477459507> You don\'t seem to have the right permissions.', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This is a security feature. Wick is a bot used to monitor rogue admins. It would defeat the purpose of anti-nuke itself if wick gives admins the top-level by default as Only the server owner can give you perms. Use `!permits` to see how'},

                ],
                footer: {text:'Page: 3/3'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'setup',
                '809587446182445086': 'faq',
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

