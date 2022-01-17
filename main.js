song=0;
leftWristX=0;
leftWristY=0;
score=0;

function preload() {

}

function setup(){ 
    canvas=createCanvas(600, 500);
    canvas.center();
    startVideo=createCapture(VIDEO);
    startVideo.hide();
    poseNet=ml5.poseNet(startVideo,modelLoaded);//initializing poseNet
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(startVideo, 0 ,0, 600, 500)
    fill("#FF0000");
    stroke("#FF0000");
    circle(leftWristX, leftWristY, 20);

    fill("#FF0000");
    stroke("#FF0000");
    circle(rightWristX, rightWristY, 20);
    
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    console.log(results);
    document.getElementById("div_song_name").innerHTML=score
}