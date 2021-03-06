module.exports = {
    name: "add",
    options: [
        {
            name: "user",
            description: "Ecrit l'user que tu veux ajouter au ticket !",
            type: 6,
            required: true
        }
    ],
    category: "Tickets",
    description: "Ajouter un membre du ticket",
    userPerms: ["SEND_MESSAGES"],
    usage:'**/add <member>**',
    ownerOnly: false,
    run: async (client, interaction, args) => {
        let user = interaction.options.getUser("user");

        if(interaction.channel.name.includes("close") || interaction.channel.name.includes("ticket")) {
            interaction.channel.permissionOverwrites.edit(user.id, {
                ATTACH_FILES: true,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            });
            
            interaction.reply({ content: `${user} a été ajouté au ticket par ${interaction.user}` });
        } else {
            interaction.reply({ content: "Cette commande ne peut être utilisé que dans un ticket !", ephemeral: true });
        }
    }
}