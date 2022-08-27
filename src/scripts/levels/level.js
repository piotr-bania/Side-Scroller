import scene from '../main/setup'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

// Model
import Platform from '../../assets/levels/land_test_array.gltf'

let platform1 = new GLTFLoader()
platform1.load(Platform, function (gltf) {
    platform1 = gltf.scene
    platform1.receiveShadow = true
    platform1.position.set(0, 0, 0)
    platform1.rotation.set(0, 0, 0)
    scene.add(platform1)
})