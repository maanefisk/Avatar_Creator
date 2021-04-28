
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

/*List items and their numbers*/
/*console.log(categories[categorieslist-1]+(categorieslist-1));*/

var categories = ["hair","neck","head","ears","shirt","eyes","pupils","brows","nose","lips","mouth","bangs","background"];
var categorieslist = 0;
var i;
var textofcategories = "";
var chosencategory = "";

for (i = 0; i < categories.length; i++) {
    categorieslist++;
    chosencategory = categories[categorieslist-1];

    textofcategories += "<div id=\""
        +chosencategory+
        "\" className=\"menutext\" onClick=\"category(this)\">"
        +chosencategory +"</div>"+"<br>";
}
textofcategories += "<div id=\"save\" class=\"menutext save\">save</div>";

console.log(textofcategories);

document.getElementById("column2").innerHTML += textofcategories;
document.getElementById("test").innerHTML += textofcategories;
/*
document.getElementById("demo").innerHTML = text;*/
