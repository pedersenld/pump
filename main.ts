input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 1)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
cakLandSoil.displayMoisture(cakLandSoil.SoilPin.P0)
basic.pause(1000)
basic.forever(function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.DRY)) {
        cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 2)
    }
})
