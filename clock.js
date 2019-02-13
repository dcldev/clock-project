function runClock() {

    const currentDate = new Date();
    var getHours = currentDate.getHours();
    var getMinutes = currentDate.getMinutes();
    var getSeconds = currentDate.getSeconds();

    var stnHours;
        if (getHours > 0 && getHours <=12) {
            stnHours = "" + getHours;
        } else if (getHours > 12) {
            stnHours = "0" + (getHours - 12);
        } else if (hours === 0) {
            stnHours = "12";
        }

    var stnSeconds;
        if (getSeconds < 10) {
            stnSeconds = "0" + getSeconds;
        } else {
            stnSeconds = getSeconds;
        }

    var stnMinutes;
        if (getMinutes < 10) {
            stnMinutes = "0" + getMinutes;
        } else {
            stnMinutes = getMinutes;
        }
    
    document.getElementById("hour").innerHTML = stnHours;
    document.getElementById("minute").innerHTML = ": " + stnMinutes + " :";
    document.getElementById("second").innerHTML = stnSeconds;

}

setInterval(runClock,100);
