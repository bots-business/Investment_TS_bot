/*CMD
  command: ok
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var txn_id = result.send_txid;
var wallet = result.send_address;
var amount = result.amountf;
Bot.sendMessage("šµ Withdrawal Paid\n\n"+"The owner Automatically Paid your withdrawal of " +amount+ " TRX on your wallet\n"+wallet+ "\n\n ["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)"  )


var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage({chat_id: "@TrxInvest2xPay", text:     "*ā New Withdrawal ā *" +
    "\n \n *š° Amount : *" +
    amount +
    "* TRX * \n\n *š¤ User : * " +
    info +
    "\n * \nāļø TRANSACTION ID*" +
    "\n [" +
    txn_id +
    "]" +
    "(https://tx.botdev.me/TRX/" +
    txn_id +
    "\n)" +
    "\n \n*š³ Withdrawal Address:* `" +
    wallet +
    "`\n\n *š Bot @@TrxInvest2xbot*" +
    "\n\n" +
    "*š Server Time:*" +
    "\n`" +
    time +
    "`"+"\n\nš„ Refer and earn 5% š„",parse_mode : "Markdown" , disable_web_page_preview: true
});



