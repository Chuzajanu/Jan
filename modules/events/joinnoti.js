module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲«
  🅹🅰︎🅸 🆂🅷🆁🅴🅴 🅺🆁🅸🆂🅷🅽🅰︎☘️
<<<<<------------------------------>>>>>  

𝐁𝐎𝐓 𝐀𝐏𝐏𝐑𝐎𝐕𝐀𝐋 𝐀𝐋𝐋𝐎𝐖 𝐈𝐍 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏✘
<<<<<------------------------------>>>>>

TO VIEW ANY COMMAND
\n\nUse ${global.config.PREFIX}help to see commands List.\n\nexample :\n\n${global.config.PREFIX}shayri (text)\n\n${global.config.PREFIX} Owner\n\n${global.config.PREFIX}Help2(all commands)\n\n${global.config.PREFIX}info (admin information)\n
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER\n\n
༻𝐎𝐖𝐍𝐄𝐑:- ☞cuty 𝐑𝐀𝐉𝐏𝐔𝐓☜ \n\n༺
༒ 〠𝐇𝐀𝐒𝐈𝐍𝐀〠.༒

༒𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤𝐬༒:- ☞ https://www.facebook.com/profile.php?id=100090097997937 ☜ 

 😹🙈🌟...!
*🅰︎🅰︎ 🅹🅰︎🅾︎ 🅹🅸 🆆🅴🅻🅲🅾︎🅼🅴*🙂💔 
`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "𝐇𝐞𝐥𝐥𝐨𝐰 𝐁𝐚𝐁𝐲💫 {name}, 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗛𝗼 𝗚𝗮𝘆𝗮 𝗔𝗽𝗸𝗮 𝗨𝗺𝗺𝗮𝗵 𝗨𝗺𝗺𝗮𝗮𝗵 𝗞𝗮𝗿𝗸𝗲🙈⭐💁❤️\n\n𝘾𝙧𝙚𝙙𝙞𝙩: 𝐌𝐄𝐄𝐑𝐀 𝐑𝐀𝐉𝐏𝐔𝐓 " : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
}
