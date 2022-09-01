import * as THREE from 'three'
import canvas from './Canvas'
import scene from './Scene'
import sizes from './Sizes'
import camera from './Camera'

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.1
renderer.outputEncoding = THREE.sRGBEncoding

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setClearColor(0x000000)
renderer.shadowMap.enabled = true

export default renderer