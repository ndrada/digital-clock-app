function updateTime() {
    const now = new Date(); //built in
    // console.log(now); this was just a test
    let hours = now.getHours(); //built in 
    let minutes = now.getMinutes(); //built in
    let seconds = now.getSeconds(); //buuilt in
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12; //divides hours by 12 and returns the remaining amount
    hours = hours? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000);
updateTime();

