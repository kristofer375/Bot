module.exports = {
    name: 'dm',
    description: "komenda wysyłająca dodatoką prywatną wiadomość poprzez oznaczenie lub id użytkownika serwera",
    execute(message, args){
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send("Nie masz uprawnień!");
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user)
            return message.channel.send("Nie oznaczono użytkownika, lub podano złe id");
        if (!args.slice(1).join(" "))
            return message.channel.send("Nie podano wiadomości");
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send("Wysłanie nie powiodło się"))
            .then(() => message.channel.send(`Wysłano wiadomości do ${user.user.tag}`));
    }
}