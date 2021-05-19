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
let categoryathand = '';
let numberathand;
let numberlastathand = '';
let chosenelement = '';

/*How many elements inside each category:*/
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

    elementathand.classList.toggle('bydefault');
    elementathand.classList.toggle('show');
    if ((elementathand != elementlastathand) && (elementlastathand != null)) {
        elementlastathand.classList.add('bydefault');
        elementlastathand.classList.remove('show');
    }

    chosenelement = elementathand;
}
function changingcolor(thecolorpicker) {
    let chosenelementinner = chosenelement.children;
    let o = 0;
    chosenelement.style.fill = thecolorpicker.value;

    if (chosenelement.children.length != 0) {
        for (o = 0; o < chosenelement.children.length; o++) {
            chosenelementinner[o].setAttribute('style', 'fill:'+ thecolorpicker.value +';')
            chosenelementinner[0].setAttribute('style', 'filter: brightness(0.85);')
        }
    }

    /*console.log(chosenelementinner.children.length);*/
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


