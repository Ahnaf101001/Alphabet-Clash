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

function changeBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#FFA500]")
}

function removeBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-[#FFA500]")
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}