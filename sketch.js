function preload() {}

function setup() {
   canvas = createCanvas(650, 600);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
}

function draw() {
    image(video, 50, 75, 550, 450);
}

function save() {
    save('filterPhoto.png');
}