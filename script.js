// Clock settings

function whatTimeIsIt() {

    var time = new Date();

	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();

	// hours: add leading zero
    hour = hour < 10 ? "0" + hour : hour;

	// minutes: add leading zero
	minute = minute < 10 ? "0" + minute : minute;
    
    // seconds: add leading zero
    second = second < 10 ? "0" + second : second;

    // Displays the result of the element id="displayTime"
    var currentTime = hour + "  :  " + minute + "  :  " + second;
    document.getElementById("displayTime").innerHTML = currentTime;

    // checks the time every 1200 milliseconds
    setTimeout(whatTimeIsIt, 1200);
}

whatTimeIsIt();


// Date settings
var today = new Date();

var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

// Displays the result of the element id="date"
document.getElementById('date').innerHTML = today.getDate() + ' ' + months[today.getMonth()] + ' ' +today.getFullYear();


// Background settings

function setBackground() {
    var time = new Date();
    var hour = time.getHours();                                                             

    if (hour >= 18 && hour < 24) {
        document.getElementById("background").className = "evening";

    } else if (hour >= 0 && hour < 6) {
        document.getElementById("background").className = "night";
        

    } else if (hour >= 6 && hour < 12) {
        document.getElementById("background").className = "morning";

    } else {                                                                       
        document.getElementById("background").className = "day";
    }
} setInterval(setBackground, 1000);