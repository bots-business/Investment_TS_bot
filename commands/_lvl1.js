/*CMD
  command: /lvl1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


if (!options){
return
}else{
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
if (referrer){
var lvl1 = Libs.ResourcesLib.userRes("lvl1")
lvl1.set(referrer.telegramid)
var tgid = referrer.telegramid;
User.setProperty("lvl1",tgid,"integer")
Bot.sendMessageToChatWithId(referrer.telegramid, "✔️ New referral on level 1")
var lvl2 = Libs.ResourcesLib.anotherUserRes("lvl1", referrer.telegramid);
var p = lvl2.value()
if (p == 0){
}else{
var level2 = Libs.ResourcesLib.userRes("lvl2")
level2.set(p)
User.setProperty("lvl2",p,"integer")

Bot.sendMessageToChatWithId(p,"✔️ New referral on level 2")
}}}
