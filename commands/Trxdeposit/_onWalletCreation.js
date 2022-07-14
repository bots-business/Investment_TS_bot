/*CMD
  command: /onWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result.address;
User.setProperty("permtrxwallet", wallet, "string");
Bot.runCommand("/depositTrx");
