function Timer(inpute){
  var TimerS = inpute.replace("/Timer","");
  var TimerL = TimerS.split(" ");
 var UL = document.getElementById("UL");
  var d = new Date();
  var min = d.getMinutes();
  var minutes = parseInt(TimerL[2]);
  var TimerMins = min + minutes;
  d.setMinutes(TimerMins);
   $( "<li class='row'><a class='snooze' href='#'><i class='fa fa-clock-o'></i><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a><span class='Message'>"+ TimerL[1] +"</span><span class='reminder'>"+d+"</span></li>" ).fadeIn().appendTo("ul");
}
