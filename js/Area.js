class Area {
  constructor(game, tileset, tilemap) {
    let map = game.add.tilemap(tilemap, 16, 16);
    map.addTilesetImage(tileset);
    map.setCollisionByExclusion([-1, 12, 13, 20]);
    this.layer = map.createLayer(0);
    this.layer.setScale(2, 2);
    this.layer.resizeWorld();
  }
}

export default Area;