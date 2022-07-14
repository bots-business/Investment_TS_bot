/*CMD
  command: /onIncomeDOGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogedeposit
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
var history = User.getProperty("history");
var wallet = options.address;
var amount = options.amount;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

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

if (amount>= 10 && amount <=10000){
Bot.sendMessage ("🗞 Investment Started At Now 🗞\n\n"+

"- Plan Type: 150.00% every 24 hours for 1 days\n\n"+

"💳 Profit will credited into your withdrawable balance with 150.00% on every 24 hours\n\n"+

"💵 Invested Amount : "+ amount+" DOGE \n\n"

+"🧮 Expected Returns : "+ 1.5*amount+" DOGE");
  Api.sendMessage ({chat_id: "@TrxInvest2xPay", text: "*✔️✔️✔️ NEW INVESTMENT✔️✔️✔️ *" +
    "\n \n *💰 Amount : *" +
amount + "* doge * \n\n *👤 User : * " + info + "\n * \n⚙️ TRANSACTION ID*" + "\n ["+ txn_id + "]" +"(https://tx.botdev.me/doge/" + txn_id + "\n)" + "\n \n*💳 Deposited Address:* `" +wallet+ "`\n\n *🌐 Bot @TrxInvest2xbot*" + "\n\n" + "*🕓 Server Time:*" +"\n`" +time+"`" ,parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("dodepo", "global")
var deposit   = Libs.ResourcesLib.userRes("depodoge");
deposit.add(amount)
depo.add(amount)
User.setProperty("minerdoge",amount ,"text");
Bot.run({
command : "/accdoge",
run_after : 1*60*60*24,
options: { amount: amount }
});
var lilo = Bot.getProperty("totaldoge");
var total = lilo+amount;
Bot.setProperty("totaldoge" , total , "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = amount * 0.05;
if(history == undefined){
var newh = "\n-------------------------------------------------------------------------------------\n"+"✅Invested Amount : "+ amount+"DOGE"+"\n⚕DATE "+time;
User.setProperty("history",newh,"string")
}else{
var nwh = "\n-------------------------------------------------------------------------------------"+"\n✅Invested Amount : "+ amount+"DOGE"+"\n⚕DATE "+time;
var toal = nwh+history;
User.setProperty("history",toal,"string")
}

if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("doge", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcomd", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(8)+"*DOGE*");

}else{

Bot.sendMessage("Check Payment Channel:  @TrxInvest2xPay");
}
} else{Bot.sendMessage("you have deposited an amount\n which is less than 10 DOGE")}
