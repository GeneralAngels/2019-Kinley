let canvas,context;
let plan = {points: []};
let x, y;

function load() {
    console.log("Loading");
    loadDocument();
    loadCanvas();
}

function test() {
    console.log("Test!");
}

function addPoint() {
    console.log("click");
    drawPoint();
}

function drawPoint() {
    context.fillRect(x,y,10,10);
}

function handleKey(key) {

}

function loadDocument() {
    document.addEventListener('keydown', function (event) {
        handleKey(event.key);
        console.log(event.key);
    });
}

function loadCanvas() {
    canvas=document.getElementById('field');
    context=canvas.getContext('2d');
    document.addEventListener('mousedown', function (event) {
        x = event.clientX - canvas.offsetLeft;
        y = event.clientY - canvas.offsetTop;
        addPoint();
    }, false);
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