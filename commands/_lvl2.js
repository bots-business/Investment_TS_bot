/*CMD
  command: /lvl2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tgid = User.getProperty("lvl1")
var referrer = Libs.ReferralLib.tgid.attractedByUser();

Bot.sendMessage(referrer.telegramid)
