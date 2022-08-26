import scene from '../main/setup'
import camera from '../main/setup'

import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

import Player from '../../assets//outlined_black.gltf'

let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.receiveShadow = true
    player.scale.set(0.15, 0.15, 0.15)
    scene.add(player)
})

// ------------------------- Player controls -------------------------
document.onkeydown = function (e) {
    var keyCode = event.which
    if (keyCode === 37) {
        player.position.x -= 0.01
        camera.position.x += 0.01
    }
    if (keyCode === 39) {
        player.position.x += 0.01
        camera.position.x -= 0.01
    }
    // if (keyCode === 38) {
    //     mars.position.y += 0.1
    // }
    // if (keyCode === 40) {
    //     mars.position.y -= 0.1
    // }
}