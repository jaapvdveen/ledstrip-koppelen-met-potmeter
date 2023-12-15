/**
 * Let er op dat je de ledstrip op P2 aansluit en de potmeter op P0!
 */
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
strip.clear()
let range = strip.range(0, 0)
let potmeter = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    strip.clear()
    potmeter = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", potmeter)
    range = strip.range(0, Math.map(potmeter, 0, 1020, 0, 30))
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(50)
})
