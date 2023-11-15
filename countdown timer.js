<h1 id="countdown" style="font-size: 35px; color: #FFA500;"></h1>
<!-- Setting font-size for countdown -->

<script>
// <![CDATA[
function toEasternStandardTime(date) {
    var easternTime = new Date(date.toLocaleString("en-US", {timeZone: "America/New_York"}));
    var estDate = new Date(easternTime.getTime() + (easternTime.getTimezoneOffset() * 60000));
    return estDate;
}
var countDownDate = toEasternStandardTime(new Date("11/20/2023 23:59:59"));

var scriptUrl = "https://raw.githubusercontent.com/ninjawarren/sales/main/countdown%20timer.js?nocache=" + Math.random(); // Replace with the actual URL of your script

var scriptElement = document.createElement("script");
scriptElement.src = scriptUrl;

document.body.appendChild(scriptElement);

var countdownfunction = setInterval(function() {
    // Get today's date and time in Eastern Standard Time
    var now = toEasternStandardTime(new Date());

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "Sale Ended";
    }
}, 1000);
// ]]></script>
