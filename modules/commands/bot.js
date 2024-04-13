const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haaye Main Sadke jawa Teri Masoom Shakal pe" , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main Gareebon Se Bt Nhi kRti 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈" , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lungi🙂" , "Tu Band nhi Karoge kya?" , "Gali Sunoge kya" , "Are Band kar Brna ambani se bolke tera net bnd kra dungi" , "M hath jod ke Modi Ji Se Gujarish Karti hu teri madad krenge" , "Tujhe koi aur Kam nhi ha? Pura din Khate h Aur Messenger pe Bot Bot Karte ho" , "Cuty Ake tera band bja degi glt cammand mt dena " , "Abhi Bola Toh Bola Dubara Mat Bolna 😁" , "Bol De koi nahi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Dhire dhire pyar krungi tujhe😁" , "tujhe suhagrat manana nhi ati bs tu chumma le 🤣" , "I love you jaanu pyar me dhoka nhi dena 😒" , "ham dono ki suhagrat ke baare me kya khayal hai 🤣" , "I am baby dudu pilao🥺" , "chal khopche me btati hu 🤣" , "chal aaja suhagrat manate hai 😁" , "Are Bolo Meri Jaan Kya Hall Hai😚" , "Chup Reh, Nhi To Bahar Ake tera Dat Tod Dungi" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage("Hmm... Tu LanTi PhLe Ungli Kyun Ki 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Pehle Brush Karke aa ajeeb si smail aa ri hai", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("Areh Adi MaNav Zoo se Bahar Kaise Agya Tu. Firse Zoo M Ja. Bahar Kya Kar Rha H", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix kon lgayga hawa me sim likh diya yar. Moj krdi😒", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tumko", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud k0 kya legend samjhte ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Cuty") || (event.body.toLowerCase() == "Hasina") || (event.body.toLowerCase() == "Cuty") || (event.body.toLowerCase() == "@Cuty Rajput")) {
     return api.sendMessage( "Busy Hongi Work Me😑Main t0 Hoon yar 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝄟≛⃝👸🏻Cuty R𝚊𝚓put 🐰⃕⃝𒌋𝆺𝅥♥⃝🦋 ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷er 𝐌sCuty. Her 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100090097997937", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Cuty Rajput  ❤️ My Creator. She loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("She is Cuty Rajput. She Gives her name MsCuty everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "akshu") || (event.body.toLowerCase() == "krazy")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h🤩.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karungai lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gyi brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry Cuty maaf kr do ab nhi krugi 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand land mat kr yha brna niche fek dungi🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deti🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tareef karte h meri😍.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name me kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "Bot ke bacche")) {
     return api.sendMessage("️meri shadi nhi huyi bacche kaha se honge.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andhi Hu Dekh nhi sakti😜", threadID);
   };

   if ((event.body.toLowerCase() == "Vishu kon h") || (event.body.toLowerCase() == "Aadi kon h")) {
     return api.sendMessage("️Cuty khud  ki jan hai😍😍💞", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi bna lo. tumhe kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh achhi bna lo Meri Jaan", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Idhar Udhar Kya Dekh rahe ho itni bdi bot nhi dikhti kya 🙄 ", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karungi☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Jada Haso Mat, dant me lga hua sab dikh raha hai🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Ankho m Pyar, Dil me khumar, Pyar Toh Nhi kar Liya Mujhse🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Acchi hoti hu, Jab Apko Hasati hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami juwel") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা জুয়েল ভালো আছো?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }