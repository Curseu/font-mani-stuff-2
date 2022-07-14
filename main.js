function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    canvas=createCanvas(500,550);
canvas.position(520,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}
function draw(){
    background("limegreen");

}
function modelloaded(){
    console.log("poseNet is active")
}
function gotposes(results){
if(results.length>0){
console.log(results);

}


}