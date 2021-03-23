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
    name: 'set',
    description: 'full',
    aliases: ['se'],
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
                    title: 'Add Wick',
                    color: '#36393f',
                    fields: [
                       {name:'<:check:809847958878552164> Standard', value:'<:blank:809168046052474881> <:bot:812027101493460992> [**Standard**](https://discord.com/oauth2/authorize?client_id=536991182035746816&scope=bot&permissions=8) *`[https://wickbot.com/docs/setup#0_AddWick_1_Standard]`*'},
                       {name:'<:premium:809589966153711707> Premium',value:'<:blank:809168046052474881> <:bot:812027101493460992> [**Premium**](https://discordapp.com/oauth2/authorize?client_id=548410451818708993&scope=bot&permissions=8) *`[https://wickbot.com/docs/setup#0_AddWick_2_Premium]`*'},
                       {name:'<:verified:823679412331347969> Activate',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> To add Premium Wick to your server, first make sure you have [**a premium subscription**](https://wickbot.com/premium/subscriptions) \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you don\'t have a subscription head over to [**premium**](https://wickbot.com/premium) page choose the tier you want.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Once you purchased the tier, go to Wick Lounge server and type `*activate server-id` without forgetting to replace `server-id` with the actual ID of your server. \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> [**How do I know my server\'s ID???**](https://support.discord.com/hc/en-us/articles/206346498)'},
                       {name:'<:alarm:809533151277613077> Rescue Key',value:'<:blank:809168046052474881> <:rescueKey:809851939529424937> When you add Wick, it will dm the server owner a Rescue Key. You should as a server owner keep this safe and do not share it with others! \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The rescue key is used to give you control over Wick after losing access to your owner Discord account. \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you are the server owner and you did not receive a dm from Wick, open your dms and readd Wick.'}
                   ],
                //   footer: {text:'Page: 1/3'}
                }),
                reactions: {
                    '816377788516532275': 'main',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                        // You can run whatever you like in functions.
                      
    
                    }
                
            },
            {
                name: 'role',
                content: new MessageEmbed({
                    title: 'Role',
                    color: '#36393f',
                    fields: [
                        {name:'<:separator:823682084660314183> Sort Wicks Role', value:'<:blank:809168046052474881> <:rightSort:809165006477459507> Once you add Wick to your server with the proper permission(s) it asked for, you should actually notice a new Wick role in your server. You need to move that role and place it at the top or at least somewhere at the top.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>Placing Wick\'s role at the top is pretty straight forward.\n<:statics:822174129116676096> **Step 1.** Go to **Server Settings** in your server.\n<:statics:822174129116676096> **Step 2.** Go to **Roles** tab.\n<:statics:822174129116676096> **Step 3.** Go at the bottom of the roles list and you\'ll notice the Wick role.\n<:statics:822174129116676096> **Step 4.** Drag the role to the top.'},
                        {name:'<:images:812027811186737223> Image Examples',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> **Settings:** **https://wickbot.com/setupguide_pics/sortwickrole_1.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Roles:** **https://wickbot.com/setupguide_pics/sortwickrole_2.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Drag:** **https://wickbot.com/setupguide_pics/sortwickrole_3.gif**'}
    //Drag the role to the top.
                    ],

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'statics',
                content: new MessageEmbed({
                    title: 'Statics',
                    color: '#36393f',
                    fields: [
                        {name:'<:statics:822174129116676096> Statics', value:'<:blank:809168046052474881> <:rightSort:809165006477459507> Statics are things you set once for all and only comeback to once a month or so. Wick depends on these settings especially the Muted and Quarantine roles. If you only plan on setting the Muted and Quarantine roles only, then just skip this step since Wick will be making these two automatically when we are about to finish setting it up.\n<:blank:809168046052474881> <:alarm:809533151277613077> If you are not the Physical Server Owner <:owner:809530582714941520> but you want to set up Wick, the server owner needs to add you as an Extra Owner by doing `w!statics [USER] ?add 11` where `[USER]` is replaced by your username, your mention or your ID.'},
                        {name:'<:alarm:809533151277613077> Important',value:'<:Mute:817089217016496168> **[1] Muted** \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Muted role is the role Wick uses to mute **regular** and **normal members**. `This role is set automatically by Wick after doing w!setup` but no need to run the command for now\n<:an:822172754546655282> **[2] Quarantine**\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Quarantine role is the role Wick uses to punish your admins and moderators and anyone with power in your server *except those who are whitelisted/authorized/trusted.* `This role is set automatically by Wick after doing w!setup` but no need to run the command for now.\n<:danger:809528345981222943> **Wick will not function properly if there is a Muted Role missing. Wick will not function at all if there is no Quarantine role set in Wick.**\n\n'},
                        {name:'<:statics:822174129116676096> Moderators ',value:'\u200B'},
                        {name:'<:ban:810254366203314268> **[3] Admin Roles**',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Members with roles set as Admin Roles in Statics are considered Wick Admins. \n**Wick Admins can pretty much:** \n<:blank:809168046052474881> <:Mute:817089217016496168> Mute, unmute, warn regular members.\n<:blank:809168046052474881> <:kick:817089443470770206> Kick regular members.\n<:blank:809168046052474881> <:ban:810254366203314268> Ban regular members.\n<:blank:809168046052474881> <:delete:818584313837649930> Purge messages in channels.\n<:blank:809168046052474881> <:warn:812019922435440670> Remove warns, kill moderation cases.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add an Admin Role, use the command `w!statics [ROLE] ?add 3` where `[ROLE]` is either a: `@mention`, `Name`, `ID` `w!statics @Admins ?add 3`'},
                        {name:'<:kick:817089443470770206> [4] Moderator Roles',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Members with roles set as moderator Roles in Statics are considered Wick Moderators. \n**Wick Moderators can pretty much:** \n<:blank:809168046052474881> <:Mute:817089217016496168>  Mute, unmute, warn regular members.\n<:blank:809168046052474881> <:kick:817089443470770206> Kick regular members.\n<:blank:809168046052474881> <:warn:812019922435440670> Remove warns, kill moderation cases.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507>To add a Moderator Role, use the command `w!statics [ROLE] ?add 4` where `[ROLE]` is either a: `@mention`, `Name`, `ID` `w!statics @moderators ?add 4`'},
                        {name:'<:console:809527649889812551> [5] Main Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Main roles are those zero-permissions roles that you give to all your members in your server. Wick will give these roles to people who pass verification and will also **monitor and protect these roles from malicious people** \n<:blank:809168046052474881> <:danger:809528345981222943> **Main Roles should have NO dangerous permissions!!**\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add a Main Role, use the command `w!statics [ROLE] ?add 5` where `[ROLE]` is either a: `@mention`, `Name`, `ID` `w!statics @members ?add 5`'}
                         //{name:'<:images:812027811186737223> Image Examples',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> **Settings:** **https://wickbot.com/setupguide_pics/sortwickrole_1.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Roles:** **https://wickbot.com/setupguide_pics/sortwickrole_2.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Drag:** **https://wickbot.com/setupguide_pics/sortwickrole_3.gif**'}
    //Drag the role to the top.
                    ],

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'statics2',
                content: new MessageEmbed({
                    title: 'Statics',
                    color: '#36393f',
                    fields: [
                        {name:'<:verifi:822171507807223848> [6] Logging Channel ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Logging channel is where Wick logs most of the action it does. this channel is **very useful and very needed to know why Wick did something**. `This channel is made and set automatically using Wick\'s setup` command which we will be doing later.'},
                        {name:'<:automod:822177843517325383> [7] Mod-Logging Channel ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Who muted/banned/kicked/warned…. who? and why? and for how long? The mod logging channel has the answer to that. **All moderation actions done using Wick are logged here.** `This channel is made and set automatically using Wick\'s setup` command which we will be doing later.'},
                        {name:'<:partner:823747077178916894> [8] Partnering Channels ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Do you have partner managers? Do you partner with other servers? an advertisement for an advertisement? You need to add these partnerships channels here so that Wick ignore people spamming, pinging @everyone and also posting server invites to other servers.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add a partnering channel, do `w!statics [CHANNEL] ?add 8` where `[CHANNEL]` is a `#mention` or an `ID` `w!statics #partnerships ?add 8`'},
                        {name:'<:purge:812024610363146270> [9] Main Channel <:premium:809589966153711707> ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Do you have a <#545962576098361372> channel? a channel where everyone gather and talk? Set that channel as a main channel in Wick. Wick will monitor this channel *(Inactive Channel Filter found in `w!hfilters`.)*\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To set the main channel, do `w!statics [CHANNEL] ?set 9` where `[CHANNEL]` is a `#mention` or an `ID` `w!statics #general ?set 9`'},
                        {name:'<:verifi:822171507807223848> [12] Verification Channel', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This is where Wick is going to verify your members in. `This channel is made and set automatically once you receive your first member after enabling Wick\'s verification` \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> Why does it have number 12 and not 10? Because it came very recently and we couldn\'t touch the actual 10 and 11 statics.'},
                         //{name:'<:images:812027811186737223> Image Examples',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> **Settings:** **https://wickbot.com/setupguide_pics/sortwickrole_1.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Roles:** **https://wickbot.com/setupguide_pics/sortwickrole_2.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Drag:** **https://wickbot.com/setupguide_pics/sortwickrole_3.gif**'}
    //Drag the role to the top.
                    ],

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'statics3',
                content: new MessageEmbed({
                    title: 'Statics',
                    color: '#36393f',
                    fields: [
                        {name:'<:noav:812028455625293834> [10] Trusted Admins', value:'<:blank:809168046052474881> <:danger:809528345981222943> Trusted admins are those admins you absolutely trust. Trusted Admins are 100% immune and will NEVER be punished by Wick for anything they do.\n**They also can:**\n<:blank:809168046052474881> <:danger:809528345981222943> Bypass ALL Wick systems\n<:blank:809168046052474881> <:danger:809528345981222943> Change some of Wick\'s settings\n<:blank:809168046052474881> <:ban:810254366203314268> Use ALL moderation commands of Wick\n<:blank:809168046052474881> <:danger:809528345981222943> Never get punished by Wick at all\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add a trusted admin, follow the format `w!statics [USER] ?add 10` where `[USER]` is either a `@mention`, `username`, `usertag` or an `ID` `w!statics katemoon#2266 ?add 10`'},
                        {name:'<:owner:809530582714941520> [11] Extra Owners', value:'<:blank:809168046052474881> <:danger:809528345981222943> Extra Owners are treated the same as the physical server owner meaning the person with the crown <:owner:809530582714941520> Extra Owners are 100% immune and will NEVER be punished by Wick for anything they do.\n<:blank:809168046052474881> <:danger:809528345981222943> Never get punished by Wick at all\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add a extra owner, follow the format `w!statics [USER] ?add 11` where `[USER]` is either a `@mention`, `username`, `usertag` or an `ID` `w!statics katemoon#2266 ?add 11`'},
                        {name:'<:alarm:809533151277613077> Advice', value:'<:blank:809168046052474881> <:danger:809528345981222943> We do NOT recommend adding trusted admins or extra owners! \n<:blank:809168046052474881> <:check:809847958878552164> While it is not recommended to add trusted admins and extra owners, you should add your alt if you have one as an extra owner in case you ended up losing access to your main account which would mean having no control over Wick.'},
                      
                         //{name:'<:images:812027811186737223> Image Examples',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> **Settings:** **https://wickbot.com/setupguide_pics/sortwickrole_1.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Roles:** **https://wickbot.com/setupguide_pics/sortwickrole_2.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Drag:** **https://wickbot.com/setupguide_pics/sortwickrole_3.gif**'}
    //Drag the role to the top.
                    ],

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
            {
                name: 'whitelist',
                content: new MessageEmbed({
                    title: 'Whitelist',
                    color: '#36393f',
                    fields: [
                        { name: '<:rightSort:809165006477459507> [1] Spam <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 1`' },
                        // { name: '\u200B', value: '\u200B' },
                        {name: '<:rightSort:809165006477459507> [2] Ping <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 2`'},
                         // { name: '\u200B', value: '\u200B' },
                        {name: '<:rightSort:809165006477459507> [3] Advert <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 3`'},
                         // { name: '\u200B', value: '\u200B' },
                         {name: '<:rightSort:809165006477459507> [4] Quarantine <:whitelist:809528328930197554> <:danger:809528345981222943> ', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 4`'},
                         // { name: '\u200B', value: '\u200B' },
                         {name: '<:rightSort:809165006477459507> [5] @here/@everyone <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 5`'},
                          { name: '<:fail:809847979368120470> Deleting Whitelist', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Replace `?add` with `?del` to remove a whitelist\n**<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> For Example:**\n `w!whitelist #general ?del 1` to remove it from spam whitelist' },
                      
                         //{name:'<:images:812027811186737223> Image Examples',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> **Settings:** **https://wickbot.com/setupguide_pics/sortwickrole_1.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Roles:** **https://wickbot.com/setupguide_pics/sortwickrole_2.png**\n<:blank:809168046052474881> <:rightsmall:809587446182445086> **Drag:** **https://wickbot.com/setupguide_pics/sortwickrole_3.gif**'}
    //Drag the role to the top.
                    ],

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
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

