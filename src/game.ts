//spider spawner
//DCL Code setup by Red Magnus
//the spawn code
//make the spider entity & define the spider's model
let spider = new Entity()
let spiderShape = new GLTFShape("models/spider1.glb")
function spawnSpider(x: number, y: number, z: number) {
  //define the individual spider's position & size
  spider.addComponent(spiderShape)
  spider.addComponent(new Transform({
    position: new Vector3(x, y, z),
    scale: new Vector3(0.25, 0.25, 0.25)
  }))
  //show the spider on screen
  engine.addEntity(spider)

  return spider
}

function spiderSpawning(howmany: number) {
  for (let i = 0; i < howmany; i++) {
    spawnSpider(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  }
}
spiderSpawning(3)
