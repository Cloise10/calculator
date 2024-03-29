// on button A, 'num 1' and/or 'num 2' goes up by 1
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    num_1 += 1
    basic.showNumber(num_1)
    num_2 += 1
    basic.showNumber(num_2)
})
// resets program to 0
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
    num_1 = 0
    num_2 = 0
    sum = 0
    diff = 0
})
// shows 'num 2' then subtracts 'num 1' with 'num 2'
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("num 2")
    basic.pause(200)
    basic.showNumber(num_2)
    diff = num_1 - num_2
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(diff)
})
// on button A+B, stores 'num 1' 
input.onButtonPressed(Button.AB, function () {
    basic.showString("num 1")
    basic.pause(200)
    basic.showNumber(num_1)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
// on button A, 'num 1' and/or 'num 2' goes up by 1
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    num_1 += -1
    basic.showNumber(num_1)
    num_2 += -1
    basic.showNumber(num_2)
})
// on shake, stores 'num 1' then subtracts 'num 1' with 'num 2'
input.onGesture(Gesture.Shake, function () {
    basic.showString("num 1")
    basic.pause(200)
    basic.showNumber(num_1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
// shows 'num 2' then adds 'num 1' with 'num 2'
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("num 2")
    basic.pause(200)
    basic.showNumber(num_2)
    sum = num_1 + num_2
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(sum)
})
// shows name of program; sets all variables to 0
let diff = 0
let sum = 0
let num_2 = 0
let num_1 = 0
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.showString("Calculator")
num_1 = 0
num_2 = 0
sum = 0
diff = 0
