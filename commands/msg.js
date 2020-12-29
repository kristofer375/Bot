module.exports = {
    name: 'msg',
    description: "wysyła id twojego konta jako prywatną wiadomość",
    execute(message, args){
        message.author.send('ok '+ message.author.id);
    }
}