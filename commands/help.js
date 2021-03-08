const { prefix } = require('../config.json');

/**
 * Runs the help command, explaining each available command to the user.
 */
/* module.exports = {
    name: 'help',
    description: 'List all available commands, or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        // Send help data about ALL commands
        if(!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        // Send help data about the specific command
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};
*/
/*
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'List all available commands, or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Help')
        //.setAuthor('Ban','https://cdn.discordapp.com/emojis/660816163541876746.png?v=1', )
        .setURL('https://wickbot.com/docs/setup')
        .setDescription('<:rightsmall:809587446182445086> `About`\n <:rightsmall:809587446182445086> `Activate` \n <:rightsmall:809587446182445086> `ANW` \n <:rightsmall:809587446182445086> `Ban` \n <:rightsmall:809587446182445086> `Channel` \n <:rightsmall:809587446182445086> `Kick` \n <:rightsmall:809587446182445086> `Lockdown` \n <:rightsmall:809587446182445086> `Mute` \n <:rightsmall:809587446182445086> `Open` \n <:rightsmall:809587446182445086> `Owner` \n <:rightsmall:809587446182445086> `Ownership` \n <:rightsmall:809587446182445086> `Permits` \n <:rightsmall:809587446182445086> `Prefix` \n <:rightsmall:809587446182445086> `Respond` \n <:rightsmall:809587446182445086> `Restore` \n<:rightsmall:809587446182445086> `Setup` \n  <:rightsmall:809587446182445086> `Sweep` \n <:rightsmall:809587446182445086> `Verification` \n <:rightsmall:809587446182445086> `Webhook` \n <:rightsmall:809587446182445086> `Whitelist`')

        .addFields(
            { name: '<:alarm:809533151277613077> Notice ', value: ' <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This is in no way a substitute for the actual docs or guide, it his highely recommended you still read the [**docs**](https://wickbot.com/docs/setup) to understand what you are doing. We made it even easier for you with the [**dashboard**](https://wickbot.com/dashboard)' }, 
 
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
    name: 'help',
    description: 'List all available commands, or info about a specific command.',
    aliases: ['h','cmd','cmds','commans','commands'],
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
                    title: 'Help',
                    color: '#36393f',
                    description: '<:rightsmall:809587446182445086> `!about` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!activate` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!ancaps` | <:check:809847958878552164> [**Documentation**](https://docs.wickbot.com/v3/commands/settings/ancaps) \n<:rightsmall:809587446182445086> `!antinuke` | <:check:809847958878552164> [**Documentation**](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/settings/anti-nuke/anti-nuke) \n<:rightsmall:809587446182445086> `!anwhitelist` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!channel` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!heat` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup#29_HeatSystem) \n <:rightsmall:809587446182445086> `!joingate` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup#20_JoinGate) \n <:rightsmall:809587446182445086> `!joinraid` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup#27_JoinRaid) \n <:rightsmall:809587446182445086> `!links` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!lockdown` | <:check:809847958878552164> [**Documentation**](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown-ld) \n <:rightsmall:809587446182445086> `!misc` | <:check:809847958878552164> [**Documentation**](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/settings/misc) \n <:rightsmall:809587446182445086> `!mod` | <:check:809847958878552164> [**Documentation**](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation) ',
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
                    title: 'Help',
                    color: '#36393f',
                    description: '<:rightsmall:809587446182445086> `!open` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!owner` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!ownership` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!permits` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!prefix` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!rescue` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!respond` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!restore` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!setup` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup) \n <:rightsmall:809587446182445086> `!sweep` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!verification` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup#28_Verification) \n <:rightsmall:809587446182445086> `!webhook` | <:fail:809847979368120470> [**Documentation**]() \n <:rightsmall:809587446182445086> `!whitelist` | <:check:809847958878552164> [**Documentation**](https://wickbot.com/docs/setup#8_Whitelist)',
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

