/*CMD
  command: dogereinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogereinvest
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
let balance = Libs.ResourcesLib.userRes("doge")
if(balance.value() < 10){
Bot.sendMessage("*❌ You can not reinvest right now:* " + "You need at least 10 DOGE to reinvest!")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many DOGE you want to Re-invest🔃?_\n\n*Minimum:* `10 DOGE`"+"\n"+"*Maximum:* `"+balance.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to Re-invest🔃*")
}
Bot.runCommand("/botdoge")
