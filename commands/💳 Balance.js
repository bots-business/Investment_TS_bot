/*CMD
  command: 💳 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let profit = Libs.ResourcesLib.userRes("profit");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
let deposit = Libs.ResourcesLib.userRes("deposit");
let doge = Libs.ResourcesLib.userRes("doge");
let xrp = Libs.ResourcesLib.userRes("xrp");
let depodoge = Libs.ResourcesLib.userRes("depodoge");
let res = Libs.ResourcesLib.userRes("balance");
let depoxrp = Libs.ResourcesLib.userRes("depoxrp");
let ltcdepo = Libs.ResourcesLib.userRes("ltcdepo");
let dogedepo = Libs.ResourcesLib.userRes("dogedepo");
let btcp = Libs.ResourcesLib.userRes("btcp");
let xrpp = Libs.ResourcesLib.userRes("xrpp");
let dogep = Libs.ResourcesLib.userRes("dogep");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let btcw = Libs.ResourcesLib.userRes("btcw");
let xrpw = Libs.ResourcesLib.userRes("xrpw");
let dogew = Libs.ResourcesLib.userRes("dogew");
let refcom = Libs.ResourcesLib.userRes("refcom");
let refcomb = Libs.ResourcesLib.userRes("refcomb");
let refcomx = Libs.ResourcesLib.userRes("refcomx");
let refcomd = Libs.ResourcesLib.userRes("refcomd");
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";







Bot.sendMessage( "👤 Account Summary:  "+inf+
"\n\n➖ Withdrawable Balance:"+ "\n"+ res.value().toFixed(8) + " TRX" + "\n"+ doge.value().toFixed(8) + " DOGE" + "\n" + "\n\n💳 Active Investments: "+ "\n"+ deposit.value().toFixed(8) + " TRX" + "\n" + dogedepo.value().toFixed(8) + " DOGE" + "\n" + " \n\n💰Total Profit: "+ "\n"+ profit.value().toFixed(8) + " TRX" + "\n" + dogep.value().toFixed(8) + " DOGE" + "\n"  +
"\n\n🎁 Total Affiliate Bonus:"+"\n"+ refcom.value().toFixed(8) + " TRX" + "\n" + refcomd.value().toFixed(8) + " DOGE"  + "\n" + "\n\n💸Total Withdrawn:"+ "\n"+ withdraw.value().toFixed(8) + " TRX" + "\n" + dogew.value().toFixed(8) + " DOGE" + "\n" );
