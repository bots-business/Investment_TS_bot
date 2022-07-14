/*CMD
  command: /wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 

  <<KEYBOARD

  KEYBOARD
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
Bot.runCommand("wallet")
Bot.sendKeyboard("🔙 Back","✏️ *Send now your TRX Address* to use it in future withdrawals!" + "\n❗️ If you need a *Destination Tag*, send it together with the wallet, divided with a space. For example: \n`YourWalletHere` `12345`")
