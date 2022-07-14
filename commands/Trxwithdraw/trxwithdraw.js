/*CMD
  command: trxwithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 1 ){
Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many TRX you want to withdraw?_\n\n*Minimum:* `1 TRX`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withtrx")
}
