status = "";
bottle_image = "";

function preload()
{
    bottle_image = loadImage("water_bottles.jpeg");
}

function setup()
{
    canvas = createCanvas(500, 450);
    canvas.center();

    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Is Loaded!");
    status = true;
    object_detector.detect(bottle_image, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(bottle_image, 0, 0, 500, 450);
}