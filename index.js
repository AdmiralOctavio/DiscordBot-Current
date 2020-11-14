const fs = require("fs")
const Discord = require("discord.js");
const { prefix } = require("./config.json")
const client = new Discord.Client();
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

var cm = ["cursed", "blursed"]

client.once("ready", () => {
  console.log("Octavio active");
  client.user.setActivity("dank memer bot's death", {
    type: "STREAMING",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });
});

client.on("message", (message) => {
  let args = message.content.slice(prefix.length).trim().split(/ +/);
  let command = args.shift().toLowerCase();

  //rickroll
  if (message.content.toLowerCase() === "un") {
    console.log("rr")
    client.commands.get('rr').execute(message, args)
  }
  //Akko abuse
  else if (message.content.toLowerCase() === "akko is") {
    client.commands.get('akkoabuse').execute(message, args)
  }
  //Akko time
  else if (message.content.toLowerCase() === "akko time") {
    client.commands.get('AkkoTime').execute(message, args)
  }
  //tilda command
  else if (
    message.content.charAt(0) === "~" &&
    message.content.charAt(1) != "~"
  ) {
    client.commands.get('tilSay').execute(message, args)
  }
  //Blursed Images
  else if (message.content.includes(cm[0]) || message.content.includes(cm[1])) {
    message.channel.startTyping()
    client.commands.get('cursedGif').execute(message, args)
    message.channel.stopTyping()
  }

  //
  //
  //

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //Ping
  if (message.content.toLowerCase() === `${prefix}ping`) {
    client.commands.get('ping').execute(message, args)
  }
  //Tenor meme gif
  else if (message.content.toLowerCase() === `${prefix}meme`) {
    message.channel.startTyping()
    client.commands.get('tg').execute(message, args)
    message.channel.stopTyping()
  }
  //Tenor gif search
  else if (message.content.includes(`${prefix}g`)) {
    temp = message.content.split(" ")
    if (temp[0] === `${prefix}g`) {
      message.channel.startTyping()
      client.commands.get('tgs').execute(message, args)
      message.channel.stopTyping()
    }
  }

  //holy 6 number generator ;)
  else if (message.content.toLowerCase() === `${prefix}ht` && message.channel.nsfw) {
    message.channel.send(Math.floor(Math.random(1000000) * 1000000) + " Here's your tag " + `${message.author}` + "!")
  }

  else if (message.content.toLowerCase() === `${prefix}help`) {
    message.author.send(
      "``Commands:`` \n ``1) Use the '~' prefix to control the bot's speech`` \n ``2) Use the '|g' prefix to search gifs(Not 100% Accurate)``" +
      "\n ``3) Say '|meme' and you might recieve a meme`` \n ``4) Say 'Akko is' and you'll get an unrealistic answer`` \n" +
      "``5) Include the words Blursed or Cursed in any message and you'll regret it ``\n" +
      "``6) Use the '|lc' prefix with 2 people's names to calculate the chances of their relationship! (DISCLAIMER:IT DEPENDS ON HOW THE BOT FEELS-RESULTS MAY CHANGE)`` \n" +
      "``7) Be weary of what you say... the bot my outsmart you...``" +
      "``\n8) Use the '|ht' command to give you a random nuke code ;)``" +
      "\n**Need any help? Dm Admiral Octavio#3800!**"
    );
  }
  else if (message.content.includes(`${prefix}horny`)) {
    client.commands.get('lc').execute(message, args)
  }
});

client.login("NjA5NDA1MDc0MzYzNTE0OTEw.Xn5BSg.43ti3Y9YyEScfp6NmDHw-KrIKa0");
//622117302728392747