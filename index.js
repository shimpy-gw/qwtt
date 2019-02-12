const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setStatus("dnd");
    console.log("Ready");
});

bot.on("message", function(message) {
    
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage(':ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
        break;
        case "quidol":
            var embed = new Discord.RichEmbed()
                .setTitle("Quidol va commencer dans quelques minutes..")
                .setDescription("Preparez-vous, le jeu Quidol va commencer dans quelques minutes. Assurez-vous d'avoir une bonne connexion internet !")
                .addField("Temps de latence", "`ping` - Votre ping entre vous et la conversation discord")
                .addField("Liens utiles", "[Lien de téléchargement de Quidol](https://play.google.com/store/apps/details?id=com.quidol.app.prod&hl=en) \n [Site internet de Quidol](http://www.quidol.fr/)")
                .setColor("#E30000")
                .setFooter("QWCT - TRIVIA")
                .setThumbnail("https://lh3.googleusercontent.com/WEVLYerVfnoz4L6gtuE6H2euZmlN-J7FC4vVHQs6kQg5gzvf2Z0AtSz0HDnOf1qfYlc=s180")
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
        case "wizzup":
            var embed = new Discord.RichEmbed()
            .setTitle("Wizzup va commencer dans quelques minutes..")
            .setDescription("Preparez-vous, le jeu Wizzup va commencer dans quelques minutes. Assurez-vous d'avoir une bonne connexion internet !")
            .addField("Temps de latence", "`ping` - Votre ping entre vous et la conversation discord")
            .addField("Liens utiles", "[Lien de téléchargement de Wizzup](https://play.google.com/store/apps/details?id=com.wizzup.app.prod) \n [Site internet de Wizzup](http://www.wizzupapp.fr/)")
            .setColor("#006AE3")
            .setFooter("QWCT - TRIVIA")
            .setThumbnail("https://lh3.googleusercontent.com/vtnbSMVEo-rb_raoCm8J6VCKGWqFrmjCnMeP6aO1-IuHL7eJ7Cjx9P9eqnABxF5zEw=s180-rw")
            .setTimestamp()
        message.channel.sendEmbed(embed);
        break;
      case "thegame":
            var embed = new Discord.RichEmbed()
            .setTitle("The Game va commencer dans quelques minutes..")
            .setDescription("Preparez-vous, le jeu The Game va commencer dans quelques minutes. Assurez-vous d'avoir une bonne connexion internet !")
            .addField("Temps de latence", "`ping` - Votre ping entre vous et la conversation discord")
            .addField("Liens utiles", "[Lien de téléchargement de The Game](https://play.google.com/store/apps/details?id=com.thegame.app.prod)")
            .setColor("#2200FE")
            .setFooter("QWCT - TRIVIA")
            .setThumbnail("https://lh3.googleusercontent.com/Brjn5pZhva2N81Pjg1K677ZOxsTUelqgifG812f7qR3TXzN74u29agFYlPpdZbbsCrM=s180-rw")
            .setTimestamp()
        message.channel.sendEmbed(embed);
        break;

        
        var embed = new Discord.RichEmbed()
        .setTitle("**Le salon à été supprimé avec succès !**")
        .setDescription("Votre demande à été effectuer avec succès.")
        .setFooter("Lyna", "https://images-ext-2.discordapp.net/external/1rJFsJ6FFj2YiokdTVMqDtONA_XNUu1m48fEqo4Myvc/https/www.semanadamulherbemresolvida.com.br/wp-content/uploads/2018/02/checkmark.gif")
        .setTimestamp()
        .setColor("#00E20F")
        message.author.sendEmbed(embed);
    }

    if (message.content.startsWith(PREFIX + "creatrole")) {
        message.guild.createRole({name: "Membres", color:"8BFF00", permissions:"ADMINISTRATOR", mentionable:true}).catch(error => console.log(error));
        var embed = new Discord.RichEmbed()
            .setTitle("**Votre rôle à été crée avec succès !**")
            .setDescription("Vous pouvez supprimer votre rôle à partir des paramètres du serveur.")
            .setFooter("Lyna", "https://images-ext-2.discordapp.net/external/1rJFsJ6FFj2YiokdTVMqDtONA_XNUu1m48fEqo4Myvc/https/www.semanadamulherbemresolvida.com.br/wp-content/uploads/2018/02/checkmark.gif")
            .setTimestamp()
            .setColor("#00E20F")
        message.channel.sendEmbed(embed);
    }

    if (message.content.startsWith(PREFIX + "giverole")) {
        message.guild.member(message.mentions.users.first()).addRole("519970822069420032").catch(error => console.log(error));
        var embed = new Discord.RichEmbed()
            .setTitle("**Votre rôle à été attribué avec succès !**")
            .setDescription("Vous pouvez supprimer votre rôle à partir des paramètres du serveur.")
            .setFooter("Lyna", "https://images-ext-2.discordapp.net/external/1rJFsJ6FFj2YiokdTVMqDtONA_XNUu1m48fEqo4Myvc/https/www.semanadamulherbemresolvida.com.br/wp-content/uploads/2018/02/checkmark.gif")
            .setTimestamp()
            .setColor("#00E20F")
        message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.TOKEN);
