// Require the necessary discord.js classes
const { Discord, MessageAttachment, Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas');


const { registerFont } = require('canvas');
registerFont("./TT.otf", { family: 'TT' });


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});




client.on("guildMemberAdd", async member => {

 let chx = "962004404238684272";
  if (chx === null) {
    return;
  }



    const img = await canvas.loadImage(`./welcome-image.png`);

 
let userPfp = await resolveImage(member.user.displayAvatarURL({
            extension: "jpg",
            size: 1024
        }))
let namee = member.user.tag
    let image = new Canvas(994, 198)
      .printImage(img, 0, 0, 994, 198)
      .setColor(`#7345F6`)
      .setTextFont('54px TT')
      .printWrappedText(namee, 252, 102)
      .printCircularImage(userPfp, 146,97, 67,67)
      .toBuffer();
      
    


  client.channels.cache.get(chx).send({
    content:
        `<@${member.user.id}>`,
    files: [image]
})
});






// Log in to Discord with your client's token
client.login(process.env.TOKEN);