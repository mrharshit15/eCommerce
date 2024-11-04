const stalkSecond = document.querySelector('.stalk-second')
const stalkMinute = document.querySelector('.stalk-minute')
const stalkHour = document.querySelector('.stalk-hour')

setInterval(function() {
    // console.log("hello harshit")
    const date = new Date ()

    const second = date.getSeconds() * 6
    const minute = date.getMinutes() * 6
    const hour = date.getHours() * 30 + minute / 12
    // console.log(second)
    


    stalkSecond.style.transform = "rotate(" + second + "deg)"
    stalkMinute.style.transform = "rotate(" + minute + "deg)"
    stalkHour.style.transform = "rotate(" + hour + "deg)"

})





