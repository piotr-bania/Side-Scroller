import * as THREE from 'three'
import scene from './setup'
import * as dat from 'lil-gui'

// ------------------------- Lights -------------------------
// // Ambient
// const ambientLight = new THREE.AmbientLight(0xffa95c, 1)
// scene.add(ambientLight)

// // Point
// const pointLight = new THREE.PointLight(0xcc6600, 1)
// pointLight.position.set(0, 0.5, 0)
// scene.add(pointLight)
// // Point Helper
// const sphereSize = 0.1;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
// scene.add(pointLightHelper)

// // Directional
// const directionalLight = new THREE.DirectionalLight(0x03544e, 1)
// directionalLight.position.set(1, 1, 1)
// scene.add(directionalLight)
// Directional Helper
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1)
// scene.add(directionalLightHelper)

// // Hemisphere
// const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
// hemisphereLight.position.set(1, -1, 0)
// scene.add(hemisphereLight)

// // Spot
// const spotLight = new THREE.SpotLight(0xffa95c, 1)
// spotLight.position.set(-5, 5, 5)
// spotLight.castShadow = true
// scene.add(spotLight)
// // Spot Helper
// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)

// ------------------------- Debug -------------------------
// const gui = new dat.GUI()

// // Point
// gui.add(pointLight.position, 'x', -2, 2, 0.01, ).name('PointLight X')
// gui.add(pointLight.position, 'y', -2, 2, 0.01, ).name('PointLight Y')
// gui.add(pointLight.position, 'z', -2, 2, 0.01, ).name('PointLight Z')