/* Still trying to figure out the logic here. I have a simple clock coded here, 
but I need to figure out how this file reads that a button has been pressed.


function clock() {
  const fullDate = new Date();
  var hrs = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hrs < 10){
    hrs = "0" + hrs;
  }
  if (mins < 10){
    mins = "0" + mins;
  }
  if (secs < 10){
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML = hrs;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock, 100);
*/
