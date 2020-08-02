var numberOfSquares = 9;

var colors = generateRandomColors(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickedColors();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
// var easyBtn = document.getElementById("");
// var hardBtn = document.getElementById("");
var gameModes = document.querySelectorAll(".gameMode")

gameModes[1].classList.remove("selected");
gameModes[2].classList.add("selected");

for(var i = 0; i<gameModes.length ;i++){
    gameModes[i].addEventListener("click",function(){
        gameModes[0].classList.remove("selected");
        gameModes[1].classList.remove("selected");
        gameModes[2].classList.remove("selected");// revomes the class selected so that it'll only get added when clicked on else no selected class properties 
        this.classList.add("selected");
        if(this.textContent === "Easy" ){
            numberOfSquares=3;
        }else if(this.textContent === "Normal"){
            numberOfSquares=6;
        }
        else{
            numberOfSquares=9;
        }
        resetSub();
    });
}

function resetSub(){
    colors=generateRandomColors(numberOfSquares);
    pickedColor= pickedColors();
    colorDisplay.textContent = pickedColor;
    this.textContent="New Colors";
    message.textContent = "";
    for(var i=0;i<squares.length;i++){
        // add initial colors to squares
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";// hide all squares with no color
        }
        
    }
    h1.style.backgroundColor="steeleblue";
}

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected")
//     numberOfSquares = 3;
//     colors.generateRandomColors(numberOfSquares);
//     pickedColor = pickedColors();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].backgroundColor.colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// })
// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected")
//     numberOfSquares = 6;
//     colors.generateRandomColors(numberOfSquares);
//     pickedColor = pickedColors();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0;i<squares.length;i++){
//         squares[i].backgroundColor.colors[i];
//         squares[i].style.display = "block";
//     }
// })

reset.addEventListener("click",function(){
    resetSub();
    reset.textContent="New Colors";
 })

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        // grab color of clicked square
        var clickedColor= this.style.backgroundColor;
        // compare color to piv=cked color
        if(clickedColor === pickedColor){
            message.textContent="Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?"
        }else{
            this.style.backgroundColor="#232323";
            message.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickedColors(){
    var random=Math.floor(Math.random()* colors.length)//less than 1 , to get a whole number use Math.floor(Math.random())
    // here math.random= random number between 0 and 1 , and then to get a random number between 0-5(6 squares) or 0-2(3 squares) multiply the length with it, then fially use Math.floor to get a whole number 
    return  colors[random]
}

function generateRandomColors(num){
    var arr=[]
    for(var i =0;i<num;i++){
        arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);// rounding down so its 0 - 255
    return "rgb("+ r + ", " + g + ", " + b + ")";
}

