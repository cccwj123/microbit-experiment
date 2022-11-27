let bval = 0
input.onGesture(Gesture.TiltLeft, function () {
    bval = randint(0, 9)
    basic.showNumber(bval)
})
input.onGesture(Gesture.Shake, function () {
    bval = randint(0, 9)
    basic.showNumber(bval)
})
basic.forever(function () {
	
})
