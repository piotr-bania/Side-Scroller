import * as THREE from 'three'
import renderer from './Renderer'
import scene from './Scene'
import camera from './Camera'

// Clock
const clock = new THREE.Clock()
let oldElapsedTime = 0

// Tick function 
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    // Update physics world
    // world.step(1 / 60, deltaTime, 3)
    // sphere.position.copy(playerBody.position)

    // Render
    renderer.render(scene, camera)

    // Controls
    // controls.update()
    // camera.lookAt(0,0,0)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

export default {
    clock,
    tick
}