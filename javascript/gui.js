const originalHeight=800;
const originalWidth=1625;
const ratio=originalHeight/originalWidth;

let canvas,context;
let plan = {field:{height:originalHeight,width:originalWidth},points: []};

function load() {
    console.log("Loading");
    loadCanvas();
    console.log("Done");
}

function test() {
    console.log("Test!");
}

function calculateLocation(location){
    let x,y;
    y=(originalHeight/canvas.height)*location.y;
    x=(originalWidth/canvas.width)*location.x;
    return {x:x,y:y};
}

function addPoint(location) {
    plan.points.push(calculateLocation(location));
    drawPoint(location);
}

function drawPoint(location) {
    context.beginPath();
    context.arc(location.x,location.y,10,0,2*Math.PI);
    context.fillStyle = '#555555';
    context.fill();
}

function sizeCanvas(){
    const width=screen.availWidth;
    const height=screen.availHeight;
    let canvasWidth,canvasHeight;
    if(width*ratio>height){
        canvasWidth=height/ratio;
        canvasHeight=height;
    }else{
        canvasWidth=width;
        canvasHeight=width*ratio;
    }
    canvas.setAttribute("width",canvasWidth.toString());
    canvas.setAttribute("height",canvasHeight.toString());
}

function drawField(){
    // Draw Perimeter
    for(let x=0;x<canvas.width;x++){
        context.fillRect(x,0,10,10);
        context.fillRect(x,canvas.height-10,10,10);
    }
    for(let y=0;y<canvas.height;y++){
        context.fillRect(0,y,10,10);
        context.fillRect(canvas.width-10,y,10,10);
    }

}

function loadCanvas() {
    canvas=document.getElementById('field');
    context=canvas.getContext('2d');
    sizeCanvas();
    drawField();
    canvas.onmousedown=function (event) {
        addPoint({x:event.pageX - this.offsetLeft,y: event.pageY - this.offsetTop});
    };
}

// function showMenu(event){
//     menu.style.left=event.pageX;
//     menu.style.top=event.pageY;
//     menu.width="auto";
//     menu.height="auto";
//     menu.style.display="block";
// }
//
// function hideMenu() {
//     menu.width=0;
//     menu.height=0;
//     menu.style.display="none";
// }