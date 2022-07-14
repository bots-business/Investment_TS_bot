/*CMD
  command: minertrx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("deposit")
var balance = Libs.ResourcesLib.userRes("balance")
balance.growth.add({
  value: 1.5 * deposit.value(),
  interval: 1 * 60 * 2,
  max_iterations_count:1
})
//acc
Bot.run({
command : "/acc",
run_after : 1*60*2
})
balance.growth.stop() 
