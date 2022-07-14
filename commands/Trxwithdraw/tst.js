/*CMD
  command: tst
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
  chat_id: "@ASUSTradingLTD_PAY",
  text:
    "*✅ New Withdrawal ✅\n\n*Ridham ᏋᎷᎮᎥᏒᏋ || ਪੰਜਾਬੀ COMMUNITY ⁪⁬⁮⁮⁮⁮* just withdrawn 1.00000000 TRX!\n\n💵 Amount *: 1.00000000 *TRX\n\n➕ User address : *TScQvidLVQ54uVesUjVNKKpSSEWmsYNF34*\n\n⏱️ *_Our server time_ : 03/12/2020 2:7:10 PM\n\n*🛡 Bot Link: https://t.me/ASUSTradingLTD_BOT*\n\n⚙️ TRANSACTION ID:*\n 5dcb8d65853e2b27c59a1d46a172cc7f9d16e3e3059c5ee74fdd0eb68bcfee4d\nhttps://tx.botdev.me/TRX/5dcb8d65853e2b27c59a1d46a172cc7f9d16e3e3059c5ee74fdd0eb68bcfee4d\n\n\n🔥 Refer and earn 5% 🔥",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var amount = 1.00;
var info = user.telegramid;
var txn_id ="5shieyhridogwegy667q8wih"
var wallet ="undefined"
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendMessage({
  chat_id: "@ASUSTradingLTD_PAY",
  text:
    "*✅ New Withdrawal ✅ *" +
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
    "`\n\n *🌐 Bot @ASUSTradingLTD_BOT*" +
    "\n\n" +
    "*🕓 Server Time:*" +
    "\n`" +
    time +
    "`"+"\n\n🔥 Refer and earn 5% 🔥",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

