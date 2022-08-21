function getInputFieldValueById(inputID){
    const inputField = document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const inputFieldElement = parseFloat(inputFieldString);

    return inputFieldElement;
}

function getTextElementById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const totalElementValue = parseFloat(elementValueString);
    return totalElementValue;
}

function setTextElementById(OutputId, newElement){
    const textElement = document.getElementById(OutputId);
    textElement.innerText = newElement;
}