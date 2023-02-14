basic.forever(function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Big2(255, 0, 0)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    Tinybit.RGB_Car_Big2(255, 165, 0)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    Tinybit.RGB_Car_Big2(255, 255, 0)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    Tinybit.RGB_Car_Big2(0, 255, 0)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Big2(0, 0, 255)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    Tinybit.RGB_Car_Big2(155, 38, 182)
    basic.pause(100)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    Tinybit.RGB_Car_Big2(128, 0, 128)
})
