/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: âï¸ wallet
CMD*/

let wallet = User.getProperty("wallet")
let dcwallet = User.getProperty("dogewallet")
var button = [
[{title : "ð¼ Set / Change TRX Wallet" , command : "/wallet"}],
[{title : "ð¼ Set / Change DOGE Wallet", command:"/dogewallet"}]
]
Bot.sendInlineKeyboard(button,"*ð¡ Your currently set TRX wallet is:* \n `"+wallet+"`\n\nð¹It will be used for *all future withdrawals.*"+"\n"+"\n"+"-------------------------------------------------------------------------------------"+"\n"+"\n"+"*ð¡ Your currently set DOGE wallet is:* \n `"+dcwallet+"`\n\nð¹It will be used for *all future withdrawals.*"
);

