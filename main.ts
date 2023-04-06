input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Silly)
})
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Surprised)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showIcon(IconNames.Sad)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Sad)
    basic.showLeds(`
        . . . . #
        . # . # .
        . . . # .
        . # . # .
        . . . . #
        `)
    basic.pause(700)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
