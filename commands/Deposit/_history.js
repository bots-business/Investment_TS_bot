/*CMD
  command: /history
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 📒history
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="🕝Your All Investments"+"\n-------------------------------------------------------------------------------------"+"\nNo Investments Found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("🕝Your All Investments\n\n"+his)
}
