// 5.0 Intervals
// 5.1 Timeouts and Dates
// 5.2 PadStart
// 5.3 Recap

const clock = document.querySelector("h2#clock");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
// 페이지가 열리자마자 시계를 불러오기 위해
setInterval(getClock,1000);
// setInterval (function, interval)