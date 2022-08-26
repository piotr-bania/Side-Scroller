import * as THREE from 'three'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'
import {
    RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

import * as dat from 'lil-gui'

// ------------------------- Canvas -------------------------
const canvas = document.querySelector('canvas.webgl')

// ------------------------- Scene -------------------------
const scene = new THREE.Scene()

// ------------------------- Sizes -------------------------
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// ------------------------- Camera -------------------------
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 5)
scene.add(camera)

// ------------------------- Lights -------------------------
// // Ambient
// const ambientLight = new THREE.AmbientLight(0xffa95c, 1)
// scene.add(ambientLight)

// // Point
// const pointLight = new THREE.PointLight(0xcc6600, 1)
// pointLight.position.set(1.56, 2.17, 2.54)
// scene.add(pointLight)
// // Point Helper
// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
// scene.add(pointLightHelper)

// // Directional
// const directionalLight = new THREE.DirectionalLight(0x03544e, 5)
// directionalLight.position.set(3, 2, 3)
// scene.add(directionalLight)
// // Directional Helper
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
// scene.add(directionalLightHelper)

// Hemisphere
const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
hemisphereLight.position.set(1, -1, 0)
scene.add(hemisphereLight)

// Spot
const spotLight = new THREE.SpotLight(0xffa95c, 1)
spotLight.position.set(-5, 5, 5)
spotLight.castShadow = true
scene.add(spotLight)
// // Spot Helper
// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)

// ------------------------- Fog -------------------------
const fog = new THREE.Fog('#000000', 1, 35)
scene.fog = fog

// ------------------------- HDRI -------------------------
import hdri from '../../assets/hdri/kiara_1_dawn_2k.hdr'

new RGBELoader()
    .load(hdri, function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.environment = texture
    })


// ------------------------- Debug -------------------------
const gui = new dat.GUI()

// // Point
// gui.add(pointLight.position, 'x', -5, 5, 0.01, ).name('PointLight X')
// gui.add(pointLight.position, 'y', -5, 5, 0.01, ).name('PointLight Y')
// gui.add(pointLight.position, 'z', -5, 5, 0.01, ).name('PointLight Z')

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

// ------------------------- Controls -------------------------
const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = false
controls.enableDamping = true
controls.autoRotateSpeed = 10
controls.enableZoom = false

// ------------------------- Clock -------------------------
const clock = new THREE.Clock()

// ------------------------- Tick function -------------------------
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    // Controls
    controls.update()

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