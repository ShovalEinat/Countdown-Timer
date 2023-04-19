var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
let Years = document.getElementById("Years");
let Months = document.getElementById("Months");
let Weeks = document.getElementById("Weeks");
let Days = document.getElementById("Days");
let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Seconds = document.getElementById("Seconds");

if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;

}

var formattedDate = year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

document.getElementById("countdown-date").value = formattedDate;
  
function startCountdown() {
    var countdownDate = new Date(document.getElementById("countdown-date").value).getTime();
    document.getElementById("countdown-date").disabled = true;
    document.getElementById("countdown-date").style.cursor = "default";
  
    var now = new Date().getTime();

    if (countdownDate < now) {
      alert("Please choose a date and time that is after the current date and time.");
      return;
    }
    
    Years.style.display = "block";
    Months.style.display = "block";
    Weeks.style.display = "block";
    Days.style.display = "block";
    Hours.style.display = "block";
    Minutes.style.display = "block";
    Seconds.style.display = "block";

    document.getElementById("startCountdown").style.display = "none";
    document.getElementById("choose").style.display = "none";
  
    var countdownInterval = setInterval(function() {

      var now = new Date().getTime();
    
      var timeRemaining = countdownDate - now;
    
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var years = Math.floor(days / 365);
      var months = Math.floor((days % 365) / 30);
      var weeks = Math.floor(((days % 365) % 30) / 7);
      days = ((days % 365) % 30) % 7;
    
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
      Years.innerHTML = "Years : " + years;
      Months.innerHTML = "Months : " + months;
      Weeks.innerHTML = "Weeks : " + weeks;
      Days.innerHTML = "Days : " + days;
      Hours.innerHTML = "Hours : " + hours;
      Minutes.innerHTML = "Minutes : " + minutes;
      Seconds.innerHTML = "Seconds : " + seconds;
    
      if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown Complete!";
      }
    }, 1000);    
} 