noseX=0;
noseY=0;
function preload(){
image = loadImage("https://i.postimg.cc/Dznr6Rzb/il-fullxfull-2688313853-4b66.webp")
}

function setup() {
canvas = createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded() {
console.log("model is loaded");
}
function gotPoses(results){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose x= "+noseX);
console.log("nose y="+noseY);

}

function draw() {
image(video,0,0,500,500);
fill(255,0,0);
stroke(255,0,0);
// circle(leftEyeX, leftEyeY, 20);
// circle(rightEyeX, rightEyeY, 20);
image(image,noseX,noseY,50,50);
}

function take_snapshot(){
save('myFilterImage.png');
}



