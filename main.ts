

function startupAnimation2(delay) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(delay)
    basic.clearScreen()
}
// Animacións de startup
function startupAnimation(delay) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # . .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . . # # .
        . . . . .
        `)
    basic.pause(delay)
    basic.clearScreen()
}
for (let index = 0; index <= 1; index++) {

    startupAnimation(100)

    if (index >= 1) {
        // Quan la animacio base s'ha repetit 3 vegadues
        startupAnimation2(100)      // aixó fa que entri en práctica la final
    }
}

basic.forever(function () {
 
    input.onButtonPressed(Button.A, function () {    //Flecha dreta quan B presionat
        if (input.lightLevel() > 230) {
            basic.showString("L", 75)
            basic.pause(150)
            basic.clearScreen();

        } else if (input.lightLevel() < 50) {
            basic.showString("D", 150);
            basic.pause(150)
            basic.clearScreen();
        } else {
            basic.showString("LIGHT NORMAL", 75)
        }
    })


    input.onButtonPressed(Button.B, function () {     //Flecha esquerra quan A presionat
        if (input.temperature() > 25) {
            basic.showString("H", 75)
        } else if (input.temperature() < 15) {
            basic.showString("C", 75)
        } else {
            basic.showString("TEMP NORMAL", 75);
        }
    })

    })



