var accurateInterval = require("accurate-interval")
var usernames = []
var lcval = []

function randint(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    name: 'lc',
    description: 'I dont want to',
    execute(message, args) {
        var temp = message.content.split(" ")
        var hlvl = randint(100)
        if (randint(100) > 90) {
            usernames = []
            lvcal = []
        }
        if (usernames.includes(message.author.id)) {
            message.channel.send("Searching the database...")
            message.channel.send(`${message.author} is ${lcval[usernames.indexOf(message.author.id)]}% horny.`)
        }
        else {
            usernames.push(message.author.id)
            lcval.push(hlvl)
            message.channel.send("Calculating...");
            message.channel.send(
                `${message.author} is ${hlvl}% horny.`)
            console.log(Boolean(usernames.includes(message.author.id)))
            console.log(`User ID: ${message.author.id}, usernames array: ${usernames}`)
            console.log(Boolean(usernames.includes(message.author.id)))
        }
    }
}