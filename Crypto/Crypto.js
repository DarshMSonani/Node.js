// Hash

// const { createHash } = require('crypto');

// function hash(input) {
//     return createHash('sha256').update(input).digest('base64');
// }

// let password = "Hello@123";
// const hash1 = hash(password);
// console.log(hash1);

// Salt

// const { match } = require('assert');
// const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

// function singup(email, passwored) {
//     const salt = randomBytes(16).toString('hex');
//     const hashedPassword = scryptSync(passwored, salt, 64);

//     const user = { email, passwored: `${salt}:${hashedPassword}`}
// }

// function login(email, passwored) {
//     const user = users.find( v => v.email === email);

//     const [salt, key] = user.passwored.split(":");
//     const hashedBuffer = scryptSync(passwored, salt, 64);

//     const keyBuffer = Buffer.from(key, 'hex');
//     const match = timingSafeEqual(hashedBuffer, keyBuffer);
// }

// if (match) {
//     return 'Login Success!'
// }
// else {
//     return 'Wrong Password';    
// }

// HMAC

// const { creatHmac } = require('crypto')

// const key = 'super-secret!';
// const messege = "Ram";

// const hamc = creatHmac('sha256', key).update(messege).digest('hex');

// console.log(hamc);

// const key2 = 'other-passwored';
// const hamc2 = creatHmac('sha256', key2).update(messege).digest('hex');

// Symmetric Encryption

// const { creatCipheriv, randomBytes, creatDeCipheriv, Cipher } = require('crypto');

// const messege = 'Ram Ram';
// const key = randomBytes(32);
// const iv = randomBytes(16);

// const cipher = creatCipheriv('aes256');

// const encryptedMessage = cipher.update(messege, 'utf-8', 'hex') + cipher.final('hex');

// Decrypt

// const decipher = creatDeCipheriv('aes256', key, iv);
// const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

// KeyPairs

// const { generateKeyPairSync } = require('crypto');

// const { privateKey, publicKey } = generateKeyPairSync('rsa', {
//     modulesLength : 2048,
//     publicKey: {
//         type: 'spki',
//     format: 'pem',
// },
//     privateKeyEncoding: {
//         type: 'pkcs8',
//         format: 'pem',
// },
// });

// console.log(publicKey);
// console.log(privateKey);

// module.exports = {
//     privateKey, publicKey
// };

// Asymmetric Encryption

// const { publicEncrypt, privateDecrypt} = require('crypto');
// const { publicKey, privateKey} = require('./Keypair');

// const messege = "Ram Ram";

// const encryptedData = publicEncrypt(
//     publicKey,
//     Buffer.from(messege)
// );

// console.log(encryptedData.toString('hex'));

// const decryptedData = privateDecrypt(
//     privateKey,
//     encryptedData
// );

// console.log(decryptedData.toString('utf-8'));

// Signing

const { createSign, createVerify, verify} = require('crypto');
const { publicKey, privateKey } = require('./KeyPair');
const messege = "Ram Ram Ram";

const signer = createSign('rsa-sha256');
signer.update(messege);

const signature = signer.sign(privateKey, 'hex');

const verifier = createVerify('ras-sha256');

verifier.update(messege);

const isVerified = verifier.verify(publicKey, signature, 'hex');