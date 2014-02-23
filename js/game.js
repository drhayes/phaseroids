var ROTATION = 120;

var cursors;
var player;

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  game.load.image('ship', '/img/ship.png');
}

function create() {
  player = game.add.sprite(320, 320, 'ship');
  player.body.allowRotation = true;
  player.anchor = new Phaser.Point(0.5, 0.5);

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (cursors.up.isDown) {
    game.physics.velocityFromAngle(
      player.angle - 90, 200, player.body.velocity);
  }

  player.body.angularVelocity = 0;
  if (cursors.right.isDown) {
    player.body.angularVelocity = ROTATION;
  }
  if (cursors.left.isDown) {
    player.body.angularVelocity = -ROTATION;
  }
}
