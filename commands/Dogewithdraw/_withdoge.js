/*CMD
  command: /withdoge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at10");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0.0000 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You can withdraw only 1 time in 24 hours\n\n💡 Next Withdraw in "+wait_hours+" Hours and "+wait_minutes+" minutes*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at10", Date.now(), "integer");
var withdraw = Libs.ResourcesLib.userRes("dogew");
var wallet = User.getProperty("dogewallet");
var balance = Libs.ResourcesLib.userRes("doge")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let userPayment = Libs.ResourcesLib.anotherChatRes("userpaymentdoge", "global");

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 10){
Bot.sendMessage("❌ Minimum amount to withdraw 10 DOGE")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Withdraw Maximum: "+balance.value().toFixed(6)+" TRX")
}else{
if (message >= 10 && message<=1000){
let amo = message 
User.setProperty("amodoge",amo,"string")
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: message // input your withdrawal amount
,
            currency: "DOGE" //currency for withdrawal
,
address: wallet,
           auto_confirm: 1
},
  onSuccess: '/onsuccessdoge',
  onPaymentCompleted: 'onPaymentCompleteddoge'
});

balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)

}else{
Bot.sendMessage("✅ Withdrawal Requested\nYour will get your payment within 24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+message+" DOGE to the wallet\n"+wallet)
balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)
}}
}
