basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(3000)
        motors.dualMotorPower(Motor.A, 100)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(pins.analogReadPin(AnalogPin.P2) * (2.93 + 2000))
        motors.dualMotorPower(Motor.B, 100)
    }
})
