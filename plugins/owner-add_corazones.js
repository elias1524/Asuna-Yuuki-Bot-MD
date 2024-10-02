import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*etiqueta 🏷️ ala persona para agregarle sus corazones ❤️*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw 'ingresa la cantidad de corazones ❤️ a agregar';
  if (isNaN(txt)) throw 'no se admiten símbolos solo números 🔢';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '*el número mínimo de corazones a agregar es 1 ❤️*';
  const users = global.db.data.users;
  users[who].corazones += dmt;
  m.reply(`*😶 𝐀𝐆𝐑𝐄𝐆𝐀𝐃𝐎*

𝐓𝐨𝐭𝐚𝐥: ${dmt} ❤️
𝐅𝐞𝐜𝐡𝐚: ${fecha} 📆`);
};
handler.command = ['añadircorazones', 'addc', 'darc', 'darcorazones'];
handler.rowner = true;
export default handler;