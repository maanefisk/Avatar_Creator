
function changingcolor(thecolorpicker) {
    var thebackground = document.getElementById("BG");
    thebackground.style.fill = thecolorpicker.value;
}
function category(chosencategory) {
    console.log(chosencategory.innerText.toLowerCase());
}
function thenumber(chosennumber) {
    console.log(chosennumber.innerText);
}

