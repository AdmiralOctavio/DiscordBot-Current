const Tenor = require("tenorjs").client({
    Key: "IL9JNZTAY5HU",
    Filter: "low",
    Locale: "en_US",
    MediaFilter: "basic",
    DateFormat: "D/MM/YYYY - H:mm:ss A",
});
module.exports = {
    name: 'tgs',
    description: 'Sends tenor gifs',
    execute(message, args) {
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
}