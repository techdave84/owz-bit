input.onButtonPressed(Button.A, function () {
    BDrolled = batterdie._pickRandom()
    basic.showString("" + (BDrolled))
    if (BDrolled != 0) {
        score = BDrolled + score
        ball += 1
    } else {
        UDrolled = umpiredie._pickRandom()
        basic.showString(UDrolled)
        serial.writeString(UDrolled)
        if (UDrolled == "not out") {
            ball += 1
        } else if (UDrolled == "no ball") {
            score = noballpenalty + score
        } else {
            ball += 1
            wicket += 1
        }
    }
    if (wicket == totalwicket) {
        basic.showString("All out")
        basic.showString("" + (score))
        serial.writeLine("/All out/")
        serial.writeString("" + (score))
    } else if (ball == ballover) {
        over += 1
        ball = 0
        if (over == totalover) {
            basic.showString("End of Innings")
            basic.showString("" + (score))
            serial.writeLine("/End of innings/")
            serial.writeString("" + (score))
        } else {
        	
        }
    } else {
    	
    }
    serial.writeLine("/Ball ")
    serial.writeString("" + (ball))
    serial.writeLine("/Over ")
    serial.writeString("" + (over))
    serial.writeLine("/Score ")
    serial.writeString("" + (score))
    serial.writeLine("/Wickets ")
    serial.writeString("" + (wicket))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("S" + score + "/" + wicket)
})
let over = 0
let wicket = 0
let umpiredie: string[] = []
let UDrolled = ""
let ball = 0
let batterdie: number[] = []
let BDrolled = 0
let totalwicket = 0
let totalover = 0
let ballover = 0
let noballpenalty = 0
let score = 0
score = 0
noballpenalty = 1
ballover = 5
totalover = 20
totalwicket = 10
basic.forever(function () {
    batterdie = [
    0,
    1,
    2,
    3,
    4,
    6
    ]
    umpiredie = [
    "not out",
    "caught",
    "bowled",
    "no ball",
    "stumped",
    "lbw"
    ]
})
