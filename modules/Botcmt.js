module.exports.config = {
    name: "botcmt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Cuty Rajput",
    description: "",
    commandCategory: "image",
    usages: "text",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("Add text first", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://zenzapis.xyz/creator/botcomment?text=${text}&apikey=7990c7f07144`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}