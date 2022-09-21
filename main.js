const startBtn = document.getElementById("start-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")
let timeDisplay = document.getElementById("time-display")

startBtn.addEventListener("click",function(){ starTimer(25)})
shortBreakBtn.addEventListener("click",function(){starTimer(5)})
longBreakBtn.addEventListener("click",function(){ starTimer(15)})

function starTimer(time) {
    const allowedTime = time*60;
    timeDisplay.innerText = `${Math.floor(allowedTime/60)}:${Math.floor(allowedTime%60)}`
}

