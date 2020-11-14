const Tenor = require("tenorjs").client({
    Key: "IL9JNZTAY5HU",
    Filter: "low",
    Locale: "en_US",
    MediaFilter: "basic",
    DateFormat: "D/MM/YYYY - H:mm:ss A",
});

module.exports = {
    name: 'cursedGif',
    description: 'Sends cursed gifs whenever "cursed" or "blursed" is used',
    execute(message, args) {
        Tenor.Search.Query("cursed", "1").then(Results => {
            Results.forEach(post => {
                message.channel.send(`${post.url}`)
            })
        })
        return;
    }
}