var cols = 10;
var rows = 10;
var grid = new Array();

function setup() {
    createCanvas(400, 400);
    console.log("A*");

    //2D Array
    for (var i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }
    console.log(grid);
}

function draw() {
    background(0);
}
