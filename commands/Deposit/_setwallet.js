/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: ⚙️ wallet
CMD*/

let wallet = User.getProperty("wallet")
let dcwallet = User.getProperty("dogewallet")
var button = [
[{title : "💼 Set / Change TRX Wallet" , command : "/wallet"}],
[{title : "💼 Set / Change DOGE Wallet", command:"/dogewallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set TRX wallet is:* \n `"+wallet+"`\n\n💹It will be used for *all future withdrawals.*"+"\n"+"\n"+"-------------------------------------------------------------------------------------"+"\n"+"\n"+"*💡 Your currently set DOGE wallet is:* \n `"+dcwallet+"`\n\n💹It will be used for *all future withdrawals.*"
);

