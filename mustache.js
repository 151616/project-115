function preload(){

}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x= " + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function draw(){
image(video, 0, 0, 400, 300);

}
function take_snapshot(){
    save("Mustache-on-your-face.png");
}
function lipstick(){
    window.location = "lipstick.html";
}