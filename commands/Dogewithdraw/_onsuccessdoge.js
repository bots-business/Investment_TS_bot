/*CMD
  command: /onsuccessdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var error = options.body.error;
var wallet = User.getProperty("dogewallet")
var amo = User.getProperty("amodoge")
var wdwall = result.address
var msg = result.amount
var ac = User.getProperty("admin_chat")
var tgi = user.telegramid
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

if (error == "ok"){


 Bot.sendMessage("*✅ Withdrawal Requested*\nYour payment is being processed automatically right now!\n\nSecured Payment ID:\n*"+result.id+"*\n_You will receive TXID soon _\n\n*💳 Transaction Details:*\n"+amo+" *DOGE* to the wallet\n"+wallet);


Bot.run({
command : "/onPaymentCompleteddoge",
run_after : 1*10*60,
options: { amount: amo ,wallet : wallet,id:result.id}
});

}else{
Bot.sendMessageToChatWithId(1360692093, "`"+tgi+"`"+"\n\n✅ Withdrawal Requested\nYour will get your payment within24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+amo+" DOGE to the wallet\n"+wallet);
Bot.sendMessage("✅ Withdrawal Requested\nYour will get your payment within24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+amo+" DOGE to the wallet\n"+wallet)

 }
