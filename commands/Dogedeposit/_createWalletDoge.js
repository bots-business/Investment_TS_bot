/*CMD
  command: /createWalletDoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogedeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "myLabel",
  onSuccess: "/onwalletcreationdoge",
  onIncome: "/onIncomeDOGE"
});
