// Set the date we're counting down to
console.log("script is running");

//get date

const m = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var todaymonth = months[m.getMonth()];
const d = new Date();
var todaydate = d.getDate();
const y = new Date();
var currentyear = y.getFullYear();
var finaldate = todaymonth +" "+ todaydate + "," + currentyear;


//get date
var mydate = finaldate + " 8:45:00";
console.log(mydate);
var countDownDate = new Date(mydate).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Stream Will Start Soon";
  }
}, 1000);