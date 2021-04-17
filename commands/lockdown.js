/*
const Discord = require('discord.js');

module.exports = {
    name: 'lockdown', // The name of the command
    description: 'Random phrases', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Lockdown')
       //  .setURL('https://wickbot.com/dashboard')
  
        .addFields(
            { name: '<:danger:809528345981222943> Important', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All your server roles (except @everyone) should **not** have the permission to **Send Messages** and **Read Text Channels** & **See Voice Channels**. If that is your case, you are good. \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If not type `w!tshoot lockdown` to set your **ROLES** permissions right' },
            { name: '<:rightSort:809165006477459507> Types', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Channel](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#1-channel-c)** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[All Channels](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#2-channels-sc)** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Kick New Members](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#3-auto-kick-new-members-k)** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Ban New Members](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#4-auto-ban-new-members-b)**\n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Blind](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#the-blind-b-flag)**' },

            // { name: '<:rightSort:809165006477459507> Types', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Channel** \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Any public channel can be locked down by typing `w!lock ?t c` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **All Channels** \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> All the channels in your server, regardless of how many you have, can be locked down in a second or two by typing `w!lock ?t sc` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Kick New Members** \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> You can command wick to automatically start kicking any accounts that join by typing the command `w!lock ?t k` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **Kick New Members** \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> You can command wick to automatically start kicking any accounts that join by typing the command `w!lock ?t b' },
            { name: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Channel', value: '<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Any public channel can be locked down by typing `w!lock ?t c`' },
            { name: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All Channels', value: '<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> All the channels in your server, regardless of how many you have, can be locked down in a second or two by typing `w!lock ?t sc`' },
            { name: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Kick New Members', value: '<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> You can command wick to automatically start kicking any accounts that join by typing the command `w!lock ?t k`' },
            { name: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Ban New Members', value: '<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> You can command wick to automatically start banning any accounts that join by typing the command `w!lock ?t b`' },
            { name: '<:rightSort:809165006477459507> Blind Flag', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can include `-blind` in a lockdown command so that will make Wick hide all channels from your server members. It will also create a new channel stating that a lockdown was issued in an announcement message. \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Example `w!lock -blind ?t sc` \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  Updates to this channel can be pushed by typing `w!lock [MESSAGE] ?t update`' },
            { name: '<:rightSort:809165006477459507> Ending a lockdown', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Lockdowns can be ended by typing `w!unlock ?t [MODE]` where `[MODE]` is one of the modes. \n <:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086>  Example `w!unlock ?t sc` will unlock your server\'s channels. \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427>  `w!unlock` can be used if you are using the command in the locked channel.' },
            { name: '<:premium:809589966153711707> Premium', value: '<:blank:809168046052474881> <:rightSort:809165006477459507> **[Roles](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#5-roles-r)** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086>  You can command wick to remove dangerous permissions from any and all roles, if you are under threat, by typing `w!lock ?t r` \n<:blank:809168046052474881> <:rightSort:809165006477459507> **[All/Server Wide](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#6-all-server-wide-s)** \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Upon using this mode, wick will completely shut down your server. This type will enable several lockdowns at once ||everything we just went over||' },
            { name: '<:rightSort:809165006477459507> Ending a Lockdown', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> all lockdown can be ended by typing `w!unlock`' },
            { name: '<:rightSort:809165006477459507> Panic Mode', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Panic modes can be forcibly ended by you, without seeking assistance from the wick team, by typing `w!unlock` or specifically `w!unlock ?t roles`' },

        )
        //n <:blank:809168046052474881> <:rightSort:809165006477459507> **[Panic Mode](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#panic-mode)** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Panic modes can be forcibly ended by you, without seeking assistance from the wick team, by typing `w!unlock` or specifically `w!unlock ?t roles`

    
    message.channel.send(exampleEmbed);
    },
};

//\n:blank: :premium: **[Roles](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#5-roles-r)**\n :blank: :premium: **[Server Wide](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#6-all-server-wide-s)**

*/
const Discord = require('discord.js');

module.exports = {
    name: 'lockdown', // The name of the command
    description: 'How to Lockdown server', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    aliases: ['ld','lock'],
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#36393f')
        .setTitle('Lockdown')
     
        .addFields(
            { name: '<:danger:809528345981222943> Important', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> All your server roles (except @everyone) should **not** have the permission to **Send Messages** and **Read Text Channels** & **See Voice Channels**. If that is your case, you are good. \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> If not type `w!tshoot lockdown` to set your **ROLES** permissions right' },
            { name: '<:rightSort:809165006477459507> Types', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Channel](https://docs.wickbot.com/v3/commands/moderation/lockdown#1-channel-c)** `w!ld ?t c` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[All Channels](https://docs.wickbot.com/v3/commands/moderation/lockdown#2-channels-sc)** `w!ld ?t sc` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Kick New Members](https://docs.wickbot.com/v3/commands/moderation/lockdown#3-auto-kick-new-members-k)** `w!ld ?t k` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Ban New Members](https://docs.wickbot.com/v3/commands/moderation/lockdown#4-auto-ban-new-members-b)** `w!ld ?t b`' },
            { name: '<:rightSort:809165006477459507> Blind', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> You can include [`-blind`](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#the-blind-b-flag) in a lockdown command so that will make Wick hide all channels from your server members. It will also create a new channel stating that a lockdown was issued in an announcement message. \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Example `w!lock -blind ?t sc` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Type `w!lock [MESSAGE] ?t update` where `[MESSAGE]` is your new announcement to keep your members updated. ' },
            { name: '<:rightSort:809165006477459507> Unlock', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Type `w!unlock ?t [MODE]`  where `[MODE]` is one of the lockdown modes you want to end \n<:blank:809168046052474881> <:blank:809168046052474881> <:rightsmall:809587446182445086> Active lockdown modes can be viewed by typing `w!lock` ' },
            { name: '<:premium:809589966153711707> Premium', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> [**Roles**](https://docs.wickbot.com/v3/commands/moderation/lockdown#5-roles-r) `w!lock ?t r` \n<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> [**All**](https://docs.wickbot.com/v3/commands/moderation/lockdown#6-all-server-wide-s) `w!lock ?t all`' },
            { name: '<:premium:809589966153711707> Panic Mode', value: '<:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Panic modes can be forcibly ended by you, without seeking assistance from the wick team, by typing `w!unlock` or specifically `w!unlock ?t roles`' },

            )
        //n <:blank:809168046052474881> <:rightSort:809165006477459507> **[Panic Mode](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#panic-mode)** \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> Panic modes can be forcibly ended by you, without seeking assistance from the wick team, by typing `w!unlock` or specifically `w!unlock ?t roles`
        //.addField('Inline field title', 'Some value here', true)
         //.setImage('https://media.discordapp.net/attachments/809398352113958922/809519114573054042/0eb8NWVFFQ.gif?width=530&height=200')
        //.setTimestamp()
       // .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    message.channel.send(exampleEmbed);
    },
};

//\n:blank: :premium: **[Roles](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#5-roles-r)**\n :blank: :premium: **[Server Wide](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#6-all-server-wide-s)**
// \n <:blank:809168046052474881> <:rightDoubleArrow:809168332569575427> **[Blind](https://mobilfan.gitbook.io/wickdocs-wip/v/main/commands/moderation/lockdown#the-blind-b-flag)**
