input.onButtonPressed(Button.A, function () {
    basic.showString("" + hours + (":" + minutes + ":" + seconds))
})
let hours = 0
let seconds = 0
let minutes = 0
minutes = 0
seconds = 0
hours = 0
basic.showString("" + hours + (":" + minutes + ":" + seconds))
basic.forever(function () {
    basic.pause(1000)
    seconds += 1
    if (seconds == 59) {
        minutes += 1
        seconds = 0
    }
    if (minutes == 60) {
        hours += 1
        minutes = 0
        seconds = 0
    }
})
