import scene from '../main/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import CANNON from 'cannon'

// Import models
import Player from '../../assets/sprites/ball.gltf'

// ------------------------- Physics -------------------------
// World
const world = new CANNON.World()
world.gravity.set(0, -9.82, 0)

// Player body
const playerShape = new CANNON.Sphere(0.2)
const playerBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 2, 0),
    shape: playerShape
})
world.addBody(playerBody)

// Player
let player = new GLTFLoader()
player.load(Player, function (gltf) {
    player = gltf.scene
    player.receiveShadow = true
    player.position.set(0, 0, 0)
    scene.add(player)
})

// ------------------------- Controls -------------------------
document.onkeydown = function (e) {
    var keyCode = event.which
    if (keyCode === 37) {
        player.position.x -= 0.05
        // camera.position.x += 0.02
        // camera.lookAt(player.position.x)
    }
    if (keyCode === 39) {
        player.position.x += 0.05
        // camera.position.x -= 0.02
        // camera.lookAt(player.position.x)
    }
    // if (keyCode === 38) {
    //     mars.position.y += 0.1
    // }
    // if (keyCode === 40) {
    //     mars.position.y -= 0.1
    // }
}