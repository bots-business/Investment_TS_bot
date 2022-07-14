/*CMD
  command: /add
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let doge = Libs.ResourcesLib.userRes("doge")
let trx = Libs.ResourcesLib.userRes("balance")
doge.add(100)
trx.add(100)
