import * as THREE from 'three'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import scene from '../../modules/Scene'

// Import models
import Player from '../../assets/sprites/ball.gltf'

// Player
let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.position.set(0, 0, 0)
    scene.add(player)
    console.log(player.position)
})

export default player