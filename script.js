const model = {
    categories: ["hair","neck","head","ears","shirt","eyelids","eyes","iris","pupils","brows","nose","lips","mouth","bangs","background"],
    counter : 0,
};

/*List items and their numbers*/
/*console.log(categories[counter-1]+(counter-1));*/

var i;
var textofcategories = "";
var chosencategory = "";
var counter = model.counter;
var categories = model.categories;
var activecategory = '';
let categoryathand;
let numberathand;
let numberlastathand = '';
let hair = 12;
let neck = 2;
let head = 2;
let ears = 4;
let shirt = 3;
let eyelids = 1;
let eyes = 10;
let iris = 1;
let pupils = 2;
let brows = 10;
let nose = 15;
let lips = 11;
let mouth = 6;
let bangs = 7;
let background = 1;

function changingcolor(thecolorpicker) {
    var thebackground = document.getElementById("background1");
    thebackground.style.fill = thecolorpicker.value;
}
function category(chosencategory) {
    activecategory = chosencategory.innerText.toLowerCase();
    categoryathand = activecategory;
    generatenumbersview(activecategory);
}

function thenumber(chosennumber) {
    numberlastathand = numberathand;
    numberathand = chosennumber.innerText;
    newoelement = categoryathand+numberathand;
    oldoelement = categoryathand+numberlastathand;

    let defaultitem = categoryathand + '1';

    let elementathand = document.getElementById(newoelement);
    let elementlastathand = document.getElementById(oldoelement);
    document.getElementById(defaultitem).classList.remove('showbydefault');

    if (elementathand != elementlastathand) {
        elementathand.classList.remove('bydefault');
        elementathand.classList.add('show');
    }

    if (elementlastathand != '') {
        elementlastathand.classList.add('bydefault');
        elementlastathand.classList.remove('show');
    }
}

function generateview() {
    let column2 = document.getElementById("column2");

    for (i = 0; i < categories.length; i++) {
        counter++;
        chosencategory = categories[counter-1];

        textofcategories += "<div id=\""
            +chosencategory+
            "\" class=\"menutext\" onClick=\"category(this)\">"
            +chosencategory +"</div>";
    }
    textofcategories += "<div id=\"save\" class=\"menutext save\" onclick=\"download()\">save</div>";

    column2.innerHTML += textofcategories;
}

function generatenumbersview(activeone) {
    let n;
    let numbersholder = document.getElementById("numbersholder");
    var textofnumbers = "";
    let activenumber = eval(activeone);

    for (n = 1; n < activenumber+1; n++) {
        textofnumbers += "<div id=\"number"+n+"\" class=\"number\" onclick=\"thenumber(this)\">"+n+"</div>";
    }

    numbersholder.innerHTML = textofnumbers;
}

/*function download() {
    let svg = document.getElementById('avatar');
    console.log(svg);

    let blob = new Blob([svg], {type: 'image/svg+xml'});
    let url = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = url;

    image.addEventListener('load', () => URL.revokeObjectURL(url), {once: true});
}*/


