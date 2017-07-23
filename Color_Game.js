/**
 * Created by MD AZIZUL HAKIM on 21/07/2017.
 */

console.log("Connected!");


var numOfSquare = 9;
var colors = [];
var pickedColor;

//initialization
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var massageDisplay = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#btnReset");

//instead of separate id i am using a class
// var easyButton = document.querySelector("#btnEasy");
// var hardButton = document.querySelector("#btnHard");

var modeButtons = document.querySelectorAll(".mode");

init();

//button handlers

resetButton.addEventListener("click", function () {
    reset();
});

// easyButton.addEventListener("click", function () {
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numOfSquare = 6;
//
//     colors = generateRandomColor(numOfSquare);
//     pickedColor = pickRandomColor();
//     colorDisplay.textContent = pickedColor;
//
//
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
//
//     h1.style.background = "steelblue";
//     massageDisplay.textContent = "";
//
// });
//
// hardButton.addEventListener("click", function () {
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numOfSquare = 9;
//
//     colors = generateRandomColor(numOfSquare);
//     pickedColor = pickRandomColor();
//     colorDisplay.textContent = pickedColor;
//
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
//
//     h1.style.background = "steelblue";
//     massageDisplay.textContent = "";
// });
//colorDisplay.textContent = pickedColor;

//All Function Initialization


function init() {

    handleModeButton();
    handleSquares();
    reset();
}

function handleModeButton() {
    //Mode handler
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //ternary operator
            // this.textContent === "Easy" ? numOfSquare = 6 : numOfSquare = 9;
            //not a big fan of this... i love the traditional if else :D

            if (this.textContent === "Easy") {
                numOfSquare = 6;
            } else numOfSquare = 9;

            reset();
        })
    }
}


function handleSquares() {
    for (var i = 0; i < squares.length; i++) {
        //adding eventListener to squares
        squares[i].addEventListener("click", function () {

            //grab color from picked squares
            var clickedColor = this.style.background;

            console.log(clickedColor, pickedColor);

            if (clickedColor === pickedColor) {
                massageDisplay.textContent = "Correct!";
                changeAllSquareColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else {
                this.style.background = "#232323";
                massageDisplay.textContent = "Wrong! Try Again!"
            }
        });
    }
}

function reset() {

    colors = generateRandomColor(numOfSquare);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //adding initial colors

        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.background = colors[i];
    }

    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    massageDisplay.textContent = "";
}


function changeAllSquareColors(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }


}

function pickRandomColor() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColor(num) {
    var randomColors = [];

    for (var i = 0; i < num; i++) {

        randomColors[i] = randomColor();
    }
    return randomColors;
}

function randomColor() {
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);

    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);

    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    //rgb(r,g,b)
    return "rgb(" + r + ", " + g + ", " + b + ")";


}


