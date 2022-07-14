/*CMD
  command: cast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send message
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1360692093){
let msg = message 
Bot.sendMessageToAllPrivateChats(msg)
}else{
Bot.sendMessage("⛔you are not authorized to run this command")
}
