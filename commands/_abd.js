/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send user id 
  keyboard: 
  aliases: 
CMD*/

var admin = "1194007250"
if (user.telegramid == admin) {
  var msg = message
  User.setProperty("id", msg, "integer")
  Bot.runCommand("/bb")
} else {
  Bot.sendMessage("You are Not admin")
}

