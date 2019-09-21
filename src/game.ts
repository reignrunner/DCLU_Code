//spider spawner
import {BuilderHUD} from '/src/modules/BuilderHUD.ts'
//DCL Code setup by Red Magnus
//the spawn code
<<<<<<< Updated upstream
<<<<<<< Updated upstream
//make the spider entity & define the spider's model
let spider = new Entity()
let spiderShape = new GLTFShape("models/spider1.glb")
function spawnSpider(x: number, y: number, z: number) {
  //define the individual spider's position & size
=======
=======
>>>>>>> Stashed changes
const hud:BuilderHUD =  new BuilderHUD()
hud.setDefaultParent(scene)
function spawnSpider(x: number, y: number, z: number) {
  //make the spider entity & define the spider's model
  let spider = new Entity()
  let spiderShape = new GLTFShape("models/spider1.glb")
  //define spider's position and size
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  spider.addComponent(spiderShape)
  spider.addComponent(new Transform({
    position: new Vector3(x, y, z),
    scale: new Vector3(0.25, 0.25, 0.25)
  }))
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
  //show the spider on screen
  engine.addEntity(spider)

  return spider
}

function spiderSpawning(howmany: number) {
  for (let i = 0; i < howmany; i++) {
    spawnSpider(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  }
}
spiderSpawning(0)
spawnSpider(8, 8, 8)
hud.attachToEntity(spider)
