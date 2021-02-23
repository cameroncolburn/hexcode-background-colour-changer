var body = document.querySelector("body");
var span = document.querySelector("span");
var letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

//Selects a letter at random from the letter Array
var arrPosition = function randomNumber() {
    var n = Math.round(Math.random() * 15);
    return n;
}

//produces a hexcode by concatenating array values
function hexColor() {
    var hexCode = "#" + letters[arrPosition()] + letters[arrPosition()] + letters[arrPosition()] + letters[arrPosition()] + letters[arrPosition()] + letters[arrPosition()];

    body.style.backgroundColor = hexCode;
    span.textContent = hexCode;
}