var ussSchwarz = {
    top: 900,
    left: 850
};

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 37) {
        console.log("LEFT");
        ussSchwarz.left = ussSchwarz.left - 30;
        moveUssSchwarz()
    } 
    else if (e.keyCode === 39) {
        console.log("RIGHT");
        ussSchwarz.left = ussSchwarz.left + 30;
        moveUssSchwarz()
    }
    else if (e.keyCode === 32) {
        console.log("FIRE")
    }
}

function moveUssSchwarz() {
document.getElementById('ussSchwarz').style.left = ussSchwarz.left + "px";
}
moveUssSchwarz();

console.log("Game Over");










// var alien1 = {
//     top: 120,
//     left: 850
// };

// document.onkeydown = function(a) {
//     console.log(a.key)
// }




