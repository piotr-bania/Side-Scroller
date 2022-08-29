import * as THREE from 'three'
import scene from './Scene'
import sizes from './Sizes'

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(0, 0, 5)
scene.add(camera)

export default camera