/*CMD
  command: minerdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogedeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("depodoge")
var balance = Libs.ResourcesLib.userRes("doge")
balance.growth.add({
  value: 1.5 * deposit.value(),
  interval: 1 * 60 * 2
})
//acc
Bot.run({
command : "/accdoge",
run_after : 1*60*2
})
