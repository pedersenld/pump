input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 4)
    basic.clearScreen()
})
basic.forever(function () {
	
})
