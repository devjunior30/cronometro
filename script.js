
// let seg = document.querySelector('seg')
// let min = document.querySelector('min')
// let hrs = document.querySelector('hrs')

// let watch = document.querySelector('.watch'

let milliseconds = 0
let seg = 0
let min = 0
let hrs = 0
let cron

function digits(number) {
    if(number <10) {
        return('0'+number)
    } else {
        return(number)
    }
}

function start() {
    cron = setInterval( function() {
        milliseconds ++
        if(milliseconds == 100) {
        seg++ 
        milliseconds = 0
        if(seg == 60) {
            min++
            seg = 0
            if(min == 60) {
                hrs++
                min = 0
            }
        }
    }
        document.querySelector('.watch').innerHTML = digits(hrs)+':'+digits(min)+':'+digits(seg)+':'+digits(milliseconds)
    },10)
}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    milliseconds = 0
    seg = 0
    min = 0
    hrs =0 

    document.querySelector('.watch').innerHTML = "00:00:00"
}
