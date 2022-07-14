/*CMD
  command: dogewallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Back"){
Bot.runCommand("main_menu");
}else{
if(message.length==34){
Bot.sendMessage("🖊 Done: Your New wallet is\n "+"`"+message+"`");
User.setProperty("dogewallet" , message,"string")
}else{
Bot.sendMessage("🖊* Error: *This is not a DOGE address! Please send a correct address");
Bot.runCommand("/setwallet")
}
}
