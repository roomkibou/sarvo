let angle = 0
pins.servoSetPulse(AnalogPin.P1, 1500)
pins.servoWritePin(AnalogPin.P1, 180)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 4; カウンター++) {
        angle = カウンター * 30
        pins.servoWritePin(AnalogPin.P1, angle)
        basic.pause(500)
    }
})
