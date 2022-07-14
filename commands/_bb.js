/*CMD
  command: /bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How much balance to add?
  keyboard: 
  aliases: 
CMD*/

var admin = "1194007250"
if (user.telegramid == admin) {
  var amount = parseFloat(message)
  var tgid = User.getProperty("id")
var res = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
  res.add(parseFloat(amount))
  Bot.sendMessage(
    "*Succesfully Amount Added Balance* \n👤 User: " +
      tgid +
      "\n💰 Amount:" +
      amount
  )
} else {
  Bot.sendMessage("You are Not admin")
}

