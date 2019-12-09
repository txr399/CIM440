var canvasWidth = 600;
var canvasHeight = 400;
var score = 0;

//setup draw player in a function
var player = {
  color: 'white',
	x : 280,
	width : 40,
	y : 355,
	height: 40,
	draw : function(){
		image(img_player, this.x, this.y, this.width, this.height);
    },
}


//setup draw bullet
var bullets = [];
function Bullet(T){
	T.active = true;
	T.x = player.x + player.width/2; //x pos of bullets
	T.y = player.y +  player.height/2; //y pos of bullets
	T.width = 3; //width of bullets
	T.height = 6; //height of bullets
	T.yVelocity = 4; //speed of bullets
	T.inBounds = function(){
		return T.x >= 0 && T.y >= 0 && T.x < canvasWidth - T.width && T.y < canvasHeight - T.height;
	}
	T.update = function(){
		T.active  = T.active && T.inBounds();
		T.y -= T.yVelocity;
	}
	T.draw = function(){
		image(img_bullet, T.x, T.y, T.width, T.height); //draw out the bullets
	}
	return T; //return bullets
}

//enemies
var enemies  = []; //looks similar to player (when coding, use bullet example)
function Enemy(I){
	I.active = true;
	I.x = Math.random() * canvasWidth;
	I.y = 0;
	I.width = 30;
	I.height = 30;
	I.yVelocity = 2;
	I.inBounds = function(){
		return I.x >= 0 && I.y >= 0 && I.x < canvasWidth - I.width && I.y < canvasHeight - I.height;
	}
	I.draw = function(){
		image(img_enemy, I.x, I.y, I.width, I.height);
	}
	I.update= function(){
		I.active = I.active && I.inBounds();
		I.y += I.yVelocity;
	}
	return I;
}


//what happens then enemy and bullet collide

function collision(enemy, bullet){
	return bullet.x + bullet.width >= enemy.x && bullet.x < enemy.x + enemy.width &&
			bullet.y + bullet.height >= enemy.y && bullet.y < enemy.y + enemy.height;
}
//canvas functions
var img_enemy, img_player, img_bullet;
var sound_enemy_dead, sound_player_dead, sound_bullet;

function preload(){
	img_enemy = loadImage("images/enemy.png");
	img_player = loadImage("images/player2.jpg");
	img_bullet = loadImage("images/bullet.png");

    sound_enemy_dead = loadSound("sounds/enemy_dead.mp3");
    sound_bullet = loadSound("sounds/pew.wav");
    sound_player_dead = loadSound("sounds/player_dead.wav");
}
function setup(){
	createCanvas(600,400);
	noCursor();
}
function draw(){
	fill(255);
	clear();
	background(0);
	text("Kill Points : " + score, 10, 10);
	fill(player.color);
	if(keyIsDown(LEFT_ARROW)){
		if(player.x-5 >= 0)
			player.x -= 5;
		else
			player.x = 0;
	}
	if(keyIsDown(RIGHT_ARROW)){
		if(player.x + 5 <= canvasWidth-player.width)
			player.x += 5;
		else
			player.x = canvasWidth - player.width;
	}
	if(keyIsDown(32)){
		bullets.push(Bullet({}));
        sound_bullet.play();
	}

	player.draw();

	bullets = bullets.filter(function(bullet){
		return bullet.active;
	});
	bullets.forEach(function(bullet){
		bullet.update();
		bullet.draw();
	});

	if(Math.random()<0.05){
		enemies.push(Enemy({}));
	}
	enemies = enemies.filter(function(enemy){
		return enemy.active;
	});
	enemies.forEach(function(enemy){
		enemy.update();
		enemy.draw();
	});

	bullets.forEach(function(bullet){
		enemies.forEach(function(enemy){
			if(collision(enemy, bullet)){
				enemy.active = false;
				bullet.active = false;
				score++;
                sound_enemy_dead.play();
			}
		});
	});

	enemies.forEach(function(enemy){
		if(collision(enemy, player)){ //if the player and enemy collide
			enemy.active = false;
			noLoop();
            sound_player_dead.play();
			textSize(80);
			text("GAME OVER", 50, 200);
		}
	});
}
