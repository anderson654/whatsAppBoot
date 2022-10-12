const express = require('express')
const app = express()
app.listen(3000)
const venom = require('venom-bot');
venom
    .create({
        session: 'session-name', //name of session
        multidevice: true // for version not multidevice use false.(default: true)
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });






// Supports ES6
// import { create, Whatsapp } from 'venom-bot';


function start(client) {
    app.get('/', async function (req, res) {
        await client
            .sendText('5541985071326@c.us', '👋 Eu sou fodaaaaaaaa fodaaa fodaa foda (leia com som ded ecoooo)!')
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        res.send('Ué')
    })
}