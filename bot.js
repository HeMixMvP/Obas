const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('بنضيف الأوامر لسة يا اخ');
  }
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('بنضيف الأوامر لسة يا اخ');
  }
});






client.login('token');
