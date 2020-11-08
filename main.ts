basic.forever(function on_forever() {
    if (input.lightLevel() > 100) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Giraffe)
        } else {
            basic.showIcon(IconNames.Skull)
        }
        
    } else {
        basic.clearScreen()
    }
    
})
