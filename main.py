def on_pin_released_p0():
    basic.show_string("" + str(score))
input.on_pin_released(TouchPin.P0, on_pin_released_p0)

def on_button_pressed_a():
    global batrolled, owzthatrolled, wickets, score
    batrolled = bat._pick_random()
    basic.show_string("" + str(batrolled))
    if batrolled == 0:
        owzthatrolled = owzthat._pick_random()
        basic.show_string("" + (owzthatrolled))
        wickets += 1
    else:
        score = batrolled + score
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

wickets = 0
owzthat: List[str] = []
owzthatrolled = ""
bat: List[number] = []
batrolled = 0
score = 0
score = 0
batrolled = 0
score = 0

def on_forever():
    global bat, owzthat
    bat = [0, 1, 2, 3, 4, 6]
    owzthat = ["no out", "caught", "bowled", "no ball", "stumped", "lbw"]
basic.forever(on_forever)
