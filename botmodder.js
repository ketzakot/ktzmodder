 { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {
        })

        fs.existsSync('./ketzaOFC.json') && client.loadAuthInfo('./ketzaOFC.json')

        client.on('connecting', () => {
        console.log('Conectando')
        })

        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./ketzaOFC.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./package.jsonson') && client.loadAuthInfo('./package.jsonson')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./package.jsonson', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (ketzaOFC.) => {
try {	  
if (!ketzaOFC.hasNewMessage) return
if (!ketzaOFC.messages) return
if (ketzaOFC.key && ketzaOFC.key.remoteJid == 'status@broadcast') return

sam = ketzaOFC.messages.all()[0]
if (!ketzaOFC.message) return
global.blocked
ketzaOFC.message = (Object.keys(ketzaOFC.message)[0] === 'ephemeralMessage') ? ketzaOFC.message.ephemeralMessage.message : ketzaOFC.message
const from = ketzaOFC.key.remoteJid
const type = Object.keys(ketzaOFC.message)[0]        
const quoted = type == 'extendedTextMessage' && ketzaOFC.message.extendedTextMessage.contextInfo != null ? ketzaOFC.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(ketzaOFC.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = ketzaOFC.message.conversation || ketzaOFC.message[type].caption || ketzaOFC.message[type].text || ""
chats = (type === 'conversation') ? ketzaOFC.message.conversation : (type === 'extendedTextMessage') ? ketzaOFC.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && ketzaOFC.message.conversation.startsWith(prefix)) ? ketzaOFC.message.conversation : (type == 'imageMessage') && ketzaOFC.message.imageMessage.caption.startsWith(prefix) ? ketzaOFC.message.imageMessage.caption : (type == 'videoMessage') && ketzaOFC.message.videoMessage.caption.startsWith(prefix) ? ketzaOFC.message.videoMessage.caption : (type == 'extendedTextMessage') && ketzaOFC.message.extendedTextMessage.text.startsWith(prefix) ? ketzaOFC.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = ketzaOFC.key.fromMe ? client.user.jid : isGroup ? ketzaOFC.participant : ketzaOFC.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = ketzaOFC.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = ketzaOFC.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : sam})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))a
