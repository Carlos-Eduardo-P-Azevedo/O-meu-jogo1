//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var player;
var parede1,parede2,parede3,parede4,parede5,parede6,parede7,parede8,parede9,parede10,parede11,parede12,parede13,parede14,parede15;
var chao1,chao1img;
var chao2,chao2img;
var chao3,chao3img;
var chao4,chao4img;
var teletransporte1,teletransporte2,teletransporte3,teletransporte4,porta1,porta2;
var bananaimg,macaimg,laranjaimg;
var maca1,maca2,maca3,maca4,maca5,banana1,banana2,banana3,banana4,banana5,laranja1,laranja2,laranja3,laranja4,laranja5;
var cesta,cestaimg;
var pontodereferencia;
var grupoBanana,grupoMaca,grupoLaranja;
var caminho1,caminho2,caminho3,caminho4,caminho5,caminho6,caminho7,caminho8;
var caminho9,caminho10,caminho11,caminho12,caminho13,caminho14,caminho15,caminho16;
var caminho17,caminho18,caminho19,caminho20;
var areadeataque1,areadeataque2,areadeataque3,areadeataque4,areadeataque5;
var inimigo,inimigo1,inimigo2,inimigo3,minichefe;
var amarelo1,amarelo2,amarelo3,amarelo4,amarelo5,amarelo6,amarelo7,amareloimg,amarelogrupo;
var tenda,tendaimg;
var bloqueio;
var mouse;
var ataque1,ataque2,ataque3;
var descanso = 26;
var vidadoinimigo = 40,vidadoinimigo1 = 40,vidadoinimigo2 = 40,vidadoinimigo3 = 40,vidadominichefe = 160,vidadoplayer = 100;
var dano = 10;
var quantidadedeinimigo = 0,valor1 = 0,valor2 = 0,valormaca = 0,valorbana = 0,valorlaran = 0,horda = 1;
var boladeenergia1,boladeenergia2,boladeenergiaani,boladeenergiagrupo;
var campoeletrico,campoeletricoimg,paredeeletricaimg;

var jogoprincipal = 0;
var jogo1 = 1;
var jogo2 = 2;
var jogo3 = 3;
var mercadin = 4;

function preload(){
chao1img = loadImage("imagens/imagemFundo.png");
chao2img = loadImage("imagens/mysticaltree.PNG");
bananaimg = loadImage("imagens/banana.png");
macaimg = loadImage("imagens/maca.png");
laranjaimg = loadImage("imagens/laranja.png");
cestaimg = loadImage("imagens/cesta2.png");
chao3img = loadImage("imagens/arenadebatalha.png")
amareloimg = loadAnimation("imagens/personagemamarelo1.png","imagens/personagemamarelo2.png","imagens/personagemamarelo3.png","imagens/personagemamarelo4.png",
"imagens/personagemamarelo5.png","imagens/personagemamarelo4.png","imagens/personagemamarelo3.png","imagens/personagemamarelo2.png");
boladeenergiaani = loadAnimation("imagens/boladeenergia1.png","imagens/boladeenergia2.png","imagens/boladeenergia3.png","imagens/boladeenergia2.png");
campoeletricoimg = loadImage("imagens/campoeletrico.png");
paredeeletricaimg = loadImage("imagens/paredeeletrica.png")
chao4img = loadImage("imagens/vendinhadoseumadruga.png")
tendaimg = loadImage("imagens/tenda.png")}

function setup(){
  createCanvas(windowWidth,windowHeight);

  chao1 = createSprite(width/2,height/2);
  chao1.addImage(chao1img);
  chao1.depth = 0;

  chao2 = createSprite(width/2,-300);
  chao2.addImage(chao2img);
  chao2.scale = 1.15;
  chao2.depth = 0;

  chao3 = createSprite(width/2,-300);
  chao3.addImage(chao3img);
  chao3.depth = 0;

  chao4 = createSprite(width/2,-300);
  chao4.addImage(chao4img);
  chao4.depth = 0;

  parede11 = createSprite(-200,-200,600,20);
  parede11.addImage(paredeeletricaimg);
  parede11.rotation = 30;

  parede12 = createSprite(-200,-200,600,20);
  parede12.addImage(paredeeletricaimg);
  parede12.rotation = -30;

  parede13 = createSprite(-200,-200,600,20);
  parede13.addImage(paredeeletricaimg);
  parede13.rotation = 60;

  parede14 = createSprite(-200,-200,600,20);
  parede14.addImage(paredeeletricaimg);
  parede14.rotation = -60;

  areadeataque5 = createSprite(0,0,75,75);
  areadeataque5.visible = false;

  mouse = createSprite(width/2,height/2,10,10);

  bloqueio = createSprite(width/2,height/2,50,50);

  player = createSprite(width/2,height/2,20,20);
  player.shapeColor = "DeepSkyBlue";
  player.depth = 1;

  inimigo = createSprite(0,0,25,25);
  inimigo.shapeColor = "black";
  inimigo.depth = 1;
  inimigo1 = createSprite(0,0,25,25);
  inimigo1.shapeColor = "black";
  inimigo1.depth = 1;
  inimigo2 = createSprite(0,0,25,25);
  inimigo2.shapeColor = "black";
  inimigo2.depth = 1;
  inimigo3 = createSprite(0,0,25,25);
  inimigo3.shapeColor = "black";
  inimigo3.depth = 1;
  minichefe = createSprite(0,0,50,50);
  minichefe.shapeColor = "black";
  minichefe.depth = 1;

  campoeletrico = createSprite(-100,0);
  campoeletrico.addImage(campoeletricoimg);
  campoeletrico.depth = 1;

  parede6 = createSprite(width/2+256,height/2,1,600);
  parede6.visible = false;

  parede7 = createSprite(width/2-256,height/2,1,600);
  parede7.visible = false;

  parede9 = createSprite(width/2,height/2+280,510,25);
  parede9.visible = false;

  parede10 = createSprite(width/2,height/2-280,510,25);
  parede10.visible = false;

  teletransporte1 = createSprite(width/2-200,height/2+150,50,50);
  teletransporte1.shapeColor = "ForestGreen";

  teletransporte2 = createSprite(-50,height/2+280,50,30);
  teletransporte2.shapeColor = "ForestGreen";

  teletransporte3 = createSprite(width/2+200,height/2+150,50,50);
  teletransporte3.shapeColor = "DarkRed";

  teletransporte4 = createSprite(-50,height/2+243,30,50);
  teletransporte4.shapeColor = "DarkRed";

  porta1 = createSprite(width/2+385,height/2-170,20,65);
  porta1.shapeColor = "SaddleBrown";

  areadeataque1 = createSprite(0,0,50,15);
  areadeataque1.shapeColor = "DimGray";

  areadeataque2 = createSprite(0,0,50,15);
  areadeataque2.shapeColor = "DimGray";

  areadeataque3 = createSprite(0,0,15,50);
  areadeataque3.shapeColor = "DimGray";

  areadeataque4 = createSprite(0,0,15,50);
  areadeataque4.shapeColor = "DimGray";

  parede1 = createSprite(width/2,height/2-300,800,10);
  parede1.shapeColor = "white";

  parede2 = createSprite(width/2,height/2+300,800,10);
  parede2.shapeColor = "white";

  parede3 = createSprite(width/2-400,height/2,10,610);
  parede3.shapeColor = "white";

  parede4 = createSprite(width/2+400,height/2,10,610);
  parede4.shapeColor = "white";

  parede5 = createSprite(width/2,height/2+185,790,10);
  parede5.visible = false;

  parede15 = createSprite(width/2,height/2+260,790,1);
  parede15.visible = false;
  
  caminho1 = createSprite(0,0,300,300);
  caminho2 = createSprite(0,0,300,300);
  caminho3 = createSprite(0,0,300,300);
  caminho4 = createSprite(0,0,300,300);
  caminho5 = createSprite(0,0,300,300);
  caminho6 = createSprite(0,0,300,300);
  caminho7 = createSprite(0,0,300,300);
  caminho8 = createSprite(0,0,300,300);

  caminho9 = createSprite(0,0,100,100);
  caminho10 = createSprite(0,0,100,100);
  caminho11 = createSprite(0,0,100,100);
  caminho12 = createSprite(0,0,100,100);
  caminho13 = createSprite(0,0,100,100);
  caminho14 = createSprite(0,0,100,100);
  caminho15 = createSprite(0,0,100,100);
  caminho16 = createSprite(0,0,100,100);

  caminho17 = createSprite(0,0,30,30);
  caminho18 = createSprite(0,0,30,30);
  caminho19 = createSprite(0,0,30,30);
  caminho20 = createSprite(0,0,30,30);

  caminho1.visible = false;
  caminho2.visible = false;
  caminho3.visible = false;
  caminho4.visible = false;
  caminho5.visible = false;
  caminho6.visible = false;
  caminho7.visible = false;
  caminho8.visible = false;
  caminho9.visible = false;
  caminho10.visible = false;
  caminho11.visible = false;
  caminho12.visible = false;
  caminho13.visible = false;
  caminho14.visible = false;
  caminho15.visible = false;
  caminho16.visible = false;
  caminho17.visible = false;
  caminho18.visible = false;
  caminho19.visible = false;
  caminho20.visible = false;
  areadeataque1.visible = false;
  areadeataque2.visible = false;
  areadeataque3.visible = false;
  areadeataque4.visible = false;
  bloqueio.visible = false;
  mouse.visible = false;
  
  macabanalaran = new Group();
  boladeenergiagrupo = new Group();

  laranja1 = createSprite(-25,height/2-250);
  laranja1.addImage(laranjaimg);
  laranja1.setCollider("circle",1,0,19);
  laranja2 = createSprite(-25,height/2-250);
  laranja2.addImage(laranjaimg);
  laranja2.setCollider("circle",1,0,19);
  laranja3 = createSprite(-25,height/2-250);
  laranja3.addImage(laranjaimg);
  laranja3.setCollider("circle",1,0,19);
  laranja4 = createSprite(-25,height/2-250);
  laranja4.addImage(laranjaimg);
  laranja4.setCollider("circle",1,0,19);
  laranja5 = createSprite(-25,height/2-250);
  laranja5.addImage(laranjaimg);
  laranja5.setCollider("circle",1,0,19);
  maca1 = createSprite(-25,height/2-250);
  maca1.addImage(macaimg);
  maca1.setCollider("circle",0,4,21);
  maca1.scale = 0.8;
  maca2 = createSprite(-25,height/2);
  maca2.addImage(macaimg);
  maca2.setCollider("circle",0,4,21);
  maca2.scale = 0.8;
  maca3 = createSprite(-25,height/2-250);
  maca3.addImage(macaimg);
  maca3.setCollider("circle",0,4,21);
  maca3.scale = 0.8;
  maca4 = createSprite(-25,height/2-250);
  maca4.addImage(macaimg);
  maca4.setCollider("circle",0,4,21);
  maca4.scale = 0.8;
  maca5 = createSprite(-25,height/2-250);
  maca5.addImage(macaimg);
  maca5.setCollider("circle",0,4,21);
  maca5.scale = 0.8;
  banana1 = createSprite(-25,height/2-250);
  banana1.addImage(bananaimg);
  banana1.setCollider("circle",1,0,19);
  banana2 = createSprite(-25,height/2-250);
  banana2.addImage(bananaimg);
  banana2.setCollider("circle",1,0,19);
  banana3 = createSprite(-25,height/2-250);
  banana3.addImage(bananaimg);
  banana3.setCollider("circle",1,0,19);
  banana4 = createSprite(-25,height/2-250);
  banana4.addImage(bananaimg);
  banana4.setCollider("circle",1,0,19);
  banana5 = createSprite(-25,height/2-250);
  banana5.addImage(bananaimg);
  banana5.setCollider("circle",1,0,19);

//  engine = Engine.create();
//  world = engine.world;
}

function draw(){
  background("black");
//  Engine.update(engine);

  if(jogoprincipal === 0){

  if(player.isTouching(teletransporte1)){
    chao2.x = width/2;
    chao2.y = height/2;
    chao1.y = -300;

    player.x = width/2;
    player.y = height/2+200;

    teletransporte2.x = width/2-370;

    player.depth = 1;
    chao2.depth = player.depth;
    player.depth = player.depth+1;

    teletransporte1.x = -50;
    teletransporte3.x = -50;
    porta1.x = -50;

    cesta = createSprite(width/2,height/2);
    cesta.addImage(cestaimg);
    cesta.scale = 2;
    cesta.setCollider("rectangle",0,0,50,5);
    cesta.debug = true;

    jogoprincipal = jogo1;
  }
  if(player.isTouching(teletransporte3)){
    chao3.y = height/2;

    chao1.y = -300;
    
    amarelo1 = createSprite(width/2+300,Math.round(random(height/2-270,height/2+270)));
    amarelo1.addAnimation("yellow",amareloimg);
    amarelo1.frameDelay = 3;

    amarelo2 = createSprite(width/2+300,Math.round(random(height/2-270,height/2+270)));
    amarelo2.addAnimation("yellow",amareloimg);
    amarelo2.frameDelay = 3;

    amarelo3 = createSprite(width/2-370,Math.round(random(height/2-270,height/2+270)));
    amarelo3.addAnimation("yellow",amareloimg);
    amarelo3.frameDelay = 3;

    amarelo4 = createSprite(width/2-370,Math.round(random(height/2-270,height/2+270)));
    amarelo4.addAnimation("yellow",amareloimg);
    amarelo4.frameDelay = 3;

    amarelo5 = createSprite(width/2-370,Math.round(random(height/2-270,height/2+270)));
    amarelo5.addAnimation("yellow",amareloimg);
    amarelo5.frameDelay = 3;

    amarelo6 = createSprite(width/2+370,Math.round(random(height/2-270,height/2+270)));
    amarelo6.addAnimation("yellow",amareloimg);
    amarelo6.frameDelay = 3;

    amarelo7 = createSprite(width/2-300,Math.round(random(height/2-270,height/2+270)));
    amarelo7.addAnimation("yellow",amareloimg);
    amarelo7.frameDelay = 3;


    teletransporte1.x = -50;
    teletransporte3.x = -50;
    porta1.x = -50;
    teletransporte4.x = width/2-240;

    jogoprincipal = jogo2;
  }}

  if(player.isTouching(porta1)){
    chao4.y = height/2;

    chao1.y = -300;

    teletransporte1.x = -50;
    teletransporte3.x = -50;
    porta1.x = -50;

    jogoprincipal = mercadin;
  }

  if(jogoprincipal == jogo1){
    player.collide(parede5);

    cesta.x = player.x+1;
    cesta.y = player.y-60;

    if(frameCount % 33 == 0){fruit();}

    if(banana1.isTouching(parede15) || banana1.isTouching(cesta)){banana1.y = height/2-250; banana1.x = -25;}
    if(banana2.isTouching(parede15) || banana2.isTouching(cesta)){banana2.y = height/2-250; banana2.x = -25;}
    if(banana3.isTouching(parede15) || banana3.isTouching(cesta)){banana3.y = height/2-250; banana3.x = -25;}
    if(banana4.isTouching(parede15) || banana4.isTouching(cesta)){banana4.y = height/2-250; banana4.x = -25;}
    if(banana5.isTouching(parede15) || banana5.isTouching(cesta)){banana5.y = height/2-250; banana5.x = -25;}
    if(maca1.isTouching(parede15) || maca1.isTouching(cesta)){maca1.y = height/2-250; maca1.x = -25;}
    if(maca2.isTouching(parede15) || maca2.isTouching(cesta)){maca2.y = height/2-250; maca2.x = -25;}
    if(maca3.isTouching(parede15) || maca3.isTouching(cesta)){maca3.y = height/2-250; maca3.x = -25;}
    if(maca4.isTouching(parede15) || maca4.isTouching(cesta)){maca4.y = height/2-250; maca4.x = -25;}
    if(maca5.isTouching(parede15) || maca5.isTouching(cesta)){maca5.y = height/2-250; maca5.x = -25;}
    if(laranja1.isTouching(parede15) || laranja1.isTouching(cesta)){laranja1.y = height/2-250; laranja1.x = -25;}
    if(laranja2.isTouching(parede15) || laranja2.isTouching(cesta)){laranja2.y = height/2-250; laranja2.x = -25;}
    if(laranja3.isTouching(parede15) || laranja3.isTouching(cesta)){laranja3.y = height/2-250; laranja3.x = -25;}
    if(laranja4.isTouching(parede15) || laranja4.isTouching(cesta)){laranja4.y = height/2-250; laranja4.x = -25;}
    if(laranja5.isTouching(parede15) || laranja5.isTouching(cesta)){laranja5.y = height/2-250; laranja5.x = -25;}
   
    

    if(player.isTouching(teletransporte2)){
      jogoprincipal = 0;

      chao2.y = -300;
      chao1.y = height/2;

      teletransporte2.x = -50;

      teletransporte1.x = width/2-200;
      teletransporte3.x = width/2+200;
      porta1.x = width/2+385;

      cesta.destroy();
    
      maca1.x = -25; maca2.x = -25; maca3.x = -25; maca4.x = -25; maca5.x = -25;
      maca1.y = height/2-250; maca2.y = height/2-250; maca3.y = height/2-250; maca4.y = height/2-250; maca5.y = height/2-250;
      laranja1.x = -25; laranja2.x = -25; laranja3.x = -25; laranja4.x = -25; laranja5.x = -25;
      laranja1.y = height/2-250; laranja2.y = height/2-250; laranja3.y = height/2-250; laranja4.y = height/2-250; laranja5.y = height/2-250;
      banana1.x = -25; banana2.x = -25; banana3.x = -25; banana4.x = -25; banana5.x = -25;
      banana1.y = height/2-250; banana2.y = height/2-250; banana3.y = height/2-250; banana4.y = height/2-250; banana5.y = height/2-250;}
    
      if(banana1.x > 360){banana1.velocityY = 3;}else{banana1.velocityY = 0;}
      if(banana2.x > 360){banana2.velocityY = 3;}else{banana2.velocityY = 0;}
      if(banana3.x > 360){banana3.velocityY = 3;}else{banana3.velocityY = 0;}
      if(banana4.x > 360){banana4.velocityY = 3;}else{banana4.velocityY = 0;}
      if(banana5.x > 360){banana5.velocityY = 3;}else{banana5.velocityY = 0;}
      if(maca1.x > 360){maca1.velocityY = 4;}else{maca1.velocityY = 0;}
      if(maca2.x > 360){maca2.velocityY = 4;}else{maca2.velocityY = 0;}
      if(maca3.x > 360){maca3.velocityY = 4;}else{maca3.velocityY = 0;}
      if(maca4.x > 360){maca4.velocityY = 4;}else{maca4.velocityY = 0;}
      if(maca5.x > 360){maca5.velocityY = 4;}else{maca5.velocityY = 0;}
      if(laranja1.x > 360){laranja1.velocityY = 5;}else{laranja1.velocityY = 0;}
      if(laranja2.x > 360){laranja2.velocityY = 5;}else{laranja2.velocityY = 0;}
      if(laranja3.x > 360){laranja3.velocityY = 5;}else{laranja3.velocityY = 0;}
      if(laranja4.x > 360){laranja4.velocityY = 5;}else{laranja4.velocityY = 0;}
      if(laranja5.x > 360){laranja5.velocityY = 5;}else{laranja5.velocityY = 0;}}

  if(jogoprincipal == jogo2){
    player.depth = 1;
    chao3.depth = player.depth;
    player.depth = player.depth+1;

    if(vidadoinimigo < 1){
      inimigo.x = 0;
      inimigo.y = 0;
    }
    if(vidadoinimigo1 < 1){
      inimigo1.x = 0;
      inimigo1.y = 0;
    }
    if(vidadoinimigo2 < 1){
      inimigo2.x = 0;
      inimigo2.y = 0;
    }
    if(vidadoinimigo3 < 1){
      inimigo3.x = 0;
      inimigo3.y = 0;
    }
    if(vidadominichefe < 1){
      minichefe.x = 0;
      minichefe.y = 0;
      horda = horda+1;
      vidadominichefe = 160;
      teletransporte4.x = width/2-240;
      valor2 = 0;
    }
    
    if(quantidadedeinimigo == 16){
      
      quantidadedeinimigo = 0;

      vidadoinimigo = 40;
      vidadoinimigo1 = 40;
      vidadoinimigo2 = 40;
      vidadoinimigo3 = 40;

      horda = horda+1;

      teletransporte4.x = width/2-240;

      valor2 = 0;
    }

    if(keyWentDown("space") && horda % 10 != 0){
      inimigo.x = Math.round(random(width/2-240,width/2+240));
      inimigo.y = Math.round(random(height/2-270,height/2+270));
      inimigo1.x = Math.round(random(width/2-240,width/2+240));
      inimigo1.y = Math.round(random(height/2-270,height/2+270));
      inimigo2.x = Math.round(random(width/2-240,width/2+240));
      inimigo2.y = Math.round(random(height/2-270,height/2+270));
      inimigo3.x = Math.round(random(width/2-240,width/2+240));
      inimigo3.y = Math.round(random(height/2-270,height/2+270));
      teletransporte4.x = -50;
      valor2 = 1;
    } else if(keyWentDown("space") && horda % 10 == 0){
      minichefe.x = width/2;
      minichefe.y = height/2;
      teletransporte4.x = -50;
      valor2 = 1;
    }

    if(valor1 == 600 && valor2 == 1){
      valor2 = 2;
      valor1 = 0;
    }

    if(valor1 == 620 && valor2 == 2){
      valor2 = 1;
      valor1 = 0;
    }

    if((valor1 == 50 || valor1 == 150 || valor1 == 200 || valor1 == 310) && valor2 == 2){
      boladeenergia(0,4);
      boladeenergia(4,0);
      boladeenergia(0,-4);
      boladeenergia(-4,0);
      boladeenergia(0.75,4);
      boladeenergia(-0.75,4);
      boladeenergia(1.5,4);
      boladeenergia(-1.5,4);
      boladeenergia(4,0.75);
      boladeenergia(4,-0.75);
      boladeenergia(4,1.5);
      boladeenergia(4,-1.5);
      boladeenergia(0.75,-4);
      boladeenergia(-0.75,-4);
      boladeenergia(1.5,-4);
      boladeenergia(-1.5,-4);
      boladeenergia(-4,0.75);
      boladeenergia(-4,-0.75);
      boladeenergia(-4,1.5);
      boladeenergia(-4,-1.5);}
    if((valor1 == 100 || valor1 == 150 || valor1 == 240 || valor1 == 300 || valor1 == 350) && valor2 == 2){
      boladeenergiadiagonal(4,4,60);
      boladeenergiadiagonal(-4,4,60);
      boladeenergiadiagonal(4,-4,60);
      boladeenergiadiagonal(-4,-4,60);
      boladeenergiadiagonal(3.3,4.7,52);
      boladeenergiadiagonal(-3.3,4.7,52);
      boladeenergiadiagonal(3.3,-4.7,52);
      boladeenergiadiagonal(-3.3,-4.7,52);
      boladeenergiadiagonal(4.7,3.3,52);
      boladeenergiadiagonal(-4.7,3.3,52);
      boladeenergiadiagonal(4.7,-3.3,52);
      boladeenergiadiagonal(-4.7,-3.3,52);
      boladeenergiadiagonal(2.7,5.5,45);
      boladeenergiadiagonal(-2.7,5.5,45);
      boladeenergiadiagonal(2.7,-5.5,45);
      boladeenergiadiagonal(-2.7,-5.5,45);
      boladeenergiadiagonal(5.5,2.7,45);
      boladeenergiadiagonal(-5.5,2.7,45);
      boladeenergiadiagonal(5.5,-2.7,45);
      boladeenergiadiagonal(-5.5,-2.7,45);}
    if((valor1 == 430 || valor1 == 490) && valor2 == 2){
      boladeenergia(0,4);
      boladeenergia(4,0);
      boladeenergia(0,-4);
      boladeenergia(-4,0);
      boladeenergia(1.5,4);
      boladeenergia(-1.5,4);
      boladeenergia(4,1.5);
      boladeenergia(4,-1.5);
      boladeenergia(1.5,-4);
      boladeenergia(-1.5,-4);
      boladeenergia(-4,1.5);
      boladeenergia(-4,-1.5);}
    if(valor1 == 460 && valor2 == 2){
      boladeenergia(0.75,4);
      boladeenergia(-0.75,4);
      boladeenergia(4,0.75);
      boladeenergia(4,-0.75);
      boladeenergia(0.75,-4);
      boladeenergia(-0.75,-4);
      boladeenergia(-4,0.75);
      boladeenergia(-4,-0.75);}
    if(valor1 == 520 && valor2 == 2){
      boladeenergia(0,4);
      boladeenergia(4,0);
      boladeenergia(0,-4);
      boladeenergia(-4,0);
      boladeenergia(-0.75,4);
      boladeenergia(-1.5,4);
      boladeenergia(4,-0.75);
      boladeenergia(4,-1.5);
      boladeenergia(-0.75,-4);
      boladeenergia(-1.5,-4);
      boladeenergia(-4,-0.75);
      boladeenergia(-4,-1.5);}
    if(valor1 == 550 && valor2 == 2){
      boladeenergia(0,4);
      boladeenergia(4,0);
      boladeenergia(0,-4);
      boladeenergia(-4,0);
      boladeenergia(0.75,4);
      boladeenergia(1.5,4);
      boladeenergia(4,0.75);
      boladeenergia(4,1.5);
      boladeenergia(0.75,-4);
      boladeenergia(1.5,-4);
      boladeenergia(-4,0.75);
      boladeenergia(-4,1.5);}
    if(valor1 == 580 && valor2 == 2){
      boladeenergiadiagonal(0,4,40);
      boladeenergiadiagonal(4,0,40);
      boladeenergiadiagonal(0,-4,40);
      boladeenergiadiagonal(-4,0,40);
      boladeenergiadiagonal(0.75,4,40);
      boladeenergiadiagonal(-0.75,4,40);
      boladeenergiadiagonal(1.5,4,40);
      boladeenergiadiagonal(-1.5,4,40);
      boladeenergiadiagonal(4,0.75,40);
      boladeenergiadiagonal(4,-0.75,40);
      boladeenergiadiagonal(4,1.5,40);
      boladeenergiadiagonal(4,-1.5,40);
      boladeenergiadiagonal(0.75,-4,40);
      boladeenergiadiagonal(-0.75,-4,40);
      boladeenergiadiagonal(1.5,-4,40);
      boladeenergiadiagonal(-1.5,-4,40);
      boladeenergiadiagonal(-4,0.75,40);
      boladeenergiadiagonal(-4,-0.75,40);
      boladeenergiadiagonal(-4,1.5,40);
      boladeenergiadiagonal(-4,-1.5,40);}

    if(boladeenergiagrupo.isTouching(player) && frameCount % 10 == 0){vidadoplayer = vidadoplayer-5;}
    
    if(valor1 > 400 && valor2 == 2){
      parede11.x = width/2;
      parede11.y = height/2;
      parede12.x = width/2;
      parede12.y = height/2;
      parede13.x = width/2;
      parede13.y = height/2;
      parede14.x = width/2;
      parede14.y = height/2;
    }else{
      parede11.x = -200;
      parede11.y = -200;
      parede12.x = -200;
      parede12.y = -200;
      parede13.x = -200;
      parede13.y = -200;
      parede14.x = -200;
      parede14.y = -200;
    }

    if(valor2 == 2){
      minichefe.x = width/2;
      minichefe.y = height/2;

      campoeletrico.x = width/2;
      campoeletrico.y = height/2;
    }
    
    inimigo.collide(bloqueio);
    inimigo1.collide(bloqueio);
    inimigo2.collide(bloqueio);
    inimigo3.collide(bloqueio);
    inimigo.collide(inimigo1);
    inimigo.collide(inimigo2);
    inimigo.collide(inimigo3);
    inimigo1.collide(inimigo2);
    inimigo1.collide(inimigo3);
    inimigo2.collide(inimigo3);
    player.collide(parede6);
    player.collide(parede7);
    player.collide(parede9);
    player.collide(parede10);
    player.collide(campoeletrico);
    player.collide(parede11);
    player.collide(parede12);
    player.collide(parede13);
    player.collide(parede14);

    if(minichefe.x > 360){valor1 = valor1+1}else{valor1 = 0};

  if(valor2 == 1){
  caminhos(inimigo);
  caminhos(inimigo1);
  caminhos(inimigo2);
  caminhos(inimigo3);
  caminhos(minichefe);
  ataquedoinimigo();
  minichefe.collide(bloqueio);
  campoeletrico.x = -100;
  campoeletrico.y = -100;}

  descanso = descanso+1;
  ataques();
  direção();

  if(player.isTouching(teletransporte4)){
    jogoprincipal = 0;

    chao3.y = -300;
    chao1.y = height/2;

    teletransporte1.x = width/2-200;
    teletransporte3.x = width/2+200;
    porta1.x = width/2+385;
    teletransporte4.x = -50;

    amarelo1.destroy();
    amarelo2.destroy();
    amarelo3.destroy();
    amarelo4.destroy();
    amarelo5.destroy();
    amarelo6.destroy();
    amarelo7.destroy();
  }

  fill("white");
  textSize(20);
  text("Horda: "+horda,width/2+320,height/2-320);
}

  if(keyDown("up") || keyDown("w")){player.velocityY = -4;
  }else if(keyDown("down") || keyDown("s")){player.velocityY = 4;}else{player.velocityY = 0;}
  if(keyDown("left") || keyDown("a")){player.velocityX = -4;
  }else if(keyDown("right") || keyDown("d")){player.velocityX = 4;}else{player.velocityX = 0;}

  areadeataque5.x = player.x;
  areadeataque5.y = player.y;

  bloqueio.x = player.x;
  bloqueio.y = player.y;

  mouse.x = mouseX;
  mouse.y = mouseY;

  if(vidadoplayer > 100){vidadoplayer = 100}
  if(descanso > 25){descanso = 26}
  if(keyDown("e")){valor1 = valor1+1}
  if(keyWentDown("h")){boladeenergia(2.83,2.83);
    boladeenergia(3.23,2.35);
    boladeenergia(3.57,1.81);
    boladeenergia(3.81,1.22);
    boladeenergia(3.95,0.61);}
  if(keyWentDown("k")){boladeenergiadiagonal();}
  if(keyWentDown("u")){horda = horda+1;}
  if(keyWentDown("v")){valor1 = 0;}

  player.collide(parede1);
  player.collide(parede2);
  player.collide(parede3);
  player.collide(parede4);
  
  fill("white");
  textSize(20);
  text("descanso: "+descanso,width/2+500,height/2);
  text("vida do inimigo: "+vidadoinimigo,width/2+500,height/2+100);
  text("vida do inimigo1: "+vidadoinimigo1,width/2+500,height/2+120);
  text("vida do inimigo2: "+vidadoinimigo2,width/2+500,height/2+140);
  text("vida do inimigo3: "+vidadoinimigo3,width/2+500,height/2+160);
  text("Sua vida: "+vidadoplayer,width/2-400,height/2-320);
  text("Quantidadedeinimigo: "+quantidadedeinimigo,width/2+500,height/2+80);
  text("valor1: "+valor1,width/2+500,height/2+60);
  text("valor2: "+valor2,width/2+500,height/2+40);
  text("vida do mini chefe: "+vidadominichefe,width/2+500,height/2+180);
  text("Posição do mouse: x: "+mouse.x+" y: "+mouse.y,width/2+440,height/2+200);

  drawSprites();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fruit(){
    var frutas = Math.round(random(1,15));

    switch(frutas){
      case 1: if(banana1.x < width/2-400){banana1.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 2: if(banana2.x < width/2-400){banana2.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 3: if(banana3.x < width/2-400){banana3.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 4: if(banana4.x < width/2-400){banana4.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 5: if(banana5.x < width/2-400){banana5.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 6: if(maca1.x < width/2-400){maca1.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 7: if(maca2.x < width/2-400){maca2.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 8: if(maca3.x < width/2-400){maca3.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 9: if(maca4.x < width/2-400){maca4.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 10: if(maca5.x < width/2-400){maca5.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 11: if(laranja1.x < width/2-400){laranja1.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 12: if(laranja2.x < width/2-400){laranja2.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 13: if(laranja3.x < width/2-400){laranja3.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 14: if(laranja4.x < width/2-400){laranja4.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      case 15: if(laranja5.x < width/2-400){laranja5.x = Math.round(random(width/2-350,width/2+350));}else{fruit();}
      break;
      default: break;}}

function direção(){
  caminho1.x = player.x;
  caminho1.y = player.y-300;
  caminho2.x = player.x+300;
  caminho2.y = player.y;
  caminho3.x = player.x-300;
  caminho3.y = player.y;
  caminho4.x = player.x;
  caminho4.y = player.y+300;
  caminho5.x = player.x+300;
  caminho5.y = player.y+300;
  caminho6.x = player.x-300;
  caminho6.y = player.y-300;
  caminho7.x = player.x-300;
  caminho7.y = player.y+300;
  caminho8.x = player.x+300;
  caminho8.y = player.y-300;
  caminho9.x = player.x;
  caminho9.y = player.y-100;
  caminho10.x = player.x+100;
  caminho10.y = player.y;
  caminho11.x = player.x-100;
  caminho11.y = player.y;
  caminho12.x = player.x;
  caminho12.y = player.y+100;
  caminho13.x = player.x+100;
  caminho13.y = player.y+100;
  caminho14.x = player.x-100;
  caminho14.y = player.y-100;
  caminho15.x = player.x-100;
  caminho15.y = player.y+100;
  caminho16.x = player.x+100;
  caminho16.y = player.y-100;
  caminho17.x = player.x+40;
  caminho17.y = player.y+40;
  caminho18.x = player.x-40;
  caminho18.y = player.y+40;
  caminho19.x = player.x+40;
  caminho19.y = player.y-40;
  caminho20.x = player.x-40;
  caminho20.y = player.y-40;
  areadeataque1.x = player.x;
  areadeataque1.y = player.y-30;
  areadeataque2.x = player.x;
  areadeataque2.y = player.y+30;
  areadeataque3.x = player.x+30;
  areadeataque3.y = player.y;
  areadeataque4.x = player.x-30;
  areadeataque4.y = player.y;
}

function caminhos(enemy){
  if(enemy.isTouching(caminho1) || enemy.isTouching(caminho9)){
    enemy.setVelocity(0,3);
  } else if(enemy.isTouching(caminho2) || enemy.isTouching(caminho10)){
    enemy.setVelocity(-3,0);
  } else if(enemy.isTouching(caminho3) || enemy.isTouching(caminho11)){
    enemy.setVelocity(3,0);
  } else if(enemy.isTouching(caminho4) || enemy.isTouching(caminho12)){
    enemy.setVelocity(0,-3);
  } else if(enemy.isTouching(caminho5) || enemy.isTouching(caminho13) || enemy.isTouching(caminho17)){
    enemy.setVelocity(-3,-3);
  } else if(enemy.isTouching(caminho6) || enemy.isTouching(caminho14) || enemy.isTouching(caminho20)){
    enemy.setVelocity(3,3);
  } else if(enemy.isTouching(caminho7) || enemy.isTouching(caminho15) || enemy.isTouching(caminho18)){
    enemy.setVelocity(3,-3);
  } else if(enemy.isTouching(caminho8) || enemy.isTouching(caminho16) || enemy.isTouching(caminho18)){
    enemy.setVelocity(-3,3);}
}

function ataques(){
  if((mouse.isTouching(caminho1) || mouse.isTouching(caminho9)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,50,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x;
   ataque1.y = player.y -40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
   if(ataque1.isTouching(inimigo1)){
    vidadoinimigo1 = vidadoinimigo1-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
   if(ataque1.isTouching(inimigo2)){
    vidadoinimigo2 = vidadoinimigo2-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
   if(ataque1.isTouching(inimigo3)){
    vidadoinimigo3 = vidadoinimigo3-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(minichefe) && valor2 == 1){
      vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho2) || mouse.isTouching(caminho10)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,50);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x +40;
   ataque1.y = player.y;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho4) || mouse.isTouching(caminho12)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,50,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x;
   ataque1.y = player.y +40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho3) || mouse.isTouching(caminho11)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,50);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x -40;
   ataque1.y = player.y;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho5) || mouse.isTouching(caminho13)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x +40;
   ataque1.y = player.y +40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho6) || mouse.isTouching(caminho14)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x -40;
   ataque1.y = player.y -40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
  if((mouse.isTouching(caminho7) || mouse.isTouching(caminho15)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x -40;
   ataque1.y = player.y +40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
   if((mouse.isTouching(caminho8) || mouse.isTouching(caminho16)) && mouseWentDown("leftButton") && descanso > 25){
   ataque1 = createSprite(width/2,height/2,30,30);
   ataque1.shapeColor = "white";
   ataque1.lifetime = 1;
   ataque1.x = player.x +40;
   ataque1.y = player.y -40;
   descanso = 0;
   if(ataque1.isTouching(inimigo)){
    vidadoinimigo = vidadoinimigo-10;
    quantidadedeinimigo = quantidadedeinimigo+1;}
    if(ataque1.isTouching(inimigo1)){
      vidadoinimigo1 = vidadoinimigo1-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo2)){
      vidadoinimigo2 = vidadoinimigo2-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
     if(ataque1.isTouching(inimigo3)){
      vidadoinimigo3 = vidadoinimigo3-10;
      quantidadedeinimigo = quantidadedeinimigo+1;}
      if(ataque1.isTouching(minichefe) && valor2 == 1){
        vidadominichefe = vidadominichefe-10;}}
}

function ataquedoinimigo(){
  if(inimigo.isTouching(areadeataque1) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo.x;
    ataque2.y = inimigo.y+28;
    ataque2.lifetime = 1;
  if(ataque2.isTouching(player)){
    vidadoplayer = vidadoplayer-5;}}
  if(inimigo.isTouching(areadeataque2) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo.x;
    ataque2.y = inimigo.y-28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo.isTouching(areadeataque3) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo.x-28;
    ataque2.y = inimigo.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo.isTouching(areadeataque4) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo.x+28;
    ataque2.y = inimigo.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo1.isTouching(areadeataque1) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo1.x;
    ataque2.y = inimigo1.y+28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo1.isTouching(areadeataque2) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo1.x;
    ataque2.y = inimigo1.y-28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo1.isTouching(areadeataque3) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo1.x-28;
    ataque2.y = inimigo1.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo1.isTouching(areadeataque4) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo1.x+28;
    ataque2.y = inimigo1.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo2.isTouching(areadeataque1) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo2.x;
    ataque2.y = inimigo2.y+28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo2.isTouching(areadeataque2) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo2.x;
    ataque2.y = inimigo2.y-28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo2.isTouching(areadeataque3) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo2.x-28;
    ataque2.y = inimigo2.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo2.isTouching(areadeataque4) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo2.x+28;
    ataque2.y = inimigo2.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo3.isTouching(areadeataque1) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo3.x;
    ataque2.y = inimigo3.y+28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo3.isTouching(areadeataque2) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,20,30);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo3.x;
    ataque2.y = inimigo3.y-28;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo3.isTouching(areadeataque3) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo3.x-28;
    ataque2.y = inimigo3.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(inimigo3.isTouching(areadeataque4) && frameCount % 30 === 0){
    ataque2 = createSprite(width/2,height/2,30,20);
    ataque2.shapeColor = "DimGray";
    ataque2.x = inimigo3.x+28;
    ataque2.y = inimigo3.y;
    ataque2.lifetime = 1;
    if(ataque2.isTouching(player)){
      vidadoplayer = vidadoplayer-5;}}
  if(minichefe.isTouching(areadeataque5) && frameCount % 30 === 0){
    ataque3 = createSprite(width/2,height/2,85,85);
    ataque3.shapeColor = "DimGray";
    ataque3.x = minichefe.x;
    ataque3.y = minichefe.y;
    ataque3.lifetime = 1;
  if(ataque3.isTouching(player)){
    vidadoplayer = vidadoplayer-10;}}}
function boladeenergia(velx,vely){
  boladeenergia1 = createSprite(minichefe.x,minichefe.y);
  boladeenergia1.addAnimation("volt",boladeenergiaani);
  boladeenergia1.setCollider("circle",0,0,25);
  boladeenergia1.setVelocity(velx,vely);
  boladeenergia1.lifetime = 60;

  boladeenergiagrupo.add(boladeenergia1);
}
function boladeenergiadiagonal(velX,velY,vida){
  boladeenergia2 = createSprite(minichefe.x,minichefe.y);
  boladeenergia2.addAnimation("volt",boladeenergiaani);
  boladeenergia2.setCollider("circle",0,0,25);
  boladeenergia2.velocityX = velX;
  boladeenergia2.velocityY = velY;
  boladeenergia2.lifetime = vida;

  boladeenergiagrupo.add(boladeenergia2);
}