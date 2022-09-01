import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import scene from '../modules/Scene'

// Import models
import Level from '../../assets/levels/land_2.gltf'

// Player
let level = new GLTFLoader()
level.load(Level, function (gltf) {
    level = gltf.scene
    level.scale.set(0.2, 0.15, 0.1)
    level.position.set(0, -1, 0)
    scene.add(level)
})

export default level