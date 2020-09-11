var ball,img,paddle;
var topEdge,bottomEdge,leftEdge;
function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
 /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(370,200,10,75);
  /* assign the images to the sprites */
  paddle.addImage("paddle",paddleImage);
 ball = createSprite(100,200,20,20);
  ball.addImage("ball",ballImage);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
  /* create Edge Sprites here */
 topEdge = createSprite(200,0,400,1);
 bottomEdge = createSprite(200,400,400,1);
 leftEdge = createSprite(0,200,1,400); 
  
  }

function draw() {
  background(205,153,0);
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y -20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  
  createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle, randomVelocity);
   /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(topEdge);
  paddle.bounceOff(bottomEdge);
  drawSprites();
  
}

function randomVelocity()
{
  // ball.velocityX = randomNumber(-5,5); 
  

  ball.velocityY = Math.floor(Math.random() * 14) - 7;
  
}

