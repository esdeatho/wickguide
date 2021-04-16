const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'status', // The name of the command
    description: 'what this bots about', // The description of the command (for help text)
    aliases: [''],
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
   // aliases: 's',
     execute: async function (message, args, Discord) {

        
        /*
        const nf = require('node-fetch');
const gay_es = await nf('https://srhpyqt94yxb.statuspage.io/api/v2/status.json')
let data = gay_es.json();
*/
/*
const nf = require('node-fetch');
await nf('https://srhpyqt94yxb.statuspage.io/api/v2/summary.json').then(d => {
d.json().then(data => {

    console.log(data.components)


const exampleEmbed = new MessageEmbed()

.setTitle('Discord Status')
.setDescription(`<:rightSort:809165006477459507> <:online:829440788856438784> **API:** ${data.components['1'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **Media Proxy:** ${data.components['3'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **CloudFare:** ${data.components['2'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **Push Notifcations:** ${data.components['6'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **Search:** ${data.components['9'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **Voice:** ${data.components['10'].status}\n<:rightSort:809165006477459507> <:online:829440788856438784> **Third Party:** ${data.components['13'].status}`)


*/

const emojis = {
    "api":'<:webhook:824000910232518706>',
    "cloudflare":'<:joinraid:816722693230559304>',
    "media proxy":'<:verifi:822171507807223848>',
    "push notifications":'<:alarm:809533151277613077>',
    "search":'<:search:829483382894362714>',
    "voice":'<:allowed:829485021546807367>',
    "third-party":'<:sort:822168718380367882>',
    "europe":':flag_eu:',
    "japan":':flag_jp:',
    "south korea":':flag_kr:',
    "sydney":':flag_au:',
    "us central":':flag_us:',
    "us east":':flag_us:',
    "us west":':flag_us:',
    "us south":':flag_us:',
}

const nf = require('node-fetch');
const {components} =  await (await nf('https://srhpyqt94yxb.statuspage.io/api/v2/summary.json')).json()
 // const em = "<:rightSort:809165006477459507>"
const operational = "<:online:829440788856438784>"
const fucked = "<:dnd:829440898261319700>"
await message.channel.send(new MessageEmbed({
title: "Discord Status",
color:'#36393f',
description: components.filter(c=> ["api", "cloudflare", "media proxy", "push notifications","third-party","voice","search"].includes(c.name.toLowerCase()))
.map(c=> emojis[c.name.toLowerCase()] + ` **${c.name.toUpperCase()}:** ${c.status == "operational" ? operational : fucked}`).join("\n"),
fields:[
    {name:'Discord VC Status of Countries', value:components.filter(c=> ["europe","japan","south korea","sydney","us central","us east","us south","us west"].includes(c.name.toLowerCase())).map(c=> emojis[c.name.toLowerCase()] + ` **${c.name.toUpperCase()}:** ${c.status == "operational" ? operational : fucked}`).join("\n")
}
],
}));


    },
 // )})}}
}