/*CMD
  command: /accdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogedeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var deposit = options.amount 
Bot.sendMessage(
 "*➕ Investment Accrual : *"+1.5*deposit+ " DOGE"
)
let bal = Libs.ResourcesLib.userRes("doge")
bal.add(1.5*deposit)
var dep = Libs.ResourcesLib.userRes("depodoge")
dep.add(-deposit)
let dogep = Libs.ResourcesLib.userRes("dogep")
dogep.add(0.5*deposit)
