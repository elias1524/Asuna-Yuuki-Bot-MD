let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !51
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiperu && !isAdmin && !isOwner && !isROwner) {
//if (!db.data.chats[m.chat].antiperu && m.isGroup) throw 0
let texto = `ESTE NÚMERO *@${m.sender.split`@`[0]}* ES UN PALOMERO\nADIOS AQUI NO COMEMOS PALOMA 🚩`

if (m.sender.startsWith('51' || '51')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}         

}}
export default handler