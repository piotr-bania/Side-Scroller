import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import scene from '../modules/Scene'

// Import models
import Level from '../../assets/levels/land_test.gltf'

// Player
let level = new GLTFLoader()
level.load(Level, function (gltf) {
    level = gltf.scene
    level.position.set(0.4, -0.8, 0)
    scene.add(level)
})

export default level