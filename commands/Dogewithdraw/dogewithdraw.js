/*CMD
  command: dogewithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("doge");
if(res.value() < 10 ){
Bot.sendMessage("❌ Minimum amount to withdraw 10 DOGE")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many DOGE you want to withdraw?_\n\n*Minimum:* `10 DOGE`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withdoge")
}
