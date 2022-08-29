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
    scene.add(platform)
})

// ------------------------- Physics -------------------------

export {
    platform
}