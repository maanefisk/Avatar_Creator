const model = {
    categories: ["hair","neck","head","ears","shirt","eyelids","eyes","iris","pupils","brows","nose","lips","mouth","bangs","background"],
    counter : 0,
    hair : '',
    neck : '',
    head : '',
    ears : '',
    shirt : '',
    eyelids : '',
    eyes : '',
    iris : '',
    pupils : '',
    brows : '',
    nose : '',
    lips : '',
    mouth : '',
    bangs : '',
    background : '',
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
let chosenelement = '';
let defaultitem = '';
let defaultbox;

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

function removepreviousStyle() {
    let savedelement = document.getElementById(model[categoryathand]);
    savedelement.classList.toggle('bydefault');
    savedelement.classList.toggle('show');
}

function category(chosencategory) {
    activecategory = chosencategory.innerText.toLowerCase();
    categoryathand = activecategory;
    generatenumbersview(activecategory);

    if (model[categoryathand] == '') {
        defaultbox = categoryathand + '1';
        defaultitem = document.getElementById(defaultbox);
        chosenelement = defaultitem;
        chosenelement.classList.remove('showbydefault');
        chosenelement.classList.add('bydefault');
        chosenelement.classList.toggle('bydefault');
        chosenelement.classList.add('show');

    }
    if (model[categoryathand] != '') {
        removepreviousStyle();
        defaultbox = model[categoryathand];
        let saveditem = document.getElementById(model[categoryathand]);
        chosenelement = saveditem;
        chosenelement.classList.remove('showbydefault');
        chosenelement.classList.add('bydefault');
        chosenelement.classList.toggle('bydefault');
        chosenelement.classList.add('show');
    }
    model[categoryathand] = defaultbox;
}

function thenumber(chosennumber) {
    numberathand = chosennumber.innerText;
    newoelement = categoryathand+numberathand;

    removepreviousStyle();

    model[categoryathand] = newoelement;

    chosenelement.classList.remove('show');
    chosenelement.classList.add('bydefault');

    let elementathand = document.getElementById(newoelement);

    elementathand.classList.toggle('bydefault');
    elementathand.classList.toggle('show');

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
        textofnumbers += "<button id=\"number"+n+"\" class=\"number\" onclick=\"thenumber(this)\">"+n+"</button>";
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


