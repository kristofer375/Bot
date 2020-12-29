module.exports = {
    name: 'link',
    description: "komenda podsyłająca link",
    execute(message, args){
        if(message.member.roles.cache.has('762052081200005171')){
            message.channel.send('https://youtu.be/cmaVYAaaZvE');
        } else {
            message.channel.send('Nie masz uprawnień!');
        }
    }
}