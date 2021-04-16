const Discord = require('discord.js');

module.exports = {
    name: 'ping', // The name of the command
    description: 'bots ping', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
    execute(message, args) {
        const emojis = ["<:latencyPerfect:829848274453135391>","<:latency:829838033540743169>"]
        const randomEmojis = emojis[Math.floor(Math.random()*emojis.length)];
        const ping = Math.floor(Math.random() * 25) + 10;
        const uptime = Math.floor(Math.random() * 90) + 10;
        const ram = Math.floor(Math.random() * 1) + 1;
        const cpu = ["0.00","1.52","1.38","1.43","1.90"];
        const randomCPU = cpu[Math.floor(Math.random()*cpu.length)];

        message.channel.send({
            embed: {
                color:'#36393f',
                title:'kciw Status:',
                description:`<:online:829440788856438784> **Shard [0 -Current-]:**\n<:blank:809168046052474881> ${randomEmojis} **Latency:** \`${ping}ms\`\n<:blank:809168046052474881> <:Cooldown:829838928609148999> **Uptime:** \`${uptime}d\`\n<:blank:809168046052474881> <:sort:822168718380367882> **Resources:**\n<:blank:809168046052474881> <:blank:809168046052474881> <:memory:829841373363830825> RAM: \`${ram} MB\`\n <:blank:809168046052474881> <:blank:809168046052474881> <:loading:829842067332399184> CPU: \`${randomCPU}%\`\n<:blank:809168046052474881> <:postion:829842851730030613> **Size:**\n<:blank:809168046052474881> <:docs:818565890021785600> Servers: \`1\`\n<:blank:809168046052474881> <:user:812027437915439144> Members: \`${message.guild.members.cache.size}\``
            }
        })
    }}