const express = require('express')
const app = express()
app.listen(9000)
const venom = require('venom-bot');
let image = '';
venom
    .create({
        session: 'session-gabriel', //name of session
        multidevice: false,
        logQR: false,
        useChrome: false,
        debug: false,
        devtools: false,
        disableSpins: true,
        disableWelcome: true,
        updatesLog: false
        // for version not multidevice use false.(default: true)
    }, (statusSession, session) => {
        image = statusSession;
        // console.log('Status Session: ', statusSession);
        //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
        //Create session wss return "serverClose" case server for close
        // console.log('Session name: ', session);
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });



app.get('/', async function (req, res) {
    res.send(`${image}`)
})



// Supports ES6
// import { create, Whatsapp } from 'venom-bot';


function start(client) {
    client.onMessage((message) => {
        if (message.isGroupMsg === false) {
            client
                .sendText(message.from, '🤖 Sou o boot do gabriel ele esta almoçando no momento.')
                .then((result) => {
                    //   console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    //   console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}