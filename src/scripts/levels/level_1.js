import CANNON, {
    World
} from 'cannon'
import scene from '../main/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// ------------------------- Import models -------------------------
// Platforms
import Platform from '../../assets/levels/land_test.gltf'

let platform = new GLTFLoader()
platform.load(Platform, function (gltf) {
    platform = gltf.scene
    platform.receiveShadow = true
    platform.position.set(0.4, -1, 0)
    platform.rotation.set(0, 0, 0)
    // scene.add(platform)
})

// ------------------------- Physics -------------------------
// World
const world = new CANNON.World()
world.gravity.set(0, -9.82 * 0.001, 0)

// Player body
const playerShape = new CANNON.Sphere(0.2)
const playerBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 2, 0),
    shape: playerShape
})
world.addBody(playerBody)

// ------------------------- Controls -------------------------
document.onkeydown = function (e) {
    var keyCode = event.which
    if (keyCode === 37) {
        player.position.x -= 0.02
        // camera.position.x += 0.02
        // camera.lookAt(player.position.x)
    }
    if (keyCode === 39) {
        player.position.x += 0.02
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

export {
    platform,
    world,
    playerBody
}