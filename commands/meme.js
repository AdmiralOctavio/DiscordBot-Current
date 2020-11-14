const discord = require("discord.js");
const api = require("imageapi.js");
function randint(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

module.exports = {
    name: 'pog',
    description: "Reddit meme generator",
    run: async (bot, message, args) => {
        let subreddits = [
            "memes",
            "animemes",
            "dankmemes"
        ];
        let subreddit = subreddits[randint(subreddits.length)];
        console.log(subreddit);

        let image = await api(subreddit);
        console.log(subreddit);
        message.channel.send("works");
    }
}