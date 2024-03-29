const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="esomokezie604@gmail.com"
global.location="Lagos,Africa."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Eff-Kae/Suhail-Md";
global.gurl  =process.env.GURL  || "https://i.pinimg.com/236x/c5/4a/9f/c54a9f82d24d181f2b064d6bc5b5adc9.jpg";
global.website=process.env.GURL || "https://github.com/Eff-Kae" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2347085169941" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347085169941";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347085169941";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.pinimg.com/236x/a1/5c/4c/a15c4c60f7d3bee8c585ec9ab3a46680.jpg,https://i.pinimg.com/236x/bf/32/8e/bf328e653141b88c570ade1e267618fa.jpg,https://i.pinimg.com/236x/ad/45/97/ad4597f4acb6498d11063f1fd00e5cd5.jpg,https://i.pinimg.com/236x/ac/6a/61/ac6a61a044e7e92c01d64c81122e158f.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "nul";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_46_03_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUp6V1pQNlJzKzBkampiU0J3cDJYWE5KcURRMktHWkRHSkNISnlYMktWUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVUbktZWU1vOW4xZXphMUIxREJkQ1JHd0JGT2JVWTVHNTBwMEt4SWxXSDA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUhONW1FdlZWSHd0MnVFa08wT3NZdGE0N2xlSnZIUUpDREFITUFFYTJudz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIktqOCsyV2dpWG80Q3NwbGxyTHRnUUlMT0ZiWFVRNTlMTUZBamtrZklqRFk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0xIUzRkR1pPM3dzaG04UDAyaVBjM1hqYURUUlpvYS9pZzdZYi8xZyttcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImkrajFyaG9lMGcyTXZxRXhQRVFUbEh5TnE5WHpwWWp0V3BOeVV3NFFTM289XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJT2FZY2hNRDRvTWNhUExPbjhWU05RT0dkMXJ6U1lNUG5EVDV1RE00MTJJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiblF3dmpIVjdKTk1Camw2dFhtNnN4MWt2ekVOVXVwc2gwT1JzODVIcFNFND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJKUDdEVjc0c3hIMG1mUEhPcE9BbVEyd3ZQY2lXVzZWc3BnUjRVa2lHTVFOdDJSN2hlNy9aVkJwVFRSNDlCSi96VzRqYUFnWkkxUW9SY2tkZGk1N0podz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDcsXCJhZHZTZWNyZXRLZXlcIjpcImROOGZCZk01M1htNHBBNWM3L2NHSklKVUJRYmNKZU1ab0RRY0tQakJnSjg9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIyempLZUVjTFNINkF5N0JUb0RBYjF3XCIsXCJwaG9uZUlkXCI6XCJiMGVlZjgzMi0xZmI1LTQwM2ItYmJmMC0wZGZiMGUxZGQ1ZmRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdBeTAzRzEwQWt0VXBKeWdYekZmZXZQNlQwVT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaW9MbHZsbnZTOVhYZU1pNnN2WDg4bGJoOHB3PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNML1p0NFVGRUtmUm5MQUdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRERYUmRGckJzcy9XZnBtYXBnVUIyNTF1NkJxSkpJMERsQlR6eGo5Zm5oST1cIixcImFjY291bnRTaWduYXR1cmVcIjpcInBjditVWVpPd04rbHNCcnIyOEVyYkY2T1gvaHRBL2ZBZU1LRXdKUEZmNDdNVm5UOGF0bjNhTnN3QldndjB2S1lhM1g0SEM1cll6a1diczVsOXFxUUJ3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiMEZqYzhIdkhvczc3QXkvK2lzTEpFZHZmdmhBYlJYbFVYSVg5Q1pQSnhyQmFPaGZXd0ZRdFBoWjQ3RFM4OTlQSUhWaXBIUFJrV2R4WHVFTGlwWkRWZ2c9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIzNDcwODUxNjk5NDE6M0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMzYzMzk1ODQ4MzE2MDY6M0BsaWRcIixcIm5hbWVcIjpcIuG0i+G0gOG0hyDgvJIg8J+qgFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDcwODUxNjk5NDE6M0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRdzEwWFJhd2JMUDFuNlptcVlGQWR1ZGJ1Z2FpU1NOQTVRVTg4WS9YNTRTXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTc0NTE5Nn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "🪀",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "🪀 ᴋᴀᴇ ༒ Made This " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🪀 ᴋᴀᴇ ༒",
  packname: process.env.PACK_NAME || "🪀 Vawulence ♥️",
  botname : process.env.BOT_NAME  || "🪀 ᴋᴀᴇ P.A",
  ownername:process.env.OWNER_NAME|| "🪀 ᴋᴀᴇ ༒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "tKn7vdg7gSLrYMLVFkQtrtQT",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "c79dbc4792b3f4f9755e1fcab42289fb",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "LUFFY"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = true; 
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
