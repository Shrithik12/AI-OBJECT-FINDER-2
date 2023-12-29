
objects = [];
status = "";



function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.center();
    video.parent('canvas');
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("objects")
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
 
}

function draw(){
    image(canvas,0,0,480,380);
}