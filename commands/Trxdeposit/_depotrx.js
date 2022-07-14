/*CMD
  command: /depotrx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxdeposit
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
let depo = Bot.getProperty("depowall"+user.telegramid)
let depot = "➕ *Welcome! Here you can start a new investment!*\n\n💵 We offer up to Investment Plans, choose the best for you!\n\n1️⃣ From *10 TRX to 10000 TRX*\n_150.00% daily for 1 day"

if(depo){
Bot.sendMessage("*...Generating your deposit address...*")
Bot.sendMessage("⚠️ _If you send less than 10 TRX, your deposit will be ignored!_\n\n✅ *Send the amount you want to invest to the following address:*")
Bot.sendMessage(""+depo+"")}else{
Bot.sendMessage("*...Generating your deposit address...*")
Bot.sendMessage("⚠️ _If you send less than 10 TRX, your deposit will be ignored!_\n\n✅ *Send the amount you want to invest to the following address:*")
let permtrxwallet = User.getProperty("permtrxwallet");
Bot.sendMessage("`" + permtrxwallet + "`") ;}
