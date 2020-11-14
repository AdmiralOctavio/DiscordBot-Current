function randint(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
    name: 'rr',
    description: 'Chance of Rickroll on certain inputs',
    execute(message, args) {
        temp = randint(100)
        if (temp > 90) {
            message.channel.send("Hey, I found a video you might really like " + `${message.author}` + "!\n https://www.youtube.com/watch?v=xfr64zoBTAQ")
        }
    }
}