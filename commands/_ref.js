/*CMD
  command: /ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🗣 referral
CMD*/


let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let reflink = Libs.ReferralLib.currentUser.getRefLink("TrxInvestment2xBot","start")
let TRX = 20*refcom.value()
let refcomd = Libs.ResourcesLib.userRes("refcomd")
let doge = 20*refcomd.value()
let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{ title: "📑 Refs List", command: "/list"}]]

Bot.sendInlineKeyboard(
  key,
  "🏆 *Refferrals System*" + "\n\n" + "1 Level:" + "\n" +"*🥇 Level → 5%*" + "\n\n" + "*🗣 Referral direct bot url:*" + "\n*" +reflink+ "*\n\n" + "*🗣 Referral Statistics*" + "\n\n" + "1° Level: " + reflist.length+ " users" + "\n\n" + "🗣 Referral Deposits: \n" + TRX.toFixed(5) + " *TRX*\n"+doge.toFixed(5)+" *DOGE*\n" + "\n" + "♾ Earnings: \n" + refcom.value().toFixed(5) + " *TRX*\n"+refcomd.value().toFixed(5)+" *DOGE*",{ is_reply: true })

