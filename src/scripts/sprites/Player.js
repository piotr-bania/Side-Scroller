import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import scene from '../../modules/Scene'
import camera from '../../modules/Camera'

// Import models
import Player from '../../assets/sprites/ball.gltf'

// Player
let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.position.set(0.2, 0.2, 0.2)
    scene.add(player)
    camera.lookAt(player.position)
})

export default player