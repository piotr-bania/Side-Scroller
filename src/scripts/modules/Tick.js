import * as THREE from 'three'
import renderer from './Renderer'
import scene from './Scene'
import camera from './Camera'
import CANNON from 'cannon'
import player from '../sprites/Player1'

// Physics
const world = new CANNON.World()
world.gravity.set(0, -9.82, 0)

// Sphere
const sphereShape = new CANNON.Sphere(0.2)
const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 0, 0),
    shape: sphereShape
})

world.addBody(sphereBody)

// Clock
const clock = new THREE.Clock()
let oldElapsedTime = 0

// Tick function 
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    // Update physics world
    world.step(1 / 60, deltaTime, 3)
    // player.position.copy(sphereBody.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

export default {
    clock,
    tick
}