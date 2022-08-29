import * as THREE from 'three'
// import {
//     OrbitControls
// } from 'three/examples/jsm/controls/OrbitControls.js'

// ------------------------- Canvas -------------------------
const canvas = document.querySelector('canvas.webgl')

// ------------------------- Scene -------------------------
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(2))

// ------------------------- Sizes -------------------------
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// ------------------------- Camera -------------------------
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 5)
scene.add(camera)

// ------------------------- Renderer -------------------------
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.4
renderer.outputEncoding = THREE.sRGBEncoding

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setClearColor(0x000000)
renderer.shadowMap.enabled = true

// // ------------------------- Controls -------------------------
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableZoom = true
// controls.enableDamping = true
// controls.minDistance = 2
// controls.maxDistance = 5
// controls.enablePan = false
// controls.maxPolarAngle = Math.PI / 2 - 0.05

// ------------------------- Clock -------------------------
const clock = new THREE.Clock()
let oldElapsedTime = 0

// ------------------------- Tick function -------------------------
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

// ------------------------- Resize window -------------------------
window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Casting shadows
    renderer.shadowMap.enabled = true
})

export default scene