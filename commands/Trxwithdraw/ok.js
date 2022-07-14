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
Bot.sendMessage("💵 Withdrawal Paid\n\n"+"The owner Automatically Paid your withdrawal of " +amount+ " TRX on your wallet\n"+wallet+ "\n\n ["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)"  )


var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage({chat_id: "@TrxInvest2xPay", text:     "*✅ New Withdrawal ✅ *" +
    "\n \n *💰 Amount : *" +
    amount +
    "* TRX * \n\n *👤 User : * " +
    info +
    "\n * \n⚙️ TRANSACTION ID*" +
    "\n [" +
    txn_id +
    "]" +
    "(https://tx.botdev.me/TRX/" +
    txn_id +
    "\n)" +
    "\n \n*💳 Withdrawal Address:* `" +
    wallet +
    "`\n\n *🌐 Bot @@TrxInvest2xbot*" +
    "\n\n" +
    "*🕓 Server Time:*" +
    "\n`" +
    time +
    "`"+"\n\n🔥 Refer and earn 5% 🔥",parse_mode : "Markdown" , disable_web_page_preview: true
});



