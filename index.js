'use strict'

const fs = require('fs')
const enc = require('jsencrypt')

const bobPublicKey = fs.readFileSync('./bob/rsa_2048_pub.pem')
const bobPrivateKey = fs.readFileSync('./bob/rsa_2048_priv.pem')
const alicePublicKey = fs.readFileSync('./alice/rsa_2048_pub.pem')
const alicePrivateKey = fs.readFileSync('./alice/rsa_2048_priv.pem')

const bobsMessage = `${Date.now()} Hello Alice, How are you today?`
console.log(bobsMessage)
console.log(bobPublicKey)
