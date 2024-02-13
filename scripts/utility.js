//-----hiding an element--------

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

//-----showing an element-------

function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}