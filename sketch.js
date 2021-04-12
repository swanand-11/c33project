const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){
      backround(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format

    // write code slice the datetime
    //hour = datetime.slice(11,13);
    var respj = await response.json();
    console.log(respj.datetime.slice(11,13)) 
    var datetime = respj.datetime
    var hour = datetime.slice(11,13);  
    if (hour>=06 && hour<=18){
   // add conditions to change the background images from sunrise to sunset
  if (hour>=04 && hour<=06) {
      bg = "sunrise1.png";
  }else if(hour>=06 && hour<=08) {
      bg = "sunrise2.png";
  }else if(hour>=08 && hour<=10) {
      bg = "sunrise3.png";
  }else if(hour>=10 && hour<=12) {
    bg = "sunrise4.png";
  }else if(hour>=12 && hour<=14) {
    bg = "sunrise5.png";
  }else if(hour>=14 && hour<=16) {
    bg = "sunrise6.png";
  }else if(hour>=16 && hour<=18) {
    bg = "sunrise7.png";
  }else if(hour>=20 && hour<=22) {
    bg = "sunrise8.png";
  }else if(hour>=22 && hour<=24) {
    bg = "sunrise9.png";
  }else if(hour>=24 && hour<=2) {
    bg = "sunrise10.png";
  }else if(hour>=2 && hour<=4)  {
    bg = "sunrise11.png";
  }else if(hour>=04 && hour<=05) {
    bg = "sunrise12.png";
}


   //load the image in backgroundImg variable here

   backgroundImg = loadImage(bg);

   //sunriseIMG1 = loadImage("sunrise1.png")
   //sunriseIMG2 = loadImage("sunrise2.png")
   //sunriseIMG3 = loadImage("sunrise3.png")
   //sunriseIMG4 = loadImage("sunrise4.png")
   //sunriseIMG5 = loadImage("sunrise5.png")
   //sunriseIMG6 = loadImage("sunrise6.png")
   //sunsetIMG07 = loadImage("sunset07.png")
   //sunsetIMG08 = loadImage("sunset08.png")
   //sunsetIMG09 = loadImage("sunset09.png")
   //sunsetIMG10 = loadImage("sunset10.png")
   //sunsetIMG11 = loadImage("sunset11.png")
   //sunsetIMG12 = loadImage("sunset12.png")
  


}
}
