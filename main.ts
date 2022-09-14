input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("You clicked A button")
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("You clicked Both button")
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.showString("You clicked B button")
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
