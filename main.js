song1=""
song2=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightwristY=0;

function preload() {
    song1=loadSound("gangPlankGalleon.mp3");
    song2=loadSound("kirbySong.mp3");
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
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        console.log("left wrist x value is "+leftWristX);

        leftWristY=results[0].pose.leftWrist.y;
     console.log("left wrist y value is "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        console.log("right wrist x value is "+rightWristX);

        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist y value is "+rightWristY);
    }
}