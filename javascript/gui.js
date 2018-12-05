const pointSize = 10;
const originalHeight = 800;
const originalWidth = 1625;
const ratio = originalHeight / originalWidth;

let canvas, context;
let plan = {field: {height: originalHeight, width: originalWidth}, points: []};

function load() {
    console.log("Loading");
    hide("menu");
    loadCanvas();
    console.log("Done");
}

function test() {
    console.log("Test!");
}

function addPoint(location) {
    plan.points.push(toField(location));
    drawPoint(location);
}

function drawPoint(location) {
    context.beginPath();
    context.rect(location.x, location.y, pointSize, pointSize);
    context.fillStyle = '#88aa33';
    context.fill();
}

function checkPoint(location) {
    let x = location.x;
    let y = location.y;
    let selectedPoint, selectedIndex = 0;
    for (let p = 0; p < plan.points.length; p++) {
        let point = plan.points[p];
        let canvasLocation = toCanvas(location);
        console.log(point);
        if (range(canvasLocation.x - pointSize, canvasLocation.x + pointSize, x) && range(canvasLocation.y - pointSize, canvasLocation.y + pointSize, y)) {
            selectedPoint = point;
            selectedIndex = p;
        }
    }
    if (selectedPoint !== undefined) {
        console.log("Selected Point!");
        select(selectedPoint, selectedIndex);
    } else {
        addPoint(location);
    }
}

function select(point, index) {
    displayMenu(point);
}

function range(min, max, value) {
    return value >= min && value <= max;
}

function toField(location) {
    let x, y;
    y = (originalHeight / canvas.height) * location.y;
    x = (originalWidth / canvas.width) * location.x;
    return {x: x, y: y};
}

function toCanvas(location) {
    let x, y;
    y = (canvas.height / originalHeight) * location.y;
    x = (canvas.width / originalWidth) * location.x;
    return {x: x, y: y};
}

function displayMenu(point) {
    show("menu");
}

function loadCanvas() {
    canvas = document.getElementById('field');
    context = canvas.getContext('2d');
    sizeCanvas();
    drawField();
    canvas.onmousedown = function (event) {
        checkPoint({x: event.pageX - this.offsetLeft, y: event.pageY - this.offsetTop});
    };
}


function sizeCanvas() {
    const width = screen.availWidth;
    const height = screen.availHeight;
    let canvasWidth, canvasHeight;
    if (width * ratio > height) {
        canvasWidth = height / ratio;
        canvasHeight = height;
    } else {
        canvasWidth = width;
        canvasHeight = width * ratio;
    }
    canvas.setAttribute("width", canvasWidth.toString());
    canvas.setAttribute("height", canvasHeight.toString());
}

function drawField() {
    // Draw Perimeter
    for (let x = 0; x < canvas.width; x++) {
        context.fillRect(x, 0, 10, 10);
        context.fillRect(x, canvas.height - 10, 10, 10);
    }
    for (let y = 0; y < canvas.height; y++) {
        context.fillRect(0, y, 10, 10);
        context.fillRect(canvas.width - 10, y, 10, 10);
    }

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