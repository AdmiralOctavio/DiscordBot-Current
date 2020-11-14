function randint(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
    name: 'tilSay',
    description: 'Allows users to manipulate what the bot says through the use of a Tilde',
    execute(message, args) {
        var insult = randint(100)
        message.delete(1);
        message.channel.send(message.content.split("~"));
        if (insult >= 95) {
            message.channel.send(
                "Thanks " + `${message.author}` + " for forcing me to say stuff"
            );
        }
    }
}