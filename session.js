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
//  * @author       : MR.SDK
//  * @youtube      : https://www.youtube.com/@sdk7254
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by MRSDK//GitHub: @sdkoffcial72
//WhatsApp: +94704968008
//Want more free bot scripts? Subscribe to my Master YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: sdkoffcial72
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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FnbGdYcFVzQWJqcmVvT0U4UGtkU01VaHRuclZvVUxQMDVodkdEb2ozVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHoyT29DMU5PK1hEYThCZFJzbkQ5bFN2NkJkem4ycnNhZlY4Q0M0cGRncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQzFaZ09Da1dhc29Gdmk1d2E3RTVCTUpMQTRmUURreXc0bGs4NlVDUVY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSGc4RFgxMjdVeTJ1VXRoN0JLOHBMdDJ0MkZtZW94WUpVb2FTZHBnNTBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKOGR5Z3AraDMxcm80aDgyTllSTEV3dkVuQXA1NDV6UVQxOVlJc2Q5M1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhkdCtzRU91dk0rU1JqajZWbUxHWGt4UGVMNUFjN1QzeUxZWXFoeWpZVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZkVW52elVCRFlHZDRNN2l1MnlJYWx1Y3Y0TDRrTXllZU1VME5SNWVsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDk4elRHbmYxNDd5UVYvOGNpN1hqVUxzZXd1U3pqdzcwK01odzdVU1J3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZYcGRKZXp1ckNUV1NVYk1VRnFIaHU0RXF5SGQ0MU9rYU9wN29CM0U4c0hWVGlOY2VHMmJvZEwwWFZVNnhmZ2ZiUnZZMWhldFRQeHBKTDZSU3ZxdkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJuU09WYUpsZDYzSUJscVYvdEplNXBFdUttZ1hJUGUzV2U3V0VJaCtQQjI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNOaTJ1NGtIRU0renZNVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJROEJ4WjV1aVRNSkVJZjFBeTBLeWR1Rzc4RW5DZzUzZy9xMFExdXJqdkJ3PSIsImFjY291bnRTaWduYXR1cmUiOiJtWlJXVjNTeUdQQkpDSHJGandPOXdpd0pvWFFKR0lMR2M4ZWNjWFBLZlFwenpQZmhtS3h2akFGWWFEYUt4U2gyUk1LVWVWWllheGswaUN6VzJ5N0lBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibjdOaUExbU1UcmppL0Y3TEZ5RzMvVXJCNzhhS2JtUTBHbk5pSUlvSGx5UjFvZktUQmdubkQwUHp1dzdRTnJuRlF1aExQYVd1ZW1YRDdRL1RHNy9GQlE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzA0OTY4MDA4OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTEzNDI1MDA4MTkxNzA6NEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQ5NjgwMDg6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUEFjV2Vib2t6Q1JDSDlRTXRDc25iaHUvQkp3b09kNFA2dEVOYnE0N3djIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzMDU4NzUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFERzQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94704968008",
  PASSWORD: 
    process.env.PASSWORD || "597111",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94740031178", "94704968008"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
