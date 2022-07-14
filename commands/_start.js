/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: *💡 To use this bot you must join this channel:* @TrxInvest2xPay
  keyboard: ✅ joined
  aliases: 
CMD*/

var welco = User.getProperty("welco")
if (welco == undefined) {
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.5)
Bot.sendMessage("🎁 welcome bonus 0.5 TRX")
}
User.setProperty("welco", user.telegramid, "text")
function onAttracted(refUser){
// access to Bonus Res of refUser
var res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(0.0);  // add 0.05000 bonus for friend
var refchatid= refUser.chatId;

var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var lvl1 = Libs.ResourcesLib.userRes("lvl1")
var hel = 67
Bot.run({
command:"/lvl1",
options:{hel:hel}
})
}
Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});

