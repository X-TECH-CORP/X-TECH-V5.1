//UBAH OWNER WM DAN LAINNYA DISINI BRO. 
const chalk = require("chalk")
const fs = require("fs")
global.ownernomer = "6283187035090" 
global.ownername = "delta" 
global.location = "Indonesia" 
global.ownergc = "-"
global.botname = "aika"
global.owner = ['6283187035090'] 
global.ownerNumber = ["6283187035090@s.whatsapp.net"]
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = { url: 'https://telegra.ph/file/bde2d1812ad4c58e10182.jpg' }
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' 
global.mess = {
    selesai: '⩽ \`succesfully\` ⩾', 
    owner: '⩽ \`Fitur ini khusus owner\` ⩾',private: '⩽ \`Fitur ini khusus private chat\` ⩾',
    group: '⩽ \`Fitur ini khusus group\` ⩾',wait: '⩽ \`Wait a minute\` ⩾',
}
//STICKER DAN LAINNYA
global.ownerweb = "https://www.youtube.com/@deltatech_i"
global.themeemoji = '👾'
global.wm = "t.me/deltaxcrash"
global.packname = "Sticker By"
global.author = "aika bot\n"
global.prefa = ['','!','.','🤡','⚡']
global.sessionName = 'session'
global.keyopenai ='isi key open ai mu'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
