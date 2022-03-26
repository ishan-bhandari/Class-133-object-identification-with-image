img = "";
status = "";
object=[];

function preload() {
    img = loadImage('dog_cat.jpg');

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";

}

function modelloaded() {
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

    function draw() {
    image(img, 0, 0, 640, 420);
    if(ststus!="")
    {
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML = "status: objects detected";
            fill("#56eb2d");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke("#56eb2d");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            
            
                    }
    }



}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
object=results;

    }
}