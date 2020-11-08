def on_forever():
    if input.light_level() > 100:
        if input.button_is_pressed(Button.A):
            basic.show_icon(IconNames.GIRAFFE)
        else:
            basic.show_icon(IconNames.SKULL)
    else:
        basic.clear_screen()
basic.forever(on_forever)
