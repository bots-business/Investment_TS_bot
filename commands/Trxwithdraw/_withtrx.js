/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Trxwithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
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
User.setProperty("last_run_at", Date.now(), "integer");
var withdraw = Libs.ResourcesLib.userRes("withdraw");
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");

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

if(message < 1){
Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Withdraw Maximum: "+balance.value().toFixed(6)+" TRX")
}else{
if (message >= 1 && message<=100){
let amo = message 
User.setProperty("amo",amo,"string")
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: message // input your withdrawal amount
,
            currency: "TRX" //currency for withdrawal
,
address: wallet,
           auto_confirm: 1
},
  onSuccess: '/onSuccesstrx',
  onPaymentCompleted: 'onPaymentCompleted'
});

balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)

}else{
Bot.sendMessage("✅ Withdrawal Requested\nYour will get your payment within24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+message+" TRX to the wallet\n"+wallet)
balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)
}}
}
