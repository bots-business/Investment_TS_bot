/*CMD
  command: okdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var txn_id = result.send_txid;
var wallet = result.send_address;
var amount = result.amountf;
Bot.sendMessage("šµ Withdrawal Paid\n\n"+"The owner Automatically Paid your withdrawal of " +amount+ " TRX on your wallet\n"+wallet+ "\n\nā ["+ txn_id + "]" 
+"(https://tx.botdev.me/DOGE/" + txn_id + "\n)"  )


var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage ({chat_id: "@TrxInvest2xPay", text: "*ā New Withdrawal ā\n\n*"+info+"* just withdrawn "+amount+" DOGE!\n\nšµ Amount *: "+amount+" *DOGE\n\nā User address : *"+wallet+"*\n\nā±ļø *_Our server time_ : "+time+"\n\n*š” Bot Link: https://t.me/ASUSTradingLTD_BOT*\n\n"+
"\n\nš„ Refer and earn 5% š„",parse_mode : "Markdown" , disable_web_page_preview: true
});


