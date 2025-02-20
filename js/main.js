//Generate Text Functionality

const textA = document.querySelector('.radio-a')
const textB = document.querySelector('.radio-b')
const textC = document.querySelector('.radio-c')
const textD = document.querySelector('.radio-d')
const textBtn = document.querySelector('.text-bottom-right button');

textBtn.onclick = function() {
    if (textA.checked === true) {
        //text = textA.textContent;
        alert(textA.value);
    } else if (textB.checked === true) {
        alert(textB.value);
    } else if (textC.checked === true) {
        alert(textC.value);
    } else if (textD.checked === true) {
        alert(textD.value);
    } else {
        alert("Pick your favorite fruit!")
    }
}