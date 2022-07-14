/*CMD
  command: withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 📤 withdraw
CMD*/

var key = [[{title:"TRX",command:"/trxwithdraw"},{title:"DOGE",command:"/dogewithdraw"}]]
Bot.sendInlineKeyboard(key,"_Please Select Currency to Withdraw_ ")
