/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input Message:
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "*Answer from Admin*:\n" + message + "";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
