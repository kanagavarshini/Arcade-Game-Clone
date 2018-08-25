// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed =1;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }

  update(dt){
    this.x += this.speed * dt;
    // updateEntities(dt); this is on the engine.js and it helps to control the enemies movement.

    // To create the loop we need to first establish what the cut off will be considered to leave the canvas.
    // in this case it will be when x is greater than 5
    this.isOutOffCanvasX = this.x > 5;
    this.isOutOffCanvasY = this.y < 1;
    if (this.isOutOffCanvasX) {
      this.x = -1;
      // -1 is where I want the enemy to reenter the canvas
    } else {
      this.x += dt;
    }
     console.log(this.x, this.y); //This was to see the coordinates of my enemies
  }

}
const enemy = new Enemy();



class EnemyOne extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 3;
    this.speed = .5;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }

}
const enemyOne = new EnemyOne();

class EnemyTwo extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 2;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }
}
const enemyTwo = new EnemyTwo();


class EnemyThree extends Enemy {
  constructor() {
    super();
    this.x = 0;
    this.y = 1;
    this.speed = .7;
  }
  // Draw the enemy on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75);
  }
}
const enemyThree = new EnemyThree();

// creating the allEnemies array
const allEnemies = [];
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree);
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



  class Player {
  constructor(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
    this.hit = false;
    this.moving = false;


  }
  // Draw the player on the screen, required method for game
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 75); //75
  }
  handleInput(input){
    switch(input){
      case 'left':
      if (this.x > 0){
        this.x = this.x-1;
      }
      break;
      case 'right':
      if (this.x <  4){
        this.x = this.x+1;
      }
      break;
      case 'up':
      if (this.y > 0){
        this.y = this.y+1;
      }
      break;
      case 'dowm':
      if (this.y < 5){
        this.y = this.y-1;
      }
    }
  }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


const player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
