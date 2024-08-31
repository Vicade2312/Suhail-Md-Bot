const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078587401";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || " SUHAIL_17_58_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEZ5L0g5RnczMUI4Q1J3aWp4ZHVna3lLaDIrY2pTSWc0dUszTDZzdTFWMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDNQbnZLdmpRRjZqYU53VE9VeEY5QVwiLFxuICBcInBob25lSWRcIjogXCJhMDVjNzFmOS1kNzhjLTQ3NDItOTUxMy04ZDhhMjkxZjc2Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxMDEsXG4gICAgICAxMzEsXG4gICAgICAyMDksXG4gICAgICAyMzgsXG4gICAgICAxNDEsXG4gICAgICAzNCxcbiAgICAgIDEyNCxcbiAgICAgIDIxLFxuICAgICAgNTEsXG4gICAgICAyMjAsXG4gICAgICA1NCxcbiAgICAgIDI0MyxcbiAgICAgIDE4OSxcbiAgICAgIDE4NyxcbiAgICAgIDExNCxcbiAgICAgIDEzNixcbiAgICAgIDE4NSxcbiAgICAgIDI0MyxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTgsXG4gICAgICA0NyxcbiAgICAgIDE3NSxcbiAgICAgIDEyNyxcbiAgICAgIDE2OSxcbiAgICAgIDkwLFxuICAgICAgMjYsXG4gICAgICAyMzUsXG4gICAgICAyMzUsXG4gICAgICAxMixcbiAgICAgIDgwLFxuICAgICAgMTcyLFxuICAgICAgOTMsXG4gICAgICAxMTgsXG4gICAgICA3NyxcbiAgICAgIDUzLFxuICAgICAgMzYsXG4gICAgICAyNSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTlpUQ1o4UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODU4NzQwMTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwib2x1a2FkZXZpY3RvclwiLFxuICAgIFwibGlkXCI6IFwiMTc1OTU2NjczMTY3NDM0OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZZellrREVNaXp6YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyTzhGak0wQ2QzQ3EvTWFiV0lZTE9taHErN1RTL0J5QVJFaXE2eUhCV1ZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhpNWNNaVd5RllzbzZHUHBoNnd3QkFzTmpXaXY3VW5UcElRTHRpT1V0SzhTNis5SmVYMEZneHFQZHlENWE4WVZQSFBBTXMweFI4enFFUnhFb1RLY0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpFRUFQeUROMSs3L2xWU2E5YUtYL2N4Q09jWUJLZkREN1d5dzNBdlBCVUhkZitjdXZRZ01WWS9mOVFYTXpiYmo4UjF2OTZmcy9xWTIwNnNzWVhIaGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzg1ODc0MDE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MTI3MTE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
