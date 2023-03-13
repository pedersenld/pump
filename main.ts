input.onButtonPressed(Button.A, function () {
    basic.showNumber(howManyWaterings)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    cakLandSoil.displayMoisture(cakLandSoil.SoilPin.P0)
    basic.pause(2000)
    basic.clearScreen()
})
let howManyWaterings = 0
basic.showIcon(IconNames.Heart)
howManyWaterings = 0
cakLandSoil.displayMoisture(cakLandSoil.SoilPin.P0)
basic.pause(1000)
basic.forever(function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.WET)) {
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Umbrella)
        cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 4)
        howManyWaterings += 1
        basic.clearScreen()
    }
})
