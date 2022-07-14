/*CMD
  command: /onPaymentCompleteddoge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Dogewithdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = options.amount 
var wallet = options.wallet
var id = options.id






Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info",
            id: id
          },
  onSuccess: 'okdoge'
          });
