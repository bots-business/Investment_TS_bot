/*CMD
  command: ✅ joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
Api.getChatMember({
  chat_id: "@TrxInvest2xPay",
  user_id: id,
  on_result: "/onresult1"
})
