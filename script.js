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


    // Background settings

    switch(true){
        case (hour >= 18 && hour < 24): //UREN
            document.getElementById("background").className = "evening";
            document.getElementById("cloudDay").src = "images/Cloud_evening.png";
            document.getElementById("cloudDay").className = "cloudEvening";
            break;

        case (hour >= 0 && hour < 6): //UREN
            document.getElementById("background").className = "night";
            document.getElementById("cloudDay").src = "images/Cloud_night.png";
            document.getElementById("cloudDay").className = "cloudNight";
            break;
                
        case (hour >= 6 && hour < 12): //UREN
            document.getElementById("background").className = "morning";
            document.getElementById("cloudDay").src = "images/Cloud_morning.png";
            document.getElementById("cloudDay").className = "cloudMorning";
            break;

        case (hour >= 12 && hour < 18): //UREN
            document.getElementById("background").className = "day";
            document.getElementById("cloudDay").src = "images/Cloud_day.png";
            break;

    };
}

whatTimeIsIt();


// Date settings
var today = new Date();

var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

// Displays the result of the element id="date"
document.getElementById("date").innerHTML = today.getDate() + " " + months[today.getMonth()] + " " +today.getFullYear();