let temp = 0
input.onButtonPressed(Button.A, function () {
    let tempc = 0
    temp = input.temperature()
    basic.showNumber(temp)
    basic.pause(5000)
    if (tempc > temp) {
        for (let index = 0; index < 4; index++) {
            pins.servoWritePin(AnalogPin.P0, 180)
            basic.pause(500)
            pins.servoWritePin(AnalogPin.P0, 0)
            basic.pause(500)
        }
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
