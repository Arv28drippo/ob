status = "";
phone_image = "";

function preload()
{
    phone_image = loadImage("phones.webp");
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
    object_detector.detect(phone_image, gotResults);
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
    image(phone_image, 0, 0, 500, 450);
}