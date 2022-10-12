const express = require('express')
const app = express()
app.listen(3000)
const venom = require('venom-bot');
let image = '';
venom
    .create({
        session: 'session-gabriel', //name of session
        multidevice: true,
         // for version not multidevice use false.(default: true)
    },(statusSession, session) => {
        image = statusSession;
        console.log('Status Session: ', statusSession);
        //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
        //Create session wss return "serverClose" case server for close
        console.log('Session name: ', session);
      })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });






// Supports ES6
// import { create, Whatsapp } from 'venom-bot';


function start(client) {
    console.log(client);
    client.onMessage((message) => {
        if (message.isGroupMsg === false) {
          client
            .sendText(message.from, '🤖 Sou o boot do gabriel ele esta almoçando no momento.')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
      });
    app.get('/', async function (req, res) {
        await client
            .sendText('5541985071326@c.us', '👋🤖 Eu sou fodaaaaaaaa fodaaa fodaa foda (leia com som ded ecoooo)!')
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        res.send(image)
    })
}