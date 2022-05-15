img="";
status="";

function preload(){
    img=loadImage('kitchen.jpg');
}
function setup(){
    canvas=createCanvas()
    canvas.center(640,420);

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error){
    if(error){
        console.log(error);
    }
    console.log(results);
}