import * as THREE from 'three'
import scene from '../main/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// Import models
import Player from '../../assets/sprites/ball.gltf'

// Player
let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.position.set(0, -0.2, 0)
    scene.add(player)
    console.log(player.position)
})

// Sphere
const geometry = new THREE.SphereGeometry(0.2, 12, 12)
const material = new THREE.MeshBasicMaterial({
    color: 0xffff00
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// ------------------------- Player controls -------------------------
document.onkeydown = function (e) {
    var keyCode = event.which
    if (keyCode === 37) {
        sphere.position.x -= 0.01
        player.position.x = sphere.position.x
        player.position.x = sphere.position.x
    }
    if (keyCode === 39) {
        sphere.position.x += 0.01
        player.position.x = sphere.position.x

    }
    // if (keyCode === 38) {
    //     mars.position.y += 0.1
    // }
    // if (keyCode === 40) {
    //     mars.position.y -= 0.1
    // }
}

// ------------------------- Physics -------------------------

export {
    player,
    sphere
}