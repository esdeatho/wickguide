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
                name: 'menu',
                content: new MessageEmbed({
                    title: 'Setup',
                    color: '#36393f',
                    description: '<:blank:809168046052474881> <:bot:812027101493460992> **Add Wick**\n<:blank:809168046052474881> <:separator:823682084660314183> **Sort Wicks Role**\n<:blank:809168046052474881> <:statics:822174129116676096> **Statics**\n<:blank:809168046052474881> <:whitelist:809528328930197554> **Whitelist**\n<:blank:809168046052474881> <:an:822172754546655282> **Antinuke**\n<:blank:809168046052474881> <:kick:817089443470770206> **Joingate**\n<:blank:809168046052474881> <:joinraid:816722693230559304> **Joinraid**\n<:blank:809168046052474881> <:verifi:822171507807223848> **Verification**\n<:blank:809168046052474881> <:ban:810254366203314268> **Automod**\n<:blank:809168046052474881> <:console:809527649889812551> **Start Wick\'s auto setup**\n<:blank:809168046052474881> <:sort:822168718380367882> **Sort Muted and Quarantine roles properly**\n<:blank:809168046052474881> <:docs:818565890021785600> **Additional Settings**\n<:blank:809168046052474881> <:dsh:809525643627724801> **Final Tips**',
                    fields:[
                        {name:'<:alarm:809533151277613077> Read these steps and then proceed',value:'<:blank:809168046052474881> <:invites:820002639773171713> Put Wick\'s own role above most your roles in your <:Discord:824742702900838410> server.\n\n<:blank:809168046052474881> <:console:809527649889812551> Click [**here**](https://wickbot.com/dashboard) and go over the settings using this dashboard and enable/disable any setting you like. Go over the <:whitelist:809528328930197554> whitelist and sort it out as well.\n\n<:blank:809168046052474881> <:dsh:809525643627724801> Once you are satisfied with the settings, go to your <:Discord:824742702900838410> server and use the cmd `w!setup` and let Wick do its magic.\n\n<:blank:809168046052474881> <:sort:822168718380367882> Once Wick is done, go to your roles and put the <@&538362437288853504> role right under Wick\'s own role in your <:Discord:824742702900838410> server.\n\n<:blank:809168046052474881> <:check:809847958878552164> You are good to go! You can finish the pending tasks and scan your server using the [**dashboard**](https://wickbot.com/dashboard) after.'},
                    ]

    //Drag the role to the top.
                    

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                    '812027101493460992':'addWick',
                    '823682084660314183':'role',
                    '822174129116676096':'statics',
                    '809528328930197554':'whitelist',
                    '822172754546655282':'an',
                    '817089443470770206':'joinGate',
                    '816722693230559304':'joinRaid',
                    '822171507807223848':'verification',
                    '810254366203314268':'heatIntro',
                    '809527649889812551':'auto',
                    '822168718380367882':'qm',
                    '818565890021785600':'misc',
                    '809525643627724801':'tips'
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
                name: 'addWick',
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
                    '816377788516532275': 'previous',
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
                        {name:'<:invites:820002639773171713> [6] Logging Channel ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Logging channel is where Wick logs most of the action it does. this channel is **very useful and very needed to know why Wick did something**. `This channel is made and set automatically using Wick\'s setup` command which we will be doing later.'},
                        {name:'<:automod:822177843517325383> [7] Mod-Logging Channel ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Who muted/banned/kicked/warned…. who? and why? and for how long? The mod logging channel has the answer to that. **All moderation actions done using Wick are logged here.** `This channel is made and set automatically using Wick\'s setup` command which we will be doing later.'},
                        {name:'<:adv:824002198245212160> [8] Partnering Channels ', value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Do you have partner managers? Do you partner with other servers? an advertisement for an advertisement? You need to add these partnerships channels here so that Wick ignore people spamming, pinging @everyone and also posting server invites to other servers.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightSort:809165006477459507> To add a partnering channel, do `w!statics [CHANNEL] ?add 8` where `[CHANNEL]` is a `#mention` or an `ID` `w!statics #partnerships ?add 8`'},
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
                        { name: '<:purge:812024610363146270> [1] Spam <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 1` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 1`' },
                        // { name: '\u200B', value: '\u200B' },
                        {name: '<:pings:824772525296451644> [2] Ping <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 2` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 2`'},
                         // { name: '\u200B', value: '\u200B' },
                        {name: '<:adv:824002198245212160> [3] Advert <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 3` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 3`'},
                         // { name: '\u200B', value: '\u200B' },
                         {name: '<:an:822172754546655282> [4] Quarantine <:whitelist:809528328930197554> <:danger:809528345981222943> ', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 4`'},
                         // { name: '\u200B', value: '\u200B' },
                         {name: '<:pings:824772525296451644> [5] @here/@everyone <:whitelist:809528328930197554>', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Member:** `w!w @member ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel:** `w!w #channel ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Role:** `w!w @role ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Category:** `w!w category-id ?add 5` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Webhook:** `w!w webhook-id ?add 5`'},
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
            },
            {
                name: 'an',
                content: new MessageEmbed({
                    title: 'Anti Nuke',
                    color: '#36393f',
                    fields: [
                       
                      {name:'<:an:822172754546655282> AntiNuke',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The anti nuke is one of the most requested and important systems you can ever have on Discord. Luckily, it comes enabled by default. However, you need to tweak the CAPS and triggers yourself. So go over the categories below\n<:blank:809168046052474881> <:check:809847958878552164> This step is not required. You can skip it if you are fine with the defaults.'},
                      {name:'<:ban:810254366203314268> Kicks/Ban',value:'<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:kick:817089443470770206> **kicks/bans 5** members under **1 minute**\n<:blank:809168046052474881> <:kick:817089443470770206> **kicks/bans 15** members under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:kick:817089443470770206> **kicks/bans** `w!anc X ?set 1b` members under 1 minute\n<:blank:809168046052474881> <:kick:817089443470770206> **kicks/bans** `w!anc X ?set 1c` members under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 1a ?off`\n<:blank:809168046052474881> <:rightsmall:809587446182445086> Wick\'s moderation commands will follow the settings you set here!\n<:blank:809168046052474881> <:alarm:809533151277613077> **We recommend you removing the native `Kick Members` and `Ban Members` permissions from your admins and forcing them to use Wick\'s commands. It is the safest option possible** \n<:blank:809168046052474881> <:rightsmall:809587446182445086> This filter is enabled by default.'},
                      {name:'<:separator:823682084660314183> Role Creation/Deletions',value:'<:blank:809168046052474881> <:check:809847958878552164> **Mass Role Creations:**\n<:blank:809168046052474881> <:blank:809168046052474881> And that\'s when someone creates roles rapidly under a very short span of time.\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:check:809847958878552164> **creates 5** roles under **1 minute**\n<:blank:809168046052474881> <:check:809847958878552164> **creates 15** roles under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 2b` roles under 1 minute\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 2c` roles under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 2a ?off`'},
                      {name:'<:blank:809168046052474881> <:fail:809847979368120470> Mass Role Deletions',value:'<:blank:809168046052474881> <:blank:809168046052474881> And that\'s when someone mass removes a chunk of roles under a short period of time.\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 3** roles under **1 minute**\n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 10** roles under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 3b` roles under 1 minute\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 3c` roles under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 3a ?off`'},
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
                name: 'an2',
                content: new MessageEmbed({
                    title: 'Anti Nuke',
                    color: '#36393f',
                    fields: [
                       
                      {name:'<:invites:820002639773171713> Channel Creations & Deletions',value:'<:blank:809168046052474881> <:check:809847958878552164> **Mass Channel Creations:**\n<:blank:809168046052474881> <:blank:809168046052474881> We all have seen a nuke where <#824013710870708304> channels were massively made\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:check:809847958878552164> **creates 4** channels under **1 minute** \n<:blank:809168046052474881> <:check:809847958878552164> **creates 12** channels under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 4b` channels under 1 minute\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 4c` channels under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 4a ?off`'},
                      {name:'<:blank:809168046052474881> <:fail:809847979368120470> Mass Channel Deletions:',value:'<:blank:809168046052474881> <:blank:809168046052474881> And that\'s when someone mass removes a chunk of channels under a short period of time\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 3** channels under **1 minute** \n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 10** channels under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change settings::**\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 5b` channels under 1 minute\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 5c` channels under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 5a ?off`'},
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
                name: 'an3',
                content: new MessageEmbed({
                    title: 'Premium Anti Nuke',
                    color: '#36393f',
                    fields: [
                       
                      {name:'<:webhook:824000910232518706>  Webhook Creations & Deletions <:premium:809589966153711707>',value:'<:blank:809168046052474881> <:check:809847958878552164> **Mass Webhook Creations:**\n<:blank:809168046052474881> <:blank:809168046052474881> Webhooks are VERY dangerous. A malicious person can make your server face an entire outage just by using webhooks. Wick is here to monitor this\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:check:809847958878552164> **creates 3** webhooks under **1 minute** \n<:blank:809168046052474881> <:check:809847958878552164> **creates 10** webhooks under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 6b` webhooks under 1 minute\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 6c` webhooks under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 6a ?off`'},
                      {name:'<:blank:809168046052474881> <:fail:809847979368120470> Mass Webhook Deletions:',value:'<:blank:809168046052474881> <:blank:809168046052474881> And that\'s when someone mass removes a chunk of webhooks under a short period of time.\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 3** webhooks under **1 minute** \n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 10** webhooks under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change settings::**\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 7b` channels under 1 minute\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 7c` channels under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 7a ?off`'},
                      {name:'<:rightSort:809165006477459507> Emoji Creations & Deletions <:premium:809589966153711707>',value:'<:blank:809168046052474881> <:check:809847958878552164> **Mass Emoji Creations:**\n<:blank:809168046052474881> <:blank:809168046052474881> I guess this is straight forward.\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:check:809847958878552164> **creates 5** emojis under **1 minute** \n<:blank:809168046052474881> <:check:809847958878552164> **creates 10** emojis under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change setttings:**\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 8b` emojis under 1 minute\n<:blank:809168046052474881> <:check:809847958878552164> creates `w!anc X ?set 8c` emojis under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 8a ?off`'},
                      {name:'<:blank:809168046052474881> <:fail:809847979368120470> Mass Emoji Deletions:',value:'<:blank:809168046052474881> <:blank:809168046052474881> And that\'s when someone mass removes a chunk of emojis under a short period of time.\n<:rightSort:809165006477459507> **Default Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **Wick will react if someone:**\n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 3** emojis under **1 minute** \n<:blank:809168046052474881> <:fail:809847979368120470> **deletes 10** emojis under **1 hour**\n<:rightSort:809165006477459507> **Changing Settings:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> **To change settings::**\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 9b` emojis under 1 minute\n<:blank:809168046052474881> <:fail:809847979368120470> deletes `w!anc X ?set 9c` emojis under 1 hour'},
                      {name:'<:alarm:809533151277613077> Notes',value:'\n<:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to turn off this filter use `w!anc 9a ?off`'},
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
                name: 'joinGate',
                content: new MessageEmbed({
                    title: 'Join Gate',
                    color: '#36393f',
                    fields: [
                       {name:'<:kick:817089443470770206> Joingate',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Wick has an awesome gate for new members joining your servers besides the verification system. This join gate has been so far the most efficient system blocking out raids and unwanted accounts. It also has several filters that you can tweak by following the categories below'},
                       {name:'<:noav:812028455625293834> Accounts without Profile Pictures (No Avatars)',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Raid accounts usually have no profile pictures, doesn\'t mean ALL accounts without profile pictures are raiding accounts. If you want however to still eliminate accounts without a profile picture, this is the filter to use.\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 2a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 2a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 2b`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 2b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 2b`\n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> **Note**\n<:blank:809168046052474881> <:blank:809168046052474881> Wick is not going to lift the punishment once the account has a pfp'},
                       {name:'<:creation:824054789289148447> Minimum Accounts Age',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want to only accept accounts that are older than a specific number of days, this is the filter to use.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Getting rid of super new accounts can be very useful if you are being targeted.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Getting rid of accounts purely based on "age" could mean losing some genuine people.\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 3a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 3a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 3b`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 3b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 3b`'},
                       {name:'<:adv:824002198245212160> Accounts with Invite Links as usernames',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> We all hate new members that have invite links as usernames *(like a member named [`! discord.gg/wick`](https://discord.com/invite/8C972nY))*. This is the perfect filter for it.\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 5a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 5a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 5b`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 5b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 5b`'},
                       {name:'<:automod:822177843517325383> Suspicious Accounts',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want to eliminate accounts Wick finds Suspicious, you should use this filter.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> The factors that decide if an account is suspicious or not are and **never will be mentioned publicly**. However, just keep in mind that general factors you can think of are considered..\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 7a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 7a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 7b`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 7b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 7b`'},
                       {name:'<:rightSort:809165006477459507> Global',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The joingate is enabled by default. If you don\'t want to use it, disable it globally by doing `w!jg 1 ?off`\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 1a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 1a ?off`'}
                    

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
                name: 'joinGate2',
                content: new MessageEmbed({
                    title: 'Join Gate Premium',
                    color: '#36393f',
                    fields: [
                       {name:'<:bot:812027101493460992> Bots added to your server <:premium:809589966153711707>',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This filter is a **must** if you don\'t want anyone **unauthorized** adding bots to your server as we all know, bots can be very dangerous.\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Only authorized members will be able to add bots:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Server Owners as in Physical Owner plus Extra Owners (Permit 5)\n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Trusted Admins (Permit 4)\n<:blank:809168046052474881> <:blank:809168046052474881> <:danger:809528345981222943> Anyone above Wick..\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 4a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 4a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'~~<:blank:809168046052474881> <:danger:809528345981222943> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 7b`~~\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 4b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 4b`\n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> **For the love of god, please enable this filter.**'},
                       {name:'<:check:809847958878552164> <:bot:812027101493460992> Bots added to your server <:premium:809589966153711707>',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Do you want to eliminate bots that are Unverified by Discord, this is the filter to use. A very recommended to have filter\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086>You can have this enabled with the Bot Additions Filter just fine\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you want ONLY unverified bots to not be allowed for additions, enable this filter and disable the Bot Additions Filter shown before \n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 6a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 6a ?off`'},
                       {name:'<:rightSort:809165006477459507> Change Action',value:'<:blank:809168046052474881> <:danger:809528345981222943> <:Mute:817089217016496168> **Mute:** `w!jg mute ?set 6b`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jg kick ?set 6b`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jg ban ?set 6b`'},
                       {name:'<:rightSort:809165006477459507> Global',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The joingate is enabled by default. If you don\'t want to use it, disable it globally by doing `w!jg 1 ?off`\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jg 1a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jg 1a ?off`'}

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
                name: 'joinRaid',
                content: new MessageEmbed({
                    title: 'Joinraid',
                    color: '#36393f',
                    fields: [
                    {name:'<:joinraid:816722693230559304> Joinraid <:premium:809589966153711707>',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want Wick to monitor the joins in your server and track which invites were used and react once a weird pattern shows up, this is the perfect system to use. Wick\'s joinraid is super efficient at detecting and blocking out most raid types and it used by super large servers to combat malicious attacks.\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jr 1 ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jr 1 ?off` '},
                    {name:'<:kick:817089443470770206> Change Action',value:'<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!jr mute ?set 2`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!jr kick ?set 2`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!jr ban ?set 2`'},
                    {name:'<:ban:810254366203314268> Minimum Trigger',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Default Behavior:**\n <:blank:809168046052474881> <:blank:809168046052474881> <:blank:809168046052474881> Trigger when **10 accounts join under 10 minutes** and these accounts happen to be **Any Accounts**'},
                    {name:'<:sort:822168718380367882> Change Trigger',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Number of accounts:** You follow the format `w!jr [NUMBER] ?set 3a` where `[NUMBER]` is the number of accounts you want that trigger Wick.\n<:blank:809168046052474881> <:duration:824345758664097792>**Period:** You follow the format `w!jr [TIME] ?set 3` where `[TIME]` can be the duration you want\n<:blank:809168046052474881> <:ban:810254366203314268> **Accounts Type:** You follow the format `w!jr [TYPE] ?set 3c` where `[TYPE]` can be:\n<:blank:809168046052474881> <:blank:809168046052474881> <:user:812027437915439144> **All** if you want Wick to consider **ANY account joining** by doing `w!jr all ?set 3c`\n<:blank:809168046052474881> <:blank:809168046052474881> <:automod:822177843517325383> **Suspicious** if you want Wick to only monitor **accounts it finds suspicious** by doing `w!jr suspicious ?set 3c`'},
                    {name:'<:warn:812019922435440670> DM Accounts caught by the joinraid',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> While we don\'t recommend enabling this for many many reasons, you can have Wick dm the accounts caught by the join raid by doing `w!jr 3d ?on`\n<:blank:809168046052474881> <:alarm:809533151277613077> This will high likely be removed in the future since it does more harm than good.'},
                    {name:'<:notnewbutyeahfreenow:817474716080144395> Track and monitor Invites',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Wick can track and monitor invites used and figure out the specific invite responsible for allowing the raid. Wick will instantly delete it to eliminate the coming surge of raid bots. Wick will also show you **who made that invite** which would mostly lead to the guy behind the raid.\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!jr 3e ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!jr 3e ?off`'},
                    {name:'<:alarm:809533151277613077> Info',value:'<:blank:809168046052474881> <:check:809847958878552164> Vanity invites are never deleted. Whitelisted invites are also never targeted or deleted\n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Change the trigger settings based on your server, how big it is, how many joins you get and the type of accounts that join. Then think of a pattern that you and your server would find **weird.** Make sure to have the settings predicting an usual activity of joins. The joinraid is very solid at eliminating raids, especially if you perfect the settings out.'}
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
                name: 'verification',
                content: new MessageEmbed({
                    title: 'Verification',
                    color: '#36393f',
                    fields: [
                  {name:'<:verifi:822171507807223848> Verification',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Wick comes with a verification that uses a unique custom captcha that is undetected by bots and scripts. It is also readable for humans and easy for color blinds. Yes, we thought of everyone. It however might be a bit too difficult for actual people who never solved a damn captcha in their lives so it\'s your call!\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!v 1 ?off` \n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!v 1 ?off` '},
                  {name:'<:kick:817089443470770206> Change Action',value:'<:blank:809168046052474881> <:an:822172754546655282> **Quarantine:** `w!v q ?set 2`\n<:blank:809168046052474881> <:Mute:817089217016496168> **Mute:** `w!v mute ?set 2`\n<:blank:809168046052474881> <:kick:817089443470770206> **Kick:** `w!v kick ?set 2`\n<:blank:809168046052474881> <:ban:810254366203314268> **Ban:** `w!v ban ?set 2`'},
                  {name:'<:ban:810254366203314268> Target',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Everyone:** If you want Wick to verify **any** account joining, do `w!v all ?set 3`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Suspicious Accounts:** If you want Wick to **only** verify accounts it finds suspicious, do `w!v suspicious ?set 3`'},
                  {name:'<:bot:812027101493460992> Bots',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> As a **security** measurement **that we recommend**, any bot added by default is added to Quarantine. It also loses all the permissions it was supposed to add. This is efficient especially for free wick users (since they can\'t have the Bot Additions filter that is premium but they can at least use this).\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you don\'t want this behavior, do `w!verification 4 ?off`'},
                  {name:'<:sort:822168718380367882> Automation',value:'<:blank:809168046052474881> <:invites:820002639773171713> After receiving your **first member** after the *setup* was done, Wick will instantly create a verification channel and set it up properly, it will also add it to Wick\'s statics for you. You are welcome.\n<:blank:809168046052474881> <:docs:818565890021785600> After a member finishes verifying, Wick will clean the verification channel without touching ongoing verifications\n<:blank:809168046052474881> <:delete:818584313837649930> If you want to clean the verification channel yourself without affecting ongoing verifications, do `w!purge 100 ?t v` in the verification channel.'},
                  {name:'<:alarm:809533151277613077> Info',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The verification system has many more settings but for a setup, these are enough. If you want the rest of the commands please read the docs or use the dashboard'}
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
                name: 'heatIntro',
                content: new MessageEmbed({
                    title: 'Heat',
                    color: '#36393f',
                    fields: [
                        {name:'Intro',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Unlike all other moderation bots, Wick uses what I call heat . Its an adaptive algorithm that adjusts to the user\'s current actions and scales properly. Wick also uses public and hidden filters to analyse messages and one\'s behavior in channels.All of these factors contribute to the total heat which diminishes over time, allowing regulars to not get silenced wrongfully. An analogy to the Wick heat system is a machine gun, fire too much and it gets hot, leave it for a while and it cools down.'},
                        {name:'Example',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **1.** A member sends the message `HELLO, my name is fnaki. I want you to visit my server discord.gg/8C972nY`\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **2.** Wick calculates how much heat was generated by that message\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> **2.a** Regular Message **+18% heat (Total 18%)**\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> **2.b** Suspicion **+0% heat (Total 18%)**\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> **2.c** Advertisement **+100 heat (Total 118% -TRIGGER-)**\n<:blank:809168046052474881> <:danger:809528345981222943> **AUTO MOD TRIGGERED**'},
                        {name:'<:alarm:809533151277613077> Info',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> This example is completely inaccurate. This is here so you can have a clue. There are A LOT of things that are not mentioned for security reasons.'}
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
                name: 'heatGeneral',
                content: new MessageEmbed({
                    title: 'Heat',
                    color: '#36393f',
                    fields: [
                       {name:'<:rightSort:809165006477459507> General Settings',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Here, you can change some of the major elements of the heat system.'},
                       {name:'<:rightSort:809165006477459507> Enable/Disable Anti Spam',value:'<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!heat 2 ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!heat 2 ?off`'},
                       {name:'<:alarm:809533151277613077> Note',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **This doesn\'t enable/disable the entire heat system. It only enables/disables:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:docs:818565890021785600> Normal Message Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:invites:820002639773171713> Similiar Message Repetition Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:creation:824054789289148447> Emojis Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:verifi:822171507807223848> Message Characters Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:purge:812024610363146270> New Line Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:neutral:809847927660216331> Inactive Channel Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:pings:824772525296451644> Mentions Heat\n<:blank:809168046052474881> <:blank:809168046052474881> <:images:812027811186737223> Attachments Heat'},
                       {name:'<:webhook:824000910232518706> Webhooks',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Webhooks are useful but can be nasty and evil. If you want Wick to monitor Webhooks or no:\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!heat 6 ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!heat 6 ?off`'},
                       {name:'<:ban:810254366203314268> Strike CAPS',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> A member needs to reach a certain number of strikes before getting the longest mute duration (CAP Mute Duration).\n<:blank:809168046052474881> <:warn:812019922435440670> To change the cap, follow the format `w!heat {NUMBER] ?set 5` where `[NUMBER]` is the number of strikes needed before handing out a mute.\n<:blank:809168046052474881> <:blank:809168046052474881> <:alarm:809533151277613077> Kicks and Bans have nothing to do with strikes, they are instant'},
                       {name:'<:Mute:817089217016496168> Auto Mute Duration',value:'<:blank:809168046052474881> <:fail:809847979368120470> Do `w!heat 7a ?off` if you don\'t want temporary mutes (and also ignore setting the durations).\n<:blank:809168046052474881> <:Mute:817089217016496168> Do `w!heat [TIME] ?set 7b` where `[TIME]` is the mute duration for regular initial strikes *(like: 1m, 1d, 1h)*\n<:blank:809168046052474881> <:Mute:817089217016496168> Do `w!heat [TIME] ?set 7c` where `[TIME]`` is the mute duration for the last strike (CAP Strike) *(like: 1m, 1d, 1h)*'},
                       {name:'<:adv:824002198245212160> Discord Link Invite Advertising',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want Wick to punish members posting invite links of other servers in your server or not:\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!hf 4a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!hf 4a ?off`'},
                       {name:'<:docs:818565890021785600> Wall Of text:',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want Wick to punish people for posting large messages or multiple decent sized messages at once or not:\n<:blank:809168046052474881> <:check:809847958878552164> **Enable:** `w!hf 8a ?on`\n<:blank:809168046052474881> <:fail:809847979368120470> **Disable:** `w!hf 8a ?off`'},
                       {name:'<:alarm:809533151277613077> Note',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> There are A LOT more filters but this is a setup guide.'}
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
                name: 'auto',
                content: new MessageEmbed({
                    title: 'Setup',
                    color: '#36393f',
                    fields: [
                        {name:'<:console:809527649889812551> Wick\s auto setup',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Now that we have gone through most important settings, we can now initiate the automatic setup where Wick will create the Muted and Quarantine roles, set them in all channels in your server. Plus it will create a logs and a modlogs channels. All these 4 elements are going to be also set automatically in your statics.'},
                        {name:'<:console:809527649889812551> Start the automatic setup',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> To start the setup, use the command `w!setup` and watch a dramatic nice live panel of what Wick is doing.'},
                        {name:'<:alarm:809533151277613077> Info',value:'<:blank:809168046052474881> <:check:809847958878552164> Once Wick is done with the auto setup, Wick pretty much has the green light to now work!!! \n<:blank:809168046052474881> <:danger:809528345981222943> If you are jumping right to this part without going over the previous steps, Wick might do things you don\'t want. And for that, the blame is totally on you and not me. I didn\'t code this whole guide for you to skip it :/'}
                    ],
                    image:{
                        url:'https://wickbot.com/setupguide_pics/setup.png'
                    }

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
                name: 'qm',
                content: new MessageEmbed({
                    title: 'Roles',
                    color: '#36393f',
                    fields: [
                      {name:'<:sort:822168718380367882> Sort Muted and Quarantine roles properly',value:'After the automatic setup, you\'ll find 2 new roles that you are already familiar with: <@&538362437288853504> and <@&536289928913616906> roles.'},
                      {name:'<:an:822172754546655282> Sort Quarantine Role <:danger:809528345981222943>',value:'<:blank:809168046052474881> <:danger:809528345981222943> **Place the Quarantinerole right under Wick\'s own role.**\n<:danger:809528345981222943> <:danger:809528345981222943> Place the Quarantine role right under Wick\'s role so that malicious people can not touch it. **Wick will not function without a Quarantine role!!**'},
                      {name:'<:Mute:817089217016496168> Sort Muted Role <:danger:809528345981222943>',value:'<:blank:809168046052474881> <:Mute:817089217016496168> Place the Mutedrole above the regular roles and under your mod role.\n<:danger:809528345981222943> <:danger:809528345981222943> Several features of Wick will not work if there is no Muted role.'},
                      {name:'<:alarm:809533151277613077> Info',value:'The muted and Quarantine roles are Wick\'s essentials. Guard them with your life and always make sure they are set properly in Statics.'}
                    ],
                    //image:{
                      //  url:'https://wickbot.com/setupguide_pics/setup.png'
                   // }

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
                name: 'misc',
                content: new MessageEmbed({
                    title: 'Additional Settings',
                    color: '#36393f',
                    fields: [
                      {name:'<:console:809527649889812551> Custom Prefix',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> The default prefix is `w!`. \nIf you want to change it to another, follow the format `w!misc [PREFIX] ?set 1` where `[PREFIX]` is your new prefix. \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Doing `w!misc ! ?set 1` would make Wick\'s new prefix `!`'},
                      {name:'<:check:809847958878552164> Confirm Actions:',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> When you try to use a moderation command on someone, Wick will ask you if you really want to continue. You\'ll need say y or n.\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> To remove this behavior and make Wick not confirm, do `w!misc 2a ?off`'},
                      {name:'<:purge:812024610363146270> Days Purged on Bans',value:'<:blank:809168046052474881> <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> When you ban someone using Wick, Wick by **default** also purges 7 days of messages sent by the banned member.\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **To change the number:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you don\'t want Wick to purge any messages, do `w!misc 0 ?set 2b`\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you want Wick to purge less than 7 days worth of messages, do `w!misc [NUMBER] ?set 2b` where `[NUMBER]` is the number of days Wick purges when it comes to messages sent'},
                      {name:'<:docs:818565890021785600> Compact Outputs',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> By default, Wick sends you the full moderation/action informations in a sexy but large embed. If you like compact things (like I do love Discord\'s Compact Mode)*(fnaki your a freak)*, you should enable this `w!misc 4 ?on`'},
                      {name:'<:delete:818584313837649930> Delete Informing Messages ',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> When the auto mod punishes someone, it leaves a "User has been X" message in the channel but never deletes it \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you want the message deleted after a while, do `w!misc 5 ?on`'},
                    {name:'<:statics:822174129116676096> Enforce Wick Roles',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you want Wick to always ensure the Muted and Quarantine permissions in channels created or update, you can do `w!misc 6 ?on`\n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If you want to touch the Muted/Quarantine role overrides in channels, you\'ll need to disable this temporarily until you are done by doing `w!misc 6 ?off`'}
                    ],
                    //image:{
                      //  url:'https://wickbot.com/setupguide_pics/setup.png'
                   // }

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
                name: 'tips',
                content: new MessageEmbed({
                    title: 'Final Tips',
                    color: '#36393f',
                    fields: [
                      {name:'<:whitelist:809528328930197554> Ticket Bots',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you have a ticket bot, Wick will high likely add it to quarantine for mass creating/deleting channels. You have these options to eliminate this\n<:blank:809168046052474881> <:check:809847958878552164> Add the ticket bot as a trusted admin `w!statics [BOT] ?add 10` where `[BOT]` is the bot mention, username or ID.\n<:blank:809168046052474881> <:check:809847958878552164> Place the ticket bot above Wick\'s role.\n<:blank:809168046052474881> <:premium:809589966153711707> You can whitelist the category the ticket bot creates/deletes channels in/from by doing `w!anp [CATEGORY] ?add 6` where `[CATEGORY]` is the category\'s ID'},
                      {name:'<:invites:820002639773171713> Auto Roles',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If you have a bot that gives roles on join and you have Wick\'s verification enabled, Wick is going to add this bot to Quarantine since it will technically be trying to touch a Quarantined member. You have these options to eliminate this:\n<:blank:809168046052474881> <:whitelist:809528328930197554> Add the bot to the  Quarantine Whitelist!\n<:blank:809168046052474881> <:fail:809847979368120470> Place the bot above Wick *which is bad*.\n<:blank:809168046052474881> <:fail:809847979368120470> Trust the bot *which is bad*.'},
                      {name:'<:pings:824772525296451644> @everyone and @Members Role',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Wick is against the idea of your @everyone / @Members roles having special channel overrides when it comes to viewing channels and sending messages.\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> If your members need a certain role *(like Members)* to access and see your server and you want to keep it that way, don\'t use Wick. The @Members role should just be a useless role given to everyone.\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All your server roles **should not be forced** to Send Messages and Read Text Channels & See Voice Channels **unless they are private channels.**'},
                      {name:'<:rightSort:809165006477459507> Why?',value:'<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Well, Wick follows the actual proper concept of <:Discord:824742702900838410> Discord roles. The focus should always be on @everyone and not some new made role. Relying on another role besides @everyone in your setup leads to:\n<:blank:809168046052474881> <:fail:809847979368120470> Absence of Discord\'s built in security systems.\n<:blank:809168046052474881> <:fail:809847979368120470> Making it more difficult to combat raids.\n<:blank:809168046052474881> <:fail:809847979368120470> Ruining the Quarantine and Mute roles.\n<:blank:809168046052474881> <:fail:809847979368120470> Ruining Wick\'s fast lockdown system.'}
                    ],
                    //image:{
                      //  url:'https://wickbot.com/setupguide_pics/setup.png'
                   // }

               //     footer: {text:'Page: 3/3'}
                }),
                reactions: {
                    /* You can use custom emotes by using their ID instead of an emoji. */
                    '816377788516532275': 'previous',
                    '809587446182445086': 'next',
                    '809847979368120470': 'stop',
                }
            },
        ],  300000)
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

// 20 pages in total 