/*canvas
{
    width : 500;
    height : 600;
}*/

var guessWords = [
    "JavaScript",
    "Github",
    "Visual Studio",
   " Cat",
    "Dog" ,
    "Computer",
    "Keyboard",
    "Cellphone",
    "Node.js",
    "Among Us",
]

let answer ="";
let maxWrong =5;
let mistakes = 0;
let guess = [];

function randomWord()
{
    answer = guessWords[Math.floor(Math.random() * guessWords.length)];
}

function generateButton()
{
    let buttonHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter =>);
}


randomWord();
