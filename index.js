require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
  client.user.setStatus('idle'); // Mettre le statut en mode inactif
});

client.login('process.env.TOKEN');

if(!CommandInteraction.startsWith(process.env.PREFIX)) return;

client.on("message", message => {
    if (message.content === "coucou") {
      message.reply("salut !");
    }
  });

client.on("message", message => {
    if (message.content === "quoi") {
      message.reply("quoicoubeh");
    }
  });
  
client.on("message", message => {
    if (message.content === "hein") {
      message.reply("heinpagnan");
    }
  });

  client.on("message", message => {
    if (message.content === "merde") {
      message.reply("oh");
    }
  });

  client.on("message", message => {
    if (message.content === "putain") {
      message.reply("mais doucement, non ?");
    }
  });