nose_x=0;  
nose_y=0;
difference=0;
leftWrist_x=0;
rightWrist_x=0;
function setup(){
 video=createCapture(VIDEO);
 video.size(300,300);

 canvas=createCanvas(400,400);
 canvas.position(450,200);
 poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet initialized");
}

function draw(){
    background('#B6F3EC');
    // document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";

    fill('#B6F356');
stroke('#B5F3ED');
square(nose_x,nose_y,difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log("results",results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose X is :",nose_x);
        console.log("nose Y is :",nose_y);

        leftWrist_x=results[0].pose.leftWrist.x;
        rightWrist_x=results[0].pose.rightWrist.x;
        difference=floor(leftWrist_x-rightWrist_x);
        console.log("lefwrist X is :",leftWrist_x)
        console.log("Rightwrist X is :", rightWrist_x);
    }
}
