module.exports = {
    name: 'embed',
    description: "Sends a message inputed",
    execute(message, args, ) {
     if (message.member.roles.cache.some(r => ["Team", "Support", "Moderator"].includes(r.name))) {
      // const client = new Client({ Mentions: 'everyone' });
   
      const sayMessage = args.join(" ") 
      message.delete().catch(err => console.log(err));
   
      message.channel.send({
       embed: {
        color: '#36393f',
        description: (sayMessage)
       }
      }); 
   
     } else {
      message.channel.send({
       embed: {
        color: '#ff1a2a',
        title: 'You can\'t use this command!',
        description: '<:fail:809847979368120470> Only **Team Members** can use this command\n<:blank:809168046052474881> <:rightSort:809165006477459507> Your permit level is: `1` (**Regular Member**)'
       }
      })
     }
    }
   }