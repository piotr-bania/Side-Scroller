import * as THREE from 'three'
import scene from '../core/setup'
import camera from '../core/setup'
import platform1 from '../levels/level'

import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

import Player from '../../assets//outlined_black.gltf'

let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.receiveShadow = true
    player.scale.set(0.15, 0.15, 0.15)
    player.rotation.set(0, 1, 0)
    scene.add(player)
})

// ------------------------- Player controls -------------------------
document.onkeydown = function (e) {
    var keyCode = event.which
    if (keyCode === 37) {
        player.position.x -= 0.05
        camera.position.x += 0.05
    }
    if (keyCode === 39) {
        player.position.x += 0.05
        camera.position.x -= 0.05
    }
    // if (keyCode === 38) {
    //     mars.position.y += 0.1
    // }
    // if (keyCode === 40) {
    //     mars.position.y -= 0.1
    // }
}
camera.lookAt(0,0,0)

// Model
import Outline from '../../assets/outlined_black.gltf'

let black = new GLTFLoader()
black.load(Outline, function (gltf) {
    black = gltf.scene
    black.rotation.set(0, 1.5, 0)
    scene.add(black)
})