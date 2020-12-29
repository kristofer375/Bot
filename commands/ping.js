module.exports = {
    name: 'ping',
    description: "komenda ping",
    execute(message, args){
        message.channel.send('pong!')
    }
}