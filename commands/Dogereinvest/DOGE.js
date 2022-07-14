/*CMD
  command: DOGE
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Dogereinvest

  <<ANSWER
🖥* Profit Calculator *🖥

Calculate here your incoming profits!

*Send the amount of DOGE you want to invest*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var amount = parseFloat(message);

var dail = amount*1.5;
var profi = amount*1.5;

if (amount>= 10 && amount <=10000){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 150.00% daily for 1 day_\n\n_⏱ Your first payment will arrive after 24 hours!_\n\n*💰 After 24 hous: *" +
    dail.toFixed(1) +
    " DOGE\n_❓ You will get back more than what you invested after just 24 Hours_\n\n*🔥 Total Profit: *" +
    profi.toFixed(1) +
    " DOGE")
}
