// Clock settings

function whatTimeIsIt() {

    var time = new Date();

	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();

	// Hours: add leading zero
    hour = hour < 10 ? "0" + hour : hour;

	// Minutes: add leading zero
	minute = minute < 10 ? "0" + minute : minute;
    
    // Seconds: add leading zero
    second = second < 10 ? "0" + second : second;

    // Displays the result of the element id="displayTime"
    var currentTime = hour + "  :  " + minute + "  :  " + second;
    document.getElementById("displayTime").innerHTML = currentTime;

    // Checks the time every 1200 milliseconds
    setTimeout(whatTimeIsIt, 1200);


    // Background settings

    switch(true){
        case (hour >= 18 && hour < 24): //Hours
            document.getElementById("background").className = "evening";
            document.getElementById("cloud").className = "cloudEvening";
            document.getElementById("cloudDay").src = "images/Cloud_evening.png";// Changes the clouds img
            document.getElementById("cloudDay").className = "cloudEveningImg";
            break;

        case (hour >= 0 && hour < 6): //Hours
            document.getElementById("background").className = "night";
            document.getElementById("cloud").className = "cloudNight";
            document.getElementById("cloudDay").src = "images/Cloud_night.png";// Changes the clouds img
            document.getElementById("cloudDay").className = "cloudNightImg";
            break;
                
        case (hour >= 6 && hour < 12): //Hours
            document.getElementById("background").className = "morning";
            document.getElementById("cloud").className = "cloudMorning";
            document.getElementById("cloudDay").src = "images/Cloud_morning.png";// Changes the clouds img
            document.getElementById("cloudDay").className = "cloudMorningImg";
            break;

        case (hour >= 12 && hour < 18): //Hours
            document.getElementById("background").className = "day";
            document.getElementById("cloud").className = "cloudDay";
            document.getElementById("cloudDay").src = "images/Cloud_day.png";
            document.getElementById("cloudDay").className = "cloudDayImg";
            break;

    };
}

whatTimeIsIt();


// Date settings
var today = new Date();

var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

// Displays the result of the element id="date"
document.getElementById("date").innerHTML = today.getDate() + " " + months[today.getMonth()] + " " +today.getFullYear();