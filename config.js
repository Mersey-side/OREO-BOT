import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '254102028964', process.env.OWNER_NAME || 'Merseyside', true],
  ['919637987574', 'Shizo Techie ❤️✨', false]
]
global.mods = [0102028964]
global.prems = [0102028964]

global.author = process.env.OWNER_NAME || 'Merseyside'
global.botname = process.env.BOT_NAME || '𝕄𝕖𝕣𝕤𝕖𝕪𝕤𝕚𝕕𝕖✰❃✰'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'OREO-BOT 🥵'
global.stkowner = process.env.OWNER_NAME || '© Shizo The Techie'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by OREO-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
