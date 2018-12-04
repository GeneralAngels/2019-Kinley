let canvas,context;
let plan = {points: []};
let screenToFieldRatio=1;

const ratio=32/65;
const fromRatioToSize=25;

function load() {
    console.log("Loading");
    loadDocument();
    loadCanvas();
}

function test() {
    console.log("Test!");
}

function addPoint(location) {
    plan.points.push({x:location.x*screenToFieldRatio,y:location.y/screenToFieldRatio});
    drawPoint(location);
}

function drawPoint(location) {
    context.fillRect(location.x,location.y,10,10);
}

function handleKey(key) {

}

function loadDocument() {
    document.addEventListener('keydown', function (event) {
        handleKey(event.key);
        console.log(event.key);
    });
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
    screenToFieldRatio=canvasWidth*ratio;
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