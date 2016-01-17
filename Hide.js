var Hiding = false;
function Hide() {
  Hiding = !Hiding;
  var UL = document.getElementById("UL");
  if (Hiding){
  $(UL).slideUp();
  setTimeout(function() {
    $("#Container").slideUp();
  }, 300);
  } else {
    $("#Container").slideDown();
    Hiding = false;
    setTimeout(function() {
      $(UL).slideDown();
    }, 350);
  }
}
function Slash() {
    $(".new-string").slideToggle();
    //$("#string-text").focus();
      setTimeout(function() {
      $("#string-text").val("");
      $("#string-text").focus();
    }, 100);
}
var arrShortCut = [{ name: 'test1', key: 72, fx: 'Hide();' }, { name: 'test2', key: 191, fx: 'Slash();'}];
var iShortCutControlKey = 16; // CTRL;
var bIsControlKeyActived = false;
function execShortCut(fx) {
    eval(fx);
}
