module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ManhG",
  description: "Xem prefix của BOT",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "ManhG") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`Ye Lo pgl insan Mera Prefix ⇉ [ ${prefix} ]                  ༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐀𝐀𝐃𝐈 𝐆𝐔𝐏𝐓𝐀☜ \n༺༒ 𝐇𝐚𝐭𝐞𝐑𝐬 𝐊𝐢𝐢 asi ki tasi' )
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️𝐀𝐀𝐃𝐈 𝐆𝐔𝐏𝐓𝐀10.7 𝐢𝐧𝐱𝐢𝐃𝐞 𝐁𝐞𝐭𝐚 𝐆' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
}