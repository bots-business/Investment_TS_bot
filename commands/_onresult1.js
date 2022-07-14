/*CMD
  command: /onresult1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
Bot.runCommand("main_menu");
}else{
Bot.sendMessage("*💡 To use this bot you must join this channel*: @TrxInvest2xPay");
}
