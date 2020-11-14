const { Message } = require("discord.js")

var akar = ["kinda dumb", "weird", "stupid", "love", "life", "gay", "epic", "mentally troubled", "from a really bad anime", "hot :flushed:"]

function randint(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
    name: 'akkoabuse',
    description: 'Gives a response whenever "Akko is" is written',
    execute(message, args) {
        var temp = randint(akar.length)
        message.channel.send(akar[temp])
    }
}