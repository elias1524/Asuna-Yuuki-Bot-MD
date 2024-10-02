import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://freeimage.host/i/dLqNdPV')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ Asᴜɴᴀ-Yᴜᴜᴋɪ\n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚩  Bienvenido a\n   │🚩  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, textbot, welcome, img, img, canal, estilo)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ Asᴜɴᴀ-Yᴜᴜᴋɪ\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚩  Se fue\n   │🚩 Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, textbot, bye, img, img, canal, estilo)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ Asᴜɴᴀ-Yᴜᴜᴋɪ\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚩  Se fue\n   │🚩 Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, textbot, kick, img, img, canal, estilo)
}}