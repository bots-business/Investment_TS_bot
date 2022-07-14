/*CMD
  command: /dogew
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter tgid
  keyboard: 
  aliases: 
CMD*/

let msg = message;
Bot.run({
command:"/w",
options:{tgid:msg}
})
