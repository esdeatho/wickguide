/*const Discord = require('discord.js');

module.exports = {
    name: 'joingate', // The name of the command
    description: 'How to ban', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Joingate')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        .setURL('https://wickbot.com/docs/setup#20_JoinGate')

        .addFields(
            { name: '<:rightSort:809165006477459507> Status', value: ' <:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 1 ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 1 ?off`' }, 
            { name: '<:rightSort:809165006477459507> No Avatar Filter', value: ' <:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 1a ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 1b ?off` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n <:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 2b` \n  <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` ' },  

            {name:'<:rightSort:809165006477459507> Account Age Filter', value: '<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 3a ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 3a ?off`\n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n <:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 3b`\n  <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban`\n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Minimum Age** \n <:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 3c`\n  <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `1 < X < 90`\n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Expose Minimum Age** \n <:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 4a ?on` \n <:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 4a ?off`'},
            // {name:'', value:''},


        )
        
      
    message.channel.send(exampleEmbed);
    }, 
}; */

const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
//const about = require('./about');
//const joingate = require('./joingate');
// const lockdown = require('./lockdown');
module.exports = {
    name: 'joingate',
    description: 'Joingate',
    aliases: ['jg'],
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
                    title: 'Joingate',
                    url:'https://wickbot.com/docs/setup#20_JoinGate',
                    color: '#36393f',
                    fields: [
                        { name: '<:rightSort:809165006477459507> Status', value: ' <:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 1 ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 1 ?off`' }, 
                        { name: '<:rightSort:809165006477459507> No Avatar Filter', value: ' <:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 1a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 1b ?off` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n <:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 2b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` ' },  
            
                        {name:'<:rightSort:809165006477459507> Account Age Filter', value: '<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 3a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 3a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 3b`\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Minimum Age** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 3c`\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `1 < X < 90`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Expose Minimum Age** \n<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 3d ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 3d ?off`'},
                        // {name:'', value:''},
            
            
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
                name: 'extra',
                content: new MessageEmbed({
                    title: 'Joingate',
                    url:'https://wickbot.com/docs/setup#20_JoinGate',
                    color: '#36393f',
                  fields: [ 
                      {name:'<:premium:809589966153711707> Bot Addition Filter ', value: '<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 4a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 4a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 4b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` '}, 
                      {name:'<:rightSort:809165006477459507> Advertising Names Filter', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 5a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 5a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 5b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` '},
                      {name:'<:premium:809589966153711707> Unverified Bot Filter', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 6a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 6a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 6b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` '},
                      {name:'<:rightSort:809165006477459507> Suspicious Account Filter', value:'<:blank:809168046052474881> <:check:809847958878552164> On `w!joingate 7a ?on` \n<:blank:809168046052474881> <:fail:809847979368120470> Off `w!joingate 7a ?off`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Action** \n<:blank:809168046052474881> <:ban:810254366203314268> `w!joingate X ?set 7b` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Where `X` is `mute/kick/ban` '}
                  ],
                  footer: {text:'Page: 2/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'extra', 
                    '809587446182445086': 'dashboard',
                    '809847979368120470': 'stop',
                }
            },
        {
            name: 'dashboard',
            content: new MessageEmbed({
                title: 'Joingate',
                url:'https://wickbot.com/docs/setup#20_JoinGate', 
                color: '#36393f',
                image:'https://media.discordapp.net/attachments/753161435520958477/816461718586261504/unknown.png',
              fields: [ 
                  {name:'<:console:809527649889812551> Dashboard', value: 'All the settings can also be changed through the [**dashboard**](https://wickbot.com/dashboard)'}
              ],
              footer: {text:'Page: 3/3'}
            }),
            reactions: {
                /* You can use custom emotes by using their ID instead of an emoji. */
                '816377788516532275': 'extra', 
                '809587446182445086': 'dashboard',
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