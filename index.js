const Discord = require("discord.js");
const client = new Discord.Client()
const prefix = ("-");
const osu = require('node-os-utils')
const mem = osu.mem
const drive = osu.drive
const cpu = osu.cpu
const os = osu.os
 
client.on("ready",()=>{
    client.user.setActivity("type -usage to get the resource usage of the machine");
       console.log("=+=+=+=+=+=+=+=+=+=+=+=");
       console.log("Name: Machine-Usage");
       console.log("Version: 1.0.0");
       console.log("Loaded: true");
       console.log("=+=+=+=+=+=+=+=+=+=+=+=");
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'usage') {
    mem.info().then(Ram => {
     drive.info().then(Disk => {
      cpu.usage().then(Cpu => {
         let time = os.uptime();
           let hours = secondsToHms(time);
             let DeviceIP = os.ip();
                let embed = new Discord.MessageEmbed()
                  .setAuthor("Falixnodes DE14 Information") 
                  .setThumbnail("https://cdn.glitch.com/6edec68b-6816-4250-9325-b720fb913050%2F0x0.png?v=1601738282858")
                  .setFooter("💕CodeCannibals Development")
                  .setColor("00B5FF") 
                  .setDescription("**__Node Statistics:__**```" + `Memory Usage: ${Ram.usedMemMb}MB/${Ram.totalMemMb}MB\nDisk Usage: ${Disk.usedGb}GB/${Disk.totalGb}GB\nNode: Online\nCpu Usage: ${Cpu}%\nUptime: ${hours}\nIp: ${DeviceIP}`+"```**__Physical Statistics:__**```" + `Cpu: ${cpu.count()}Cores | ${cpu.model()}` + "```") 
                message.channel.send(embed);
         }) 
       })
     }) 
   }
})

client.login("NzYxNDk4NTgwODcxNTQ0ODUy.X3be0Q.zaE9v1jIXAAgdCeB43TvKTWcaKo");

function secondsToHms(seconds) {
  if (!seconds) return '';
    let duration = seconds;
      let hours = duration / 3600;
        duration = duration % (3600);
 
  let min = parseInt(duration / 60);
    duration = duration % (60);
      let sec = parseInt(duration);
 
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (parseInt(hours, 10) > 0) {
    return `${parseInt(hours, 10)}h ${min}m ${sec}s`
  } else if (min == 0) {
    return `${sec}s`
  } else {
    return `${min}m ${sec}s`
  }
}