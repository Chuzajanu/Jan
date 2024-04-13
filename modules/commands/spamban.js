 const num = 75 //số lần spam bị ban -1, ví dụ 5 lần gì lần 6 sẽ bị ban
 const timee = 120 // trong thời gian `timee` spam `num` lần sẽ bị ban
 module.exports.config = {
  name: "spamban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "NTKhang", //fix get by  D-Jukie
  description: ``,
  commandCategory: "System",
  usages: "x",
  cooldowns: 5
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Automatically ban users if spam ${num} Time/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 7
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*60)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${num} lần/${timee}s` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("𝐀𝐩𝐤𝐨 𝐛𝐨𝐓 system 𝐬e 𝐛𝐚n 𝐤𝐫 𝐝𝐢𝐘𝐚 𝐠𝐲𝐚 𝐡𝐚𝐢 𝐔𝐧𝐛𝐚𝐧 𝐤 𝐥𝐢𝐘𝐞 𝐚𝐝𝐦𝐢𝐧 𝐬e 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐤𝐫e owner likho isi grup me phir owner id link aayega 𝐨𝐫 𝐎𝐰𝐧𝐞𝐫 𝐬e 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐤ro🙂🌿💔\nID: " + senderID + " \nName: " + dataUser.name + `\nReason: spam bot ${num} time/${timee}s\n\n✔Reported to admin bot`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`Spam offenders ${num} Time/${timee}s\nName: ${dataUser.name} \nID: ${senderID}\nID Box: ${threadID} \nNameBox: ${namethread} \nAt the time: ${timeDate}`, 
          ad);
    }
    })
    }
  }
};