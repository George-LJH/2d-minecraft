controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (!(POINTER.tileKindAt(TileDirection.Center, assets.tile`transparency16`))) {
        tiles.setTileAt(POINTER.tilemapLocation(), assets.tile`transparency16`)
    }
})
let POINTER: Sprite = null
POINTER = sprites.create(img`
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(POINTER)
let mySprite = sprites.create(img`
    . b b b b b b b b b b b b b b . 
    b e e e e e e e e e e e e e e b 
    b e e e e e e b b b b b b b b b 
    b e e e e e b d d d d d d d d b 
    b e e e e b d d d d d d d d d b 
    b e e b b b d d 1 8 d d 8 1 d b 
    b e b d d b d d 1 8 d d 8 1 d b 
    b b b d d d d d d d d d d d d b 
    b d d d d d d d d d d d d d d b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . . . . 
    b . . b . . . . . . . . . . . . 
    b . . b . . . . . . . . . . . . 
    . b b . . . . . . . . . . . . . 
    6 . . . . . . . . . . . . . . 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(POINTER, tiles.getTileLocation(7, 253))
scene.cameraFollowSprite(POINTER)
POINTER.setFlag(SpriteFlag.GhostThroughWalls, true)
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.TWO,
Keybinds.CustomKey.I,
Keybinds.CustomKey.K,
Keybinds.CustomKey.J,
Keybinds.CustomKey.L,
Keybinds.CustomKey.U,
Keybinds.CustomKey.O
)
