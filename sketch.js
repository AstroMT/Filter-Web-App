function preload() {}

function setup() {
   canvas = createCanvas(650, 600);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   posenet = ml5.poseNet(video, model_loaded);
   posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 550, 450);
}

function save() {
    save('filterPhoto.png');
}

function model_loaded() {
    console.log("Your model is loaded!")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        nose_x_position = results[0].pose.nose.x;
        nose_y_position = results[0].pose.nose.y;
        console.log("nose x = " + nose_x_position);
        console.log("nose y = " + nose_y_position);
        document.getElementById("nose_x").innerHTML = "X position of nose:" + nose_x_position.toFixed(4);
        document.getElementById("nose_y").innerHTML = "Y position of nose:" + nose_y_position.toFixed(4);
    }
}