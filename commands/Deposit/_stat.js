/*CMD
  command: /stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: š statistic
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let currency = "TRX" // Set Your Currency
let userPaymentdoge = Libs.ResourcesLib.anotherChatRes("userpaymentdoge","global")
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let totaldoge = Libs.ResourcesLib.anotherChatRes("totaldoge","global")
let re = Libs.ResourcesLib.anotherChatRes("re", "global")
let dogere= Libs.ResourcesLib.anotherChatRes("dogere","global")
let dogedepo = Libs.ResourcesLib.anotherChatRes("dodepo","global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*š Bot Live Statistics*" + "\n\nš¤* Total Investors:* `" + tota.value().toFixed(0) + "`\n\n*ā Total Investments:* `\n" + depo.value().toFixed(4) + "` *TRX*\n`"+dogedepo.value().toFixed(4)+ " `*DOGE*" + "\n\n*š Total Reinvests:* `\n" + re.value().toFixed(4) + "` *TRX*\n`"+dogere.value().toFixed(4)+" `*DOGE*" + "\n\n*š³ Total Withdrawn:* `\n" + userPayment.value().toFixed(4) + "` *TRX*\n`"+userPaymentdoge.value().toFixed(4)+ " `*DOGE*")

