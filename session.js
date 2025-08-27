//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RKT2x4bWtmWFZHdzdqQnAra0cxUzJPNllDNzB4d3NudEUwYXdjTzBtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlJNTUtUT0NMTCs4anQ0aWFRSnNMaE5iTFBKMytBNmpKQW45UEtJNUdROD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTzRielZpWWhLZU5GUnlobDNTZnJvNGdQRGZONzFKb0N2NkZBdkhWMFZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTTAwREFQM1owTkIrZ1FzSllRMTh6SklweXo2bFRnbzJlRC9CTWRxR2h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPRTh4K2FHUTZwK1pwbGQvR0NMUkxwL0d3Tklpdm5yS1VscXNrU1hJM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR4YnBQZE5ubVlEdG1lTVorSTh5SE54bTR5STJiR01GZUQxSVRyZjdKeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURXemtSRGMvai9hS3JMV0dyQ1VoVmZDaGlLYWZFR2pGRFpEbFNwWWFXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjcwbnVyUmV5RlZuNjUvbGZDRDY5L0g5eUpnSW5TTlFIdEtmLzZhODR3ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9VakFlNHJhREtBOVRTci9PWnZXQmwrcmx3Q3k2K3crTmw0RWR1S0JMTUhNTTFXcXAzMWtmZW15UnhWYVdMNUZvSStZUER3dEI5UVJuK2lRSmozSkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJ6VXhPaFJjRjNCWnhHNzNqZHowSitIWUdWWHlleDFqV2o1Y1F6QkVZL0VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0OTY4MDA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzQTBDMkFGRjJEOTVDMDYwRjIxOTJFQzM4OTlDQzQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYyOTg4ODN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA0OTY4MDA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFBMzI3MUExMkREMzkwOThFRUQ4QTFCOTNFRTExRkU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYyOTg4ODN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05pMnU0a0hFUDc4dThVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlE4QnhaNXVpVE1KRUlmMUF5MEt5ZHVHNzhFbkNnNTNnL3EwUTF1cmp2Qnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQ3aWNiYTE3WWlIZVpwTXhyZ0p5djhQNnZ6eEROMFZtQWdKLy9Cc0pSdkFPTGQwYlcyY0MvMU10bS9wQit5aHo5cHljZ0NUUUdaZ3ZsU1BDSUFRV0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhT2kwYWlzV21lQ1lmd1RRVEl4Wi9Cb1pyakp5YStYUmt6WmsvbFpFaFJ0UVIwSDRyNTNBMmRyNTBQT2lvK21yMVVZNUEyNjVxa0hvNHRZUU1FcndCdz09In0sIm1lIjp7ImlkIjoiOTQ3MDQ5NjgwMDg6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1MTM0MjUwMDgxOTE3MDozQGxpZCIsIm5hbWUiOiLwn6SWIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA0OTY4MDA4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVBBY1dlYm9rekNSQ0g5UU10Q3NuYmh1L0JKd29PZDRQNnRFTmJxNDd3YyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2Mjk4ODgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURHMiIsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
