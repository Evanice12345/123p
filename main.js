function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    canvas = createCanvas(500, 500);
    canvas.position(510, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is inizialized!");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

    }

}