function clock(){
    var clockElem = document.getElementById('clock')

    var date = new Date()
    var hours = date.getHours()

    var time = "10"
    console.log(time.padStart(2, 0));
    

    console.log(hours)

    var am_pm = "AM"

    if(hours > 12 ){
        hours = hours - 12;
        am_pm = "PM"
    }


    
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    clockElem.textContent = `${hours.toString().padStart(2, 0)}: ${minutes.toString().padStart(2, 0)}: ${seconds.toString().padStart(2, 0)}  ${am_pm}`
}


setInterval(clock, 1000)


clock()