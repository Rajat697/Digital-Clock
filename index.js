const hoursEle = document.getElementById("hour");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const ampmEle = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM"
    if (hour > 12) {
        // hour = hour - 12                    // after 12 the hour will be 1 so it will convert 1 into pm
        ampm = "PM"
    }
    // if hour , minute and seconds is less than 10 to add 0 in front 

    hour = hour < 10 ? "0" + hour : hour;     
    minute= minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
   hoursEle.innerText = hour;
    minutesEle.innerText = minute;
    secondsEle.innerText = seconds;
    ampmEle.innerText = ampm;
    // To update every second
    setTimeout(() => {
     updateClock()   
    },1000)
}
updateClock();
