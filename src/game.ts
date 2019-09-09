//spider plane
//DCL Code setup by Red Magnus
const spider = new entity()
spider.addComponent(new GLTFShape("models/spider1.glb"))
spider.addComponent(new Transform({
  position: new Vector3(5, 1, 5)
}))
engine.addEntity(spider)
