/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

var i;

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total referrals: " + refList.length + "\n--------------------------------------";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 *" +  user.first_name + " @" + user.username + "*";
  }
}else{
  msg = "No any affiliated users";
}
Bot.sendMessage(msg);


