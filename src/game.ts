//spider plane
//DCL Code setup by Red Magnus

//make the spider
const spider = new entity()
//define the spider's model
spider.addComponent(new GLTFShape("models/spider1.glb"))
//define spider's position, size and direction
spider.addComponent(new Transform({
  position: new Vector3(8, 1, 8),
  scale: new Vector3(2, 2, 2)
}))
spider.addComponent(new Billboard())
//show the spider on screen
engine.addEntity(spider)
