const Discord = require('discord.js')
const client = new Discord.Client()
 //Discord Bot Login vvvvvvvvvvv
client.login(process.env.TOKEN)

//CUSTOM PLAYING STATUS (episode 9)
client.on("ready", () => {
  
})


client.on('message', async message => {
  //SWEAR WORD FILTER (episode 12)
const swearWords = ['swear1', 'swear2']
 if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('hallooooo')
  
}
  

  var prefix = 'l'
  //DM COMMAND (episode 2)
  
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.author.send('hallo thomas disini..')
  }


  
  //STATS COMMAND (episode 4)
  if(message.content.startsWith(`${prefix}statsbot`)) {
    
    var mcount = client.users.cache.size
    var scount = client.guilds.cache.size
    var tcount = client.channels.cache.filter(c => c.type === 'text').size
    var vcount = client.channels.cache.filter(c => c.type === 'voice').size
    message.reply(`${client.user.username} is on ${scount} servers with ${mcount} members, chatting on ${tcount} text channels, with ${vcount} voice channels!`)
  }

  //COINFLIP COMMAND (episode 5)
if(message.content.startsWith(`${prefix}coinflip`)) {

var choices = [
  "jalan",
  "diam"
];

 var output = choices[Math.floor(Math.random()*choices.length)];
  
  message.channel.send(`kamu mendapatkan **${output}!**`);
  
}

  //DIE COMMAND / RESTART COMMAND (episode 7)
  if(message.content.startsWith(`${prefix}die`)) {
  let devs = ['747438491763212378',] //CHANGE THIS TO YOUR ID(S)
  
  if(!devs.includes(message.author.id)) {
return true
} else {
process.exit()
}
  
  }
  
 
  //SLOWMODE COMMAND (episode 8)
   if(message.content.startsWith(`${prefix}slowmode`)) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) return message.reply('Please enter a time in seconds!')
   message.channel.setRateLimitPerUser(time)
     message.channel.send('Set the slowmode!')
  }
  
  
  // LYRICS FINDER COMMAND (ep 13)
  if(message.content.startsWith(`${prefix}lyrics`)) {
   const genius = require("genius-lyrics")
   const G = new genius.Client(process.env.GENIUS)
    
   G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
   .then(results => {
const song = results[0]
message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`) //song.lyrics
})
    .catch(err => message.reply(err))
  }

// MINESWEEPER COMMAND (ep 14)
  if(message.content.startsWith(`${prefix}mine`)) {
  const Minesweeper = require('discord.js-minesweeper');
    
    const minesweeper = new Minesweeper({
      returnType: 'emoji'
    });
    var mines = minesweeper.start()
    message.channel.send(mines)
  
  
  }
    // VERIFY COMMAND (ep 15)
  
if(message.content.startsWith(`${prefix}verify`)) {

  message.member.roles.add("747438491763212378").then(
  message.react('✔')
  ).catch(err => console.log(err)) 

}
 if(message.content.startsWith(`${prefix}ly`)) {
   const genius = require("genius-lyrics")
   const G = new genius.Client(process.env.GENIUS)
    
   G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
   .then(results => {
const song = results[0]
message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`) //song.lyrics
})
    .catch(err => message.reply(err))
  }
  
})