// function play(){
//     const homeSection = document.getElementById("home");
//     homeSection.classList.add("hidden");

//     const gameSection = document.getElementById("game");
//     gameSection.classList.remove("hidden");
// }

//Note: Due to the next process being a reuse of the whole of intersection we will use the below code for now

function continueGame(){
    const alphabet = getARandomAlphabet();
    const display = document.getElementById("alphabet-random");
    display.innerText = alphabet;
    changeBackGroundColorById(alphabet);
}

function play(){
    hideElementById("home");
    addElementById("game");
    continueGame();
}

function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function changeBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#FFA500]")
}