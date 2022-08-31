// Styles
import './styles/main.scss'

// Modules
import data from './scripts/modules/Data'
import canvas from './scripts/modules/Canvas'
import scene from './scripts/modules/Scene'
import sizes from './scripts/modules/Sizes'
import camera from './scripts/modules/Camera'
import renderer from './scripts/modules/Renderer'
import controls from './scripts/modules/OrbitControls'
import tick from './scripts/modules/Tick'
import window from './scripts/modules/ResizeUpdate'
import environment from './scripts/modules/Environment'
import machine from './scripts/modules/Machine'

// Scripts
import player from './scripts/sprites/Player1'
import level from './scripts/levels/Level1'










// machine.addCallback(() => {
//     player.position.x += 0.01
//     renderer.render(scene, camera)
// })
// machine.start()