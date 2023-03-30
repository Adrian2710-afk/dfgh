function preload(){


}
function setup(){

canvas-createCanvas(400,400)
canvas.center();
video-createcapture(VIDEO);
video.center();
video.hide();
    
}
function draw(){
image(video, 0,0, 400, 400);
tint(tint_color);

}
function tomarfoto(){ save("hola.png")}