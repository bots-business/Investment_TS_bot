/*CMD
  command: /w
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter message 
  keyboard: 
  aliases: 
CMD*/

let msg = message 
let tgid = options.tgid
Bot.sendMessageToChatWithId(tgid,msg)
