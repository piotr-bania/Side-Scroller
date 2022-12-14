import * as THREE from 'three'
import scene from './Scene'
import {
    RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader'

// ------------------------- Fog -------------------------
const fog = new THREE.Fog('#F2F8F7', 1, 14)
scene.fog = fog

// ------------------------- HDRI -------------------------
import hdri from '../../assets/hdri/shanghai_bund_2k.hdr'

new RGBELoader()
    .load(hdri, function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.environment = texture
    })

    export default {
        fog,
        RGBELoader
    }