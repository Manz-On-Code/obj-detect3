img=""
model_status= "";
function preload(){
    img1 = loadImage('pancakes.jpg');
    img = loadImage('big knee.png');
}
function setup() {
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!")
    model_status = true;
    objectDetector.detect(img1, gotResult);
}
function gotResult(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img1, 0, 0, 640, 420);
    strokeWeight(3)
    noFill();
    rect(60,50, 300, 350)
    stroke("black")
    fill("red")
    textSize(20)
    text("pancake 97%", 60, 40)
    noFill();
    rect(290,60, 290, 340)
    fill("yellow")
    text("bananas 95%", 290, 55)
}
function draw() {
    image(img1, 0, 0, 640, 420);
    if(model_status != "") {
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            noFill();
            stroke("black")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            fill("red")
            textSize(25)
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + "   " + percent + "%", objects[i].x, objects[i].y)
            
        }
    }
}