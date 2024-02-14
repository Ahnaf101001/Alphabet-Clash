// function play(){
//     const homeSection = document.getElementById("home");
//     homeSection.classList.add("hidden");

//     const gameSection = document.getElementById("game");
//     gameSection.classList.remove("hidden");
// }

//Note: Due to the next process being a reuse of the whole of intersection we will use the below code for now

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    if(playerPressed==="Escape"){
        gameOver();
    }
    const display = document.getElementById("alphabet-random");
    const currentAlphabet = display.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
    if(playerPressed===expectedAlphabet){
        // const currentScoreElement = document.getElementById("gainedScore");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;

        const currentScore = getTextElementValueById("gainedScore");
        const newScore = currentScore + 1;
        setTextElementValueById("gainedScore", newScore);

        removeBackGroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // const currentLifeElement = document.getElementById("life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;
        
        const currentLife = getTextElementValueById("life");
        const newLife = currentLife - 1;
        setTextElementValueById("life", newLife);

        if(newLife===0){
            gameOver();
        }
    }
}

document.addEventListener("keyup",handleKeyboardKeyUpEvent)

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

function playAgain(){
    hideElementById("end");
    addElementById("game");
    setTextElementValueById("life",5);
    setTextElementValueById("gainedScore",0);
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

function gameOver(){
    hideElementById("game");
    addElementById("end");
    const result = getTextElementValueById("gainedScore");
    setTextElementValueById("result",result);
    const display = getElementTextById("alphabet-random");
    removeBackGroundColorById(display);
}