let hour = document.querySelector('#hour')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
const tick = new Audio('sound/tick.mp3')

setInterval(() => {
    tick.play();
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock

    let hours = document.getElementById('hours')
    let mins = document.getElementById('minutes')
    let secs = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "P.M" : "A.M"

    // Convert 24h clock to 12h
    if (h > 12) {
        h = h - 12;
    }

    // Add 0 before single digit number

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
    ampm.innerHTML = am
})
