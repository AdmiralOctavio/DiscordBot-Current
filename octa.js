const Discord = require("discord.js");
const client = new Discord.Client();

//External js files
const memejs = require("./meme.js")

const { prefix } = require("./config.json")
const array = require("./array.js");
const Tenor = require("tenorjs").client({
  Key: "",
  Filter: "low",
  Locale: "en_US",
  MediaFilter: "basic",
  DateFormat: "D/MM/YYYY - H:mm:ss A",
});
const randomPuppy = require('random-puppy')

var giphy = require("giphy-api")({});
var accurateInterval = require("accurate-interval");

var yesTF1 = false;
var sadTF1 = false;

var start = 0;

//arrays

var rrTrigger = ["un", "potato", "uh", "lmao", "."]
var akar = ["kinda dumb", "weird", "stupid", "love", "life", "gay", "epic", "mentally troubled", "from a really bad anime", "hot :flushed:"]
var cm = ["cursed", "blursed"]
var redar = ["memes", "animemes", "dankmemes"]

client.once("ready", () => {
  console.log("Octavio active");
  client.user.setActivity("dank memer bot's death", {
    type: "STREAMING",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });
});

client.on("message", (message) => {
  function randint(max) {
    return Math.floor(Math.random() * Math.floor(max))

  }

  function redditMeme() {
    var subreddit = redar[randint(redar.length)]
    console.log(subreddit)
    const image = randomPuppy(subreddit)
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage(image).setTitle("Meme time")
    message.channel.sendFile(image)
  }

  function AkkoAbuse() {
    var temp = randint(akar.length)
    message.channel.send(akar[temp])
  }

  function gsearch() {
    Tenor.Search.Random(message.content.substring(3), "1")
      .then((Results) => {
        Results.forEach((Post) => {
          message.channel.send(
            `${Post.url}` +
            "\n Here's your GIF! " +
            `${message.author}`
          );
        });
      })
      .catch(console.error);

  }

  function cursedImages() {
    Tenor.Search.Query("cursed", "1").then(Results => {
      Results.forEach(post => {
        message.channel.send(`${post.url}`)
      })
    })
    return;
  }

  function memeSend() {
    var balyeet = Math.random(0, 100);
    if (Math.round(balyeet) <= 0.6) {
      Tenor.Search.Random("Dank meme", "1")
        .then((Results) => {
          Results.forEach((Post) => {
            message.channel.send(
              `Item #${Post.id} (Created: ${Post.created}) @ ${Post.url}` +
              "\n Here's your meme! " +
              `${message.author}`
            );
          });
        })
        .catch(console.error);
    } else if (Math.round(balyeet) > 0.6) {
      message.channel.send(`${message.author}` + " No meme for you!");
      balyeet = Math.random(0, 100);
    }
  }

  function userSay() {
    var insult = 0;
    insult += Math.random(0, 50);
    message.delete(1);
    message.channel.send(message.content.split("~"));
    if (insult > 49) {
      message.channel.send(
        "Thanks " + `${message.author}` + " for forcing me to say stuff"
      );
    }
  }

  //holy 6 number generator ;)
  if (message.content.toLowerCase() === `${prefix}ht`) {
    message.channel.send(Math.floor(Math.random(1000000) * 1000000) + " Here's your tag " + `${message.author}` + "!")
  }

  //rickroll
  if (rrTrigger.includes(message.content.toLowerCase())) {
    var tempNo = Math.random(100)
    console.log(tempNo)
    if (tempNo > 0.90) {
      message.channel.send("Hey, I found a video you might really like " + `${message.author}` + "!\n https://www.youtube.com/watch?v=xfr64zoBTAQ")
    }
  }


  //Blursed Images
  if (message.content.includes(cm[0]) || message.content.includes(cm[1])) {
    cursedImages()
  }

  //search
  var giff = message.content;
  if (message.content.includes(`${prefix}g`)) {
    temp = message.content.split(" ")
    if (temp[0] === `${prefix}g`) {
      console.log(giff);
      gsearch()
    }
  }
  //meme
  if (message.content.toLowerCase() === `${prefix}meme`) {
    var temp = randint(10)
    if (temp > 5) {
      memeSend()
    }
    else if (temp <= 5) {
      memejs.run()
    }
  }

  //help
  if (message.content.toLowerCase() === `${prefix}help`) {
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

  if (
    message.content.charAt(0) === "~" &&
    message.content.charAt(1) != "~"
  ) {
    userSay()
  }

  if (message.content.toLowerCase() === "akko is") {
    AkkoAbuse()
  }

  //scuffed love calculator that doesn't actually calculate anything

  if (message.content.includes(`${prefix}lc`)) {
    temp = message.content.split(" ")
    if (temp[0] === `${prefix}lc`) {
      message.channel.send("Calculating...");
      message.channel.send(
        "Chances of a relationship... " + Math.floor(Math.random(0, 100) * 100) + "%"
      );
    }
  }

  if (
    message.author.id === "159985870458322944" &&
    message.content.toUpperCase().includes("ADVANCED")
  ) {
    message.channel.send("GG loser");
    console.log(message.content);
  }
});