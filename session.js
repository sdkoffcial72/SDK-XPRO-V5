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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0c3VGlZbFNRbDl4bVVqWXFQREJJRzc2aFdlZm9LQStoaHZQRW5BOVVtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjVEdytXRVZkYkQxWWZPMkcwVk5ERkx4MnA1V3V4SksvdFd0bnFjUFF4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrREpMai9EUU9CNHpYajhuNUhEMTJLdUxsUlVPU3cyUU5sd1RrRjRXOGxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0QVpGWXA0UTVWSmthM3k1a3dMNkpiWFdWaU8yMlNuSVZUeWxXcDRzeUc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMNVl3ZENROXVNa3FIZHFobG9IVk1hVUNYWEVHZmtsTFVidDRRQ3hLVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVnWDhqY01nNTBMM3BIaFZUTjJyZDVVdXVsbVRpMGRTZTNvKzJDNVhjUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0U4K21sQnRVRmFUZllQMnlIU25YNi82UDdPNFBFMjBTM1EyczJzUVJHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianFNNzlnd1hzTWJ3b0srSWpFVGg2ekFHQkdxS1RJZlNKUWNSZEIxd1Rocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnSURvTGJGd1lVMFY0WUM2OWRKbDlycHU5VkhGZDJ2TUJWZzkyNDNtMEhQVlJBb2dLOXJDWW1oVEp4OHE2ZUczY1ZVaVJDVVpPdTZBZC9xYmdzZkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiY2RHTUFnbSsxcGFEUmtHMkJUZEUvZ2d1YWlIOEVjYS9DaG5lbm4xem5yaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOmZhbHNlLCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmkydTRrSEVKYmZ2TVVHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUThCeFo1dWlUTUpFSWYxQXkwS3lkdUc3OEVuQ2c1M2cvcTBRMXVyanZCdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUUzcGVLcDBkT0sxWlREQlZRcVVjRENNeE51REZYb3NUSURwbGdteGM5elBUMnRtc3ZaVG45T0Q2dHFIUWdIZ2Q4bDhVMFoxbnAxYlhTcHBhZEpCQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjloQUVkL2JFZGdHZDVBT2lKMTErUC95S2doNkpSdFdwTldKdE92UlpzZzQ2eEp5YXRnSGxDN2Q3N2ZyOXBEcGdpMlZOVFd3Q3A5SjJ5SXZFUnZWUkFnPT0ifSwibWUiOnsiaWQiOiI5NDcwNDk2ODAwODo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTUxMzQyNTAwODE5MTcwOjVAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA0OTY4MDA4OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVBBY1dlYm9rekNSQ0g5UU10Q3NuYmh1L0JKd29PZDRQNnRFTmJxNDd3YyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MzExNDUwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREc1In0=",
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
