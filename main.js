song1=""
song2=""

function preload() {
    song1=loadSound("gangPlankGalleon.mp3");
    song2=loadSound("kirbySong.mp3");
}

function setup(){ 
    canvas=createCanvas(600, 500);
    canvas.center();
    startVideo=createCapture(VIDEO);
    startVideo.hide();
}

function draw() {
    image(startVideo, 0 ,0, 600, 500)
}