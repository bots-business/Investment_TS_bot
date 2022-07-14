/*CMD
  command: reinvest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 🔄 reinvest
CMD*/

var key = [[{title:"TRX",command:"trxreinvest"},{title:"DOGE",command:"dogereinvest"}]]
Bot.sendInlineKeyboard(key,"_Please Select Currency to Reinvest_ ")
