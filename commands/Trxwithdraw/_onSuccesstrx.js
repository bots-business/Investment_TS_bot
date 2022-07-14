/*CMD
  command: /onSuccesstrx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var amo = User.getProperty("amo");
var error = options.body.error;
var wallet = User.getProperty("wallet");
var wdwall = result.address
var msg = result.amount
var id = result.id;
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


 Bot.sendMessage("*✅ Withdrawal Requested*\nYour payment is being processed automatically right now!\n\nSecured Payment ID:\n*"+result.id+"*\n_You will receive TXID soon _\n\n*💳 Transaction Details:*\n"+amo+" *TRX* to the wallet\n"+wallet);




Bot.run({
command : "/onPaymentCompletedtrx",
run_after : 1*60*3,
options: { amount: amo ,wallet : wallet,id :result.id}
});



}else{

Bot.sendMessage("✅ Withdrawal Requested\nYour will get your payment within24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+ amo +" TRX to the wallet\n"+wallet)

 }
