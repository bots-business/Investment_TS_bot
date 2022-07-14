/*CMD
  command: /depome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 📥 deposit
CMD*/

var key = [[{title:"TRX",command:"/depositTrx"},{title:"DOGE",command:"/depositDoge"}]]
let depot = "➕ *Welcome! Here you can start a new investment!*\n\n💵 We offer up to Investment Plans, choose the best for you!\n\n1️⃣ From *1 TRX to 10000 TRX*\n_150.00% daily for 1 day \n\n2️⃣ From *10 doge to 10000 doge*\n_150.00% daily for 1 day"
Bot.sendMessage(depot)
Bot.sendInlineKeyboard(key,"_Please Select Currency_")
