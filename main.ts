let xval = 0
let pace = 0
let yval = 4
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
loops.everyInterval(1000, function () {
    xval = 4
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            led.plot(4, 4 - pace % 5)
            led.plot(xval, 4 - pace % 5)
            basic.pause(500)
            pace += 1
        }
        xval += -1
    }
})
