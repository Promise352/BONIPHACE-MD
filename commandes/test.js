"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝔹𝕆ℕ𝕀ℙℍ𝔸ℂ𝔼 𝕄𝔻* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝔹𝕆ℕ𝕀ℙℍ𝔸ℂ𝔼 𝕋𝔼ℂℍ*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/1c0896918ea17651fef35.jpg,https://telegra.ph/file/3bb3cdb2a07168c287f5c.jpg,https://telegra.ph/file/f8a57806838acea510ecf.jpg,https://telegra.ph/file/c62bdf4806a1ed8ebc145.jpg,https://telegra.ph/file/669c5e73e23ebbe660cf3.jpg,https://telegra.ph/file/96f8dd2d7a87423a7c46f.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Hacking* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Thomas*'
      let varmess=z+d
      var img='https://telegra.ph/file/f660abdbefbae32daeb81.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
