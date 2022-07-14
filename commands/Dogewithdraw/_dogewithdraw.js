/*CMD
  command: /dogewithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

function canRun(){
  var last_run_at = User.getProperty("last_run_at10");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0.0000018* 60
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
var wallet = User.getProperty("dogewallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Set/Change Wallet", command: "/dogewallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set DOGE wallet is:* not set\n\nIt will be used for all future withdrawals."
  )
} else {
Bot.runCommand("dogewithdraw")
}
