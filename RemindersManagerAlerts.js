setInterval(RemindersManagerAlerts,1000);
function RemindersManagerAlerts (){
	//Using GetTask function script for now.
  var UL = document.getElementById("UL");
  var Rows = UL.getElementsByClassName("row");
  for (var i = 0; i < Rows.length; i++){
  var Reminders = Rows[i].getElementsByClassName("reminder");
  var Messages =  Rows[i].getElementsByClassName("Message");
  if (Reminders[0] != null){
  var ActRemindersR = Reminders[0].innerHTML;
  var ActMessagesR = Messages[0].innerHTML;
  var ReminderDate = new Date(ActRemindersR);
  var TimeNow = new Date();
  if (ReminderDate.getTime() < TimeNow.getTime()){
  	notify (ActMessagesR,ActRemindersR);
    Reminders[0].innerHTML = "Alert!";
  }
  }
  if (i +1>=Rows.length){
  	//space for updating the rows function.
  }
  }
}
