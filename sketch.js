let actor_img;
let capture;
let Posenet=null;
let singlePose,skeleton;
let spec,smoke;

function setup(){
    createCanvas(1000,1000);
    actor_img=loadImage("images/srk.png");
    capture=createCapture(VIDEO);
    Posenet=ml5.poseNet(capture,modelLoaded);
    Posenet.on('pose',recievedPoses)
    spec=loadImage("images/GOOGLES.png");
    smoke=loadImage("images/CIGAR.png");
}
function modelLoaded(){
    console.log("Model has been loaded");
}
function recievedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
        
        
        
    }
    
}

function draw(){
    
   //background(200,200,200);
   image(capture,0,0,600,600);
   fill(255,0,0);
   if(singlePose){
   for(let i=0;i<singlePose.keypoints.length;i++){
    ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
   
   }
   stroke(0,255,0);
   strokeWeight(5);
   
   for(let j=0;j<skeleton.length;j++){
    line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
   }
   //image(actor_img,singlePose.nose.x-70,singlePose.nose.y,100,150);
   image(spec,singlePose.nose.x-80,singlePose.nose.y,100,70);
   image(smoke,singlePose.nose.x-80,singlePose.nose.y+60,100,50);
}
   
}