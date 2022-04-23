nose_x = 0;
nose_y = 0;

filter_clickCount = 0;

function preload() {
    mustache_image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick_image = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    goggles_image = loadImage("https://i.postimg.cc/yxRpM24j/goggles-removebg-preview-1.png");
}

function setup() {
    canvas = createCanvas(650, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 600, 500);
    if (filter_clickCount % 3 == 0) {
        save_fileName = "filterPhoto_mustache.png";
        image(mustache_image, nose_x - 45, nose_y + 10, 60, 40);
    } else if (filter_clickCount % 3 == 1) {
        save_fileName = "filterPhoto_lipstick.png";
        image(lipstick_image, nose_x - 45, nose_y + 30, 60, 40);
    } else {
        save_fileName = "filterPhoto_goggles.png";
        image(goggles_image, nose_x - 90, nose_y - 80, 150, 100);
    }
}

function save_photo() {
    save(save_fileName);
}

function model_loaded() {
    console.log("Your model is loaded!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
        document.getElementById("nose_x").innerHTML = "X position of nose:" + nose_x.toFixed(4);
        document.getElementById("nose_y").innerHTML = "Y position of nose:" + nose_y.toFixed(4);
    }
}

function changeClickCount() {
    filter_clickCount += 1;
}