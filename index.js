'use strict'

const fs = require('fs')
const moment = require('moment')
const JsEncrypt = require('node-jsencrypt')
const encryptor = new JsEncrypt()
const decryptor = new JsEncrypt()

const msg = (input) => {
  return `${moment().format('YYYYMMDD-HH:MM:SS')}: ${input}`
}

const bobPublicKey = fs.readFileSync('./bob/rsa_2048_pub.pem')
const bobPrivateKey = fs.readFileSync('./bob/rsa_2048_priv.pem')
const alicePublicKey = fs.readFileSync('./alice/rsa_2048_pub.pem')
const alicePrivateKey = fs.readFileSync('./alice/rsa_2048_priv.pem')

// encrypt a message from bob to alice, with alices public key
encryptor.setPublicKey(alicePublicKey.toString())
const message = msg('Hello Alice, How are you today?')
const cipherTextBob = encryptor.encrypt(message)
console.log('encrypted text is ', cipherTextBob)

// decrypt it, using alices private key
decryptor.setPrivateKey(alicePrivateKey.toString())
const decryptedMessage = decryptor.decrypt(cipherTextBob)
console.log('decrypted text is ', decryptedMessage)
