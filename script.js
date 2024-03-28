const output= document.getElementById('output');

function addToDisplay(input) {
    output.value+=input;
}

function clearDisplay() {
    output.value="";
}

function calculate() {
    try {
        output.value=eval(output.value);
    }
    catch(error) {
        output.value="Error";
    }
}