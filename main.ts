let pace = 0
let yval = 4
let xval = 3
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
loops.everyInterval(1000, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(4, 4 - pace % 5)
            basic.pause(500)
            pace += 1
            basic.clearScreen()
        }
        led.plot(xval, yval)
        yval += -1
    }
    xval += -1
    yval = 4
})
