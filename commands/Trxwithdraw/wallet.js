/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="🔙 Back"){
Bot.runCommand("main_menu");
}else{
if(message.length==34){
Bot.sendMessage("🖊 Done: Your New wallet is\n "+"`"+message+"`");
User.setProperty("wallet" , message,"string")
}else{
Bot.sendMessage("🖊* Error: *This is not a TRX address! Please send a correct address");
Bot.runCommand("/setwallet")
}
}
