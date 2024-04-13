const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Ram",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by Cuty Rajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "nôprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["सिया वर रामचंद्र की जय " , "जय श्री कृष्णा " ,"राम राम जी 💖🙂" , "जय जय सिया राम " , "राम सिया राम सिया राम जय जय राम" , "जय विष्णु देव 🥰" , "माता वैष्णों देवी की जय 😍" , "राम राम बोला करो जी 💖" , "जय महाकाल " , "गुडमॉर्निंग क्या है राम राम बोला करो" , "हर हर महादेव" , "जय श्री राम 💖🥰" , "राम राम जय हो सिया राम की " , "जय माता दी 💖" , "💖💖💖💖💖💖🥰" , "जय भोलेनाथ 💖🥰" , "कौन कहता है भगवान आते नहीं तुम मीरा के जैसे बुलाते नहीं 🥺" , "   " , "जय श्री राम जय श्री कृष्णा जय विष्णु देव 💖🥰" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "Gm") || (event.body.toLowerCase() == "Gd morning")) {
     return api.sendMessage("Ram Ram Bola Kar Gm Gd morning kya hota hai 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "🧐")) {
     return api.sendMessage("Kaatil nighae Katal karoge karoge kya 😸", threadID);
   };
   
    if ((event.body.toLowerCase() == "shona") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("DonT Call me Babu Shona Dhaniya pudina", threadID);
   };

   if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage("Meri Boss Cuty Rajput hai Wo Busy Hogi Unhe Disturb Na Karna🧐", threadID);
   };
  
   if ((event.body.toLowerCase() == "1") || (event.body.toLowerCase() == "2") ||(event.body.toLowerCase() == "3") || (event.body.toLowerCase() == "4")) {
     return api.sendMessage("Yaha Ginti kar Rhe School Me So rahe The Kya🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bhag") || (event.body.toLowerCase() == "Bhag")) {
     return api.sendMessage("Tu Bhag le Peheli Fursat Me ", threadID);
   };

   if ((event.body.toLowerCase() == "Bakwas bot") || (event.body.toLowerCase() == "bekar bot")) {
     return api.sendMessage("sabse bade bekar tum ho me nahi 😆", threadID);
   };

   if ((event.body.toLowerCase() == "Namaskaar 🙏🏻) || (event.body.toLowerCase() == "hey")) {
     return api.sendMessage("Radhe Radhe Bolo Jada Better Lagega", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi zinda hai")) {
     return api.sendMessage("Nahi Koi Nahi Hai Me Bhi nahi hu", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "Good Bye") || (event.body.toLowerCase() == "good bye")) {
     return api.sendMessage( "Ja Na Bye Hi Karte Rahoge Kya Yaha Pe😒",threadID);

       
   };

   if ((event.body.toLowerCase() == "Queen") || (event.body.toLowerCase() == "love yours owner")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝄟≛⃝👸🏻Cuty Rajput 🐰⃕⃝𒌋𝆺𝅥♥⃝🦋 ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷er 𝐌sCuty. Her 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100090097997937", threadID);
   };

   if ((event.body.toLowerCase() == "who is your creater") || (event.body.toLowerCase() == "Owner ko bula")) {
     return api.sendMessage("Cuty Rajput  ❤️ My Creator. She loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "cute") || (event.body.toLowerCase() == "Hasina")) {
     return api.sendMessage("Aare Sharm karo Bhagwan Se Daro Kuch Aacha karo life me", threadID);
   };

   if ((event.body.toLowerCase() == "bhavna") || (event.body.toLowerCase() == "Bhawna")) {
     return api.sendMessage("Bhavna ko yaad kyun kar rhe wo busy hogi is wakt.", threadID);
   };

   if ((event.body.toLowerCase() == "usko bhejo") || (event.body.toLowerCase() == "tumhare boss se bat karni hai")) {
     return api.sendMessage("thik hai aarhi hai boss meri bhagna nahi kahi tab tak", threadID);
   };

   if ((event.body.toLowerCase() == "shant") || (event.body.toLowerCase() == "Shanti") || (event.body.toLowerCase() == "silent") || (event.body.toLowerCase() == "keep quiet")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gyi brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "boss se bakchodi") || (event.body.toLowerCase() == "Boss se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry Cuty maaf kr do ab nhi krugi 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "lodi") || (event.body.toLowerCase() == "chutiya") || (event.body.toLowerCase() == "laat") || (event.body.toLowerCase() == "boot khayegi")) {
     return api.sendMessage("Mere Muh se Nikal gayi Maaf Kardo Ji 😭. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deti🙈", threadID);
   };

   if ((event.body.toLowerCase() == "wah") || (event.body.toLowerCase() == "thanks") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Hasina")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tareef karte h meri😍.", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Bhot Hi Confusing character ho Yar tum Kya Reply Du Samjh Nhi aarha🤨", threadID);
   };

   if ((event.body.toLowerCase() == "ha") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("️oky Tata Bye Bye Ho Gya Khatm Karo ab Pakao Mat", threadID);
   };

   if ((event.body.toLowerCase() == "go") || (event.body.toLowerCase() == "ja") || (event.body.toLowerCase() == "Jao")) {
     return api.sendMessage("️Tum Jao Me Kyun Jau Me Nhi Jaungi", threadID);
   };

   if ((event.body.toLowerCase() == "ht joker") || (event.body.toLowerCase() == "Joker")) {
     return api.sendMessage("️Ek Joker Dusre ko Joker Bol Raha 🤣.", threadID);
   };

   if ((event.body.toLowerCase() == "kaha rehti ho") || (event.body.toLowerCase() == "your address")) {
     return api.sendMessage("️ShaiTan Gali KhaTra Mahal Shamshan Ke Samne🤣", threadID);
   };

   if ((event.body.toLowerCase() == "Cuty kaun") || (event.body.toLowerCase() == "Cuty kon hai")) {
     return api.sendMessage("️My Creater Cuty She Is A best girl creater", threadID);
   };

   if ((event.body.toLowerCase() == "bot do") || (event.body.toLowerCase() == "kaise banta hai bot")) {
     return api.sendMessage("️Jake Khud pata Karlo Meri Boss Ko Kyun Pareshan Karte Ho", threadID);
   };

   if ((event.body.toLowerCase() == "🌞") || (event.body.toLowerCase() == "🌝")) {
     return api.sendMessage("️Chehra Jal gya Kya aisha Muh Kyun 🤨", threadID);
   };
  
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "☺️")) {
     return api.sendMessage("️Bhot Khus dikhai de Rahe ho Bat Kya Hai 😮 ", threadID);
   };

   if ((event.body.toLowerCase() == "Koi nhi apna") || (event.body.toLowerCase() == "sab matlbi hai") || (event.body.toLowerCase() == "apna koi nahi")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karungi☺️", threadID);
   };

   if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤡")) {
     return api.sendMessage("Bas Isi tarah Muh Pe Lagam Laga Ke Rakha Karo", threadID);
   };

   if ((event.body.toLowerCase() == "😆😆😆") || (event.body.toLowerCase() == "😄😄😄") || (event.body.toLowerCase() == ""😅😅😅) || (event.body.toLowerCase() == "😃😃😃")) {
     return api.sendMessage("HasTe HasTe NipaT Jaoge ItNa Mat haso", threadID);
   };

   if ((event.body.toLowerCase() == "voice") || (event.body.toLowerCase() == "bot call aao") || (event.body.toLowerCase() == "call aao bot") || (event.body.toLowerCase() == "voice do") || (event.body.toLowerCase() == "awaaz sunao")) {
     return api.sendMessage("Me Gungi hu Bol Nahi Sakti 🤥", threadID);
   };

   if ((event.body.toLowerCase() == "tum kab sad hoti ho") || (event.body.toLowerCase() == "pareshan")) {
     return api.sendMessage("Me Kabhi Sad nhi Hoti Kyunki Me Ek RoBoT Hun Apko mujhse Kuch Sikhna Chaiye", threadID);
   };

   if ((event.body.toLowerCase() == "kya tum mujhe pyar karogi") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("iam In Love With you i love you", threadID);
   };

   if ((event.body.toLowerCase() == "tum sone kab jaogi") || (event.body.toLowerCase() == "sone Jao")) {
     return api.sendMessage("Apke Sone Ke adhe Second bad hi me so jaungi ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "khana khao") || (event.body.toLowerCase() == "khana khaogi bot")) {
     return api.sendMessage("Me Khana Nhi Khati Apko khate huye Dekh kar hi mera pet bhar jata hai ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "iam sanatani") || (event.body.toLowerCase() == "me Indian hu")) {
     return api.sendMessage("Me bhi Indian Hu i Love My India😘", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Ram") == 0 || (event.body.indexOf("Ram") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }