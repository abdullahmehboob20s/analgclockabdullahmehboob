function runanalogclock() {
  var hourend = document.getElementById("hour");
  var minuteend = document.getElementById("minutes");
  var secondend = document.getElementById("seconds");
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var hrotaion = 30 * hours + minutes / 2;
  var mrotaion = 6 * minutes;
  var srotaion = 6 * seconds;
  hourend.style.transform = `rotate(${hrotaion}deg)`;
  minuteend.style.transform = `rotate(${mrotaion}deg)`;
  secondend.style.transform = `rotate(${srotaion}deg)`;
}
setInterval(runanalogclock, 1000);
