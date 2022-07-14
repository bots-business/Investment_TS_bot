/*CMD
  command: /bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Trxreinvest
  answer: 
  keyboard: 
  aliases: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("deposit");
var wallet = User.getProperty("wallet");
var re = Libs.ResourcesLib.anotherChatRes("re", "global")
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 1 ){
Bot.sendMessage("❌ You can not reinvest right now: You need at least 1 TRX to reinvest!")
}else{
if(message > balance.value()){
Bot.sendMessage("🚫Insufficient balance\n\nYour balance:"+balance.value().toFixed(6)+" TRX")
}else{
Bot.sendMessage("🗞 ReInvestment Started At Now 🗞\n\n"+

"- Plan Type: 150.00% every 24 hours for 1 days\n\n"+

"💳 Profit will credited into your withdrawable balance with 150.00% on every 24 hours\n\n"+

"💵 Invested Amount : "+ message+" TRX\n\n"

+"🧮 Expected Returns : "+ 1.5*message+" TRX");
balance.add(-message)
deposit.add(+message)
re.add(+message)
Bot.run({
command : "/acc",
run_after : 1*60*60*24,
options: { amount: message }
});
Api.sendMessage({chat_id: "@ASUSTradingLTD_PAY", text: "*♻️ New Reinvest* " +
    "\n \n*💰 Amount* : `" +message+ "` TRX " + "\n\n*👤 User* : " + info + "\n\n" + "*🕓 Server Time:*" +"\n`" +time+"`\n\n🛡* Bot Link: https://t.me/ASUSTradingLTD_BOT*" ,parse_mode : "Markdown" , disable_web_page_preview: true
})
}
}

