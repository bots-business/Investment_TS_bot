/*CMD
  command: /onwalletcreationdoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogedeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result.address;
User.setProperty("permdogewallet", wallet, "string");
Bot.runCommand("/depositDoge");
