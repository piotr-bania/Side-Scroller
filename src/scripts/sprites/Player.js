import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import scene from '../modules/Scene'
import camera from '../modules/Camera'

// Import models
import Player from '../../assets/sprites/ball.gltf'

// Player
let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.position.set(0, 0, 0)
    scene.add(player)

    //  Player controls
    document.onkeydown = function (e) {
        var keyCode = event.which
        if (keyCode === 37) {
            player.position.x -= 0.01
            camera.lookAt(player.position)
        }
        if (keyCode === 39) {
            player.position.x += 0.01
            camera.lookAt(player.position)
        }
        // if (keyCode === 38) {
        //     mars.position.y += 0.1
        // }
        // if (keyCode === 40) {
        //     mars.position.y -= 0.1
        // }
    }
})

export default player