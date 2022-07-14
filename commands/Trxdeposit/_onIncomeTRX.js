/*CMD
  command: /onIncomeTRX
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}
var photo = options.result 
var wallet = options.address;
var amount = options.amount;
var profit = 1.5*amount;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var history = User.getProperty("history"); 
var txn_id = options.txn_id
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

// see another fields by
//Bot.sendMessage(inspect(options));

if (amount>= 1 && amount <=10000){
Bot.sendMessage ("🗞 Investment Started At Now 🗞\n\n"+

"- Plan Type: 150.00% every 24 hours for 1 days\n\n"+

"💳 Profit will credited into your withdrawable balance with 150.00% on every 24 hours\n\n"+

"💵 Invested Amount : "+ amount+" TRX\n\n"

+"🧮 Expected Returns : "+ profit+" TRX");
  Api.sendMessage ({chat_id: "@TrxInvest2xPay", text: "*✔️✔️✔️ NEW INVESTMENT✔️✔️✔️ *" +
    "\n \n *💰 Amount : *" +
amount + "* TRX * \n\n *👤 User : * " + info + "\n * \n⚙️ TRANSACTION ID*" + "\n ["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)" + "\n \n*💳 Deposited Address:* `" +wallet+ "`\n\n *🌐 Bot @ASUSTradingLTD_BOT*" + "\n\n" + "*🕓 Server Time:*" +"\n`" +time+"`" ,parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("deposit");
deposit.add(amount)
depo.add(amount)
User.setProperty("minertrx",amount ,"text");
Bot.run({
command : "/acc",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = amount * 0.05;
if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"✅Invested Amount : "+ amount+"TRX"+"\n⚕DATE "+time;
User.setProperty("history",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------"+"\n✅Invested Amount : "+ amount+"TRX"+"\n⚕DATE "+time;
var toal = nwh+history;
User.setProperty("history",toal,"string")
}


if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(8)+"*TRX*");
User.setProperty("lvl1",referrer.telegramid,"string")

}else{

Bot.sendMessage("Check Payment Channel: @TrxInvest2xPay");
}
} else{Bot.sendMessage("you have deposited an amount\n which is less than 1 TRX")}
