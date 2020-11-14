const { client } = require("tenorjs");

const Tenor = require("tenorjs").client({
    Key: "IL9JNZTAY5HU",
    Filter: "low",
    Locale: "en_US",
    MediaFilter: "basic",
    DateFormat: "D/MM/YYYY - H:mm:ss A",
});

module.exports = {
    name: 'tg',
    description: 'Sends tenor gifs',
    execute(message, args) {
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
    }
}