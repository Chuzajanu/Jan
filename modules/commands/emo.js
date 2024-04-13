module.exports.config = {
    name: "emo",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Prem Pujaran",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "emo war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("😅😅😅😅😅");
setTimeout(() => {a({body: "😹😹😹😹😹" })}, 3000);
setTimeout(() => {a({body: "😂😂😂😂😂"})}, 5000);
setTimeout(() => {a({body: "😴😴😴😴😴" })}, 5000);
setTimeout(() => {a({body: "😉😉😉😉😉" })}, 5000);
setTimeout(() => {a({body: "😍😍😍😍😍" })}, 5000);
setTimeout(() => {a({body: "😋😋😋😋😋" })}, 5000);
setTimeout(() => {a({body: "🤣🤣🤣🤣🤣" })}, 5000);
setTimeout(() => {a({body: "😛😛😛😛😛" })}, 50000);
setTimeout(() => {a({body: "🤔🤔🤔🤔🤔" })}, 6000);
setTimeout(() => {a({body: "😝😝😝😝😝" })}, 6000);
setTimeout(() => {a({body: "🫣🫣🫣🫣🫣" })}, 5000);
setTimeout(() => {a({body: "🤤🤤🤤🤤🤤" })}, 5000);
setTimeout(() => {a({body: "😶😶😶😶😶" })}, 6000);
setTimeout(() => {a({body: "😸😸😸😸😸" })}, 6000);
setTimeout(() => {a({body: "🙀🙀🙀🙀🙀" })}, 7000);
setTimeout(() => {a({body: "😾😾😾😾😾" })}, 7000);
setTimeout(() => {a({body: "👻👻👻👻👻" })}, 7000);
setTimeout(() => {a({body: "😈😈😈😈😈" })}, 7000);
setTimeout(() => {a({body: "🧐🧐🧐🧐🧐" })}, 8000);
setTimeout(() => {a({body: "🤖🤖🤖🤖🤖" })}, 8000);
setTimeout(() => {a("😽😽😽😽😽")} , 8000);
setTimeout(() => {a({body: "😳😳😳😳😳 " })}, 9000);
setTimeout(() => {a({body: "😱😱😱😱😱" })}, 8000);
setTimeout(() => {a({body: "😯😯😯😯😯" })}, 9000);
setTimeout(() => {a({body: "😼😼😼😼😼"})} , 5000);




  
  }