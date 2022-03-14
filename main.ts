radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Stop()
    }
    if (receivedNumber == 1) {
        Forward()
    }
    if (receivedNumber == 2) {
        Backward()
    }
})
function Forward () {
    basic.showArrow(ArrowNames.South)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    Forward()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    Stop()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    Backward()
})
function Stop () {
    basic.showIcon(IconNames.Square)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function Backward () {
    basic.showArrow(ArrowNames.North)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
// Connect P0 to IN1 and IN3 of LN298 Connect P1 to IN2 and IN4 of LN298
radio.setGroup(1)
Stop()
basic.forever(function () {
	
})
