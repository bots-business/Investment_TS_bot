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
Bot.sendMessage("*๐ Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 1 ){
Bot.sendMessage("โ You can not reinvest right now: You need at least 1 TRX to reinvest!")
}else{
if(message > balance.value()){
Bot.sendMessage("๐ซInsufficient balance\n\nYour balance:"+balance.value().toFixed(6)+" TRX")
}else{
Bot.sendMessage("๐ ReInvestment Started At Now ๐\n\n"+

"- Plan Type: 150.00% every 24 hours for 1 days\n\n"+

"๐ณ Profit will credited into your withdrawable balance with 150.00% on every 24 hours\n\n"+

"๐ต Invested Amount : "+ message+" TRX\n\n"

+"๐งฎ Expected Returns : "+ 1.5*message+" TRX");
balance.add(-message)
deposit.add(+message)
re.add(+message)
Bot.run({
command : "/acc",
run_after : 1*60*60*24,
options: { amount: message }
});
Api.sendMessage({chat_id: "@ASUSTradingLTD_PAY", text: "*โป๏ธ New Reinvest* " +
    "\n \n*๐ฐ Amount* : `" +message+ "` TRX " + "\n\n*๐ค User* : " + info + "\n\n" + "*๐ Server Time:*" +"\n`" +time+"`\n\n๐ก* Bot Link: https://t.me/ASUSTradingLTD_BOT*" ,parse_mode : "Markdown" , disable_web_page_preview: true
})
}
}

