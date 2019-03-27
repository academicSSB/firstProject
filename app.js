const fullDate = new Date();
const consHrs = fullDate.getHours();
const consMins = fullDate.getMinutes();
const consSecs = fullDate.getSeconds();

/*
function timerLogic() {
  var click = false
  if (click = false){
    click = true
  }

  while (click = true){
    var currentHrs = consHrs;
    var currentMins = consMins;
    var currentSecs = consSecs;

    var timHrs = consHrs - currentHrs;
    var timMins = consMins - currentMins;
    var timSecs = consSecs - currentSecs;

    if (timHrs < 10){
      timHrs = '0' + timHrs;
    }
    if (timMins < 10){
      timMins = "0" + timMins;
    }
    if (timSecs < 10){
      timSecs = "0" + timSecs;
    }


    document.getElementById('hour').innerHTML = timHrs + ":";
    document.getElementById('minute').innerHTML = timMins + ":";
    document.getElementById('second').innerHTML = timSecs;

    setInterval(timerLogic, 100);
  }
}
*/

setInterval(timerLogic, 100);
