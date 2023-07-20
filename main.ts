basic.showIcon(IconNames.Happy)
servos.P1.setAngle(90)
let Nivel_luz = 0
basic.forever(function () {
    Nivel_luz = input.lightLevel()
    if (Nivel_luz >= 200) {
        basic.showIcon(IconNames.Surprised)
        servos.P1.setAngle(0)
        basic.pause(700)
        servos.P1.setAngle(180)
        basic.pause(700)
    } else {
        basic.showIcon(IconNames.Happy)
        servos.P1.setAngle(90)
    }
})
