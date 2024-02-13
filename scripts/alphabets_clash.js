// function play(){
//     const homeSection = document.getElementById("home");
//     homeSection.classList.add("hidden");

//     const gameSection = document.getElementById("game");
//     gameSection.classList.remove("hidden");
// }

//Note: Due to the next process being a reuse of the whole of intersection we will use the below code for now

function play(){
    hideElementById("home");
    addElementById("game");
}

