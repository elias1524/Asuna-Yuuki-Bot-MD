const ro = 30;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob2 + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob2 < 7200000) {
  conn.reply(m.chat, `*🚩 Hey! esperá ${msToTime(time - new Date())} para volver a robar*`, m, rcanal);
  return;
  }
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) {
  conn.reply(m.chat, `*🚩 Etiqueta a alguien para robar.*`, m, rcanal)
  return;
    };
  if (!(who in global.db.data.users)) { 
  conn.reply(m.chat, `*🚩 El o la usuario no se encuentra en mi Base de datos 😕.*`, m, rcanal)
return;
  }
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.corazones < rob) return conn.reply(m.chat, `😔 @${who.split`@`[0]} tiene menos de *${ro} Corazones ❤️*\nNo robes a un hambriento 🥺`, m, {mentions: [who]});
  global.db.data.users[m.sender].corazones += rob;
  global.db.data.users[who].corazones -= rob;
  conn.reply(m.chat, `*🚩 Robaste ${rob} Corazones ❤️ a @${who.split`@`[0]}*`, m, {mentions: [who]});
  global.db.data.users[m.sender].lastrob2 = new Date * 1;
};
handler.help = ['rob2'];
handler.tags = ['rpg'];
handler.command = ['robar2', 'rob2'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
    }
