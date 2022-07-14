/*CMD
  command: trxreinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxreinvest
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
let balance = Libs.ResourcesLib.userRes("balance")
if(balance.value() < 1){
Bot.sendMessage("*❌ You can not reinvest right now:* " + "You need at least 1 TRX to reinvest!")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many TRX you want to Re-invest🔃?_\n\n*Minimum:* `1 TRX`"+"\n"+"*Maximum:* `"+balance.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to Re-invest🔃*")
}
Bot.runCommand("/bot")
