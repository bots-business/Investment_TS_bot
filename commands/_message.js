/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📞 *You are now in direct contact with our Administrator*
You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!
  ANSWER
  keyboard: 
  aliases: 📞 support
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}
let msg = message
if(msg.length < 10){
Bot.sendMessage("*⚠️ Please, send a longer message!*\nTry to explain better what you need, as much as you can in a single message! \n\n*➡️ Need to add a photo?* " + " Grab photo link in" + "\n@HostIMGbot")
}else{
let user_link = Libs.commonLib.getLinkFor(user)
let msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;

Bot.sendMessageToChatWithId(admin_chat, msg);
Bot.sendMessage("*Message sent to the administrator:*" + "\n" +message+ "\n");
}
Bot.runCommand("*");

