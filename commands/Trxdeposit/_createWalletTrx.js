/*CMD
  command: /createWalletTrx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Trxdeposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  onSuccess: "/onWalletCreation",
  onIncome: "/onIncomeTRX",
  onIPN: "/onipn"
});
