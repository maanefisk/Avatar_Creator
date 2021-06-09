/*Here is all categories stored, counter is stored and which chosen element is stored*/
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
    palettes: ["palette1","palette2","palette3","palette4","palette5","palette6","palette7","palette8"],
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

let visiblepalette = model.palettes[0];
let chosenpalette = document.getElementsByClassName(visiblepalette);

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
/*Changes color of hair of chosen category*/
function changingcolor(thecolorpicker) {
    let o = 0;
    if (chosenelement == '') {
        document.getElementById('background1').style.fill = thecolorpicker.style.background || thecolorpicker.value;
    } else {
        /*Gives the background if the colorchooser is DIV/Not customizable*/
        chosenelement.style.fill = thecolorpicker.style.background || thecolorpicker.value;
        /*Gives the background if the colorchooser is INPUT/Customizable*/

        /*Makes all other elements in category change to the color you've chosen*/
        for (x = 1; x <= eval(activecategory); x++) {
            let allincategory = document.getElementById(activecategory+x);
            allincategory.style.fill = chosenelement.style.fill;
            let allincategoryinner = allincategory.children;
            /*If element contains more parts, it gives a lighter color to other parts to make it look prettier*/
            if (allincategory.children.length != 0) {
                for (o = 0; o < allincategory.children.length; o++) {
                    allincategoryinner[o].setAttribute('style', 'fill:'+ thecolorpicker.value +';')
                    allincategoryinner[0].setAttribute('style', 'filter: brightness(0.85);')
                }
            }
        }
    }
    /*console.log(chosenelement.children.length);*/
}

function generateview() {
    /*Make menu of categories*/
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

    /*Make palette1 appear*/
    chosenpalette[0].style.display = "flex";
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

function paletteswitch(butt) {
    let activenow = '';

    if (visiblepalette == 'palette8' && butt.innerText == '❯' || visiblepalette == 'palette1' && butt.innerText == '❮') {
        return;
    } else {
        for (j = 0; j < model.palettes.length; j++) {
            chosenpalette[0].style.display = "none";
            if (visiblepalette == model.palettes[j]) {
                if (butt.innerText == '❯') {
                    activenow = model.palettes[j+1];
                } else {activenow = model.palettes[j-1];}
            }
        }
        visiblepalette = activenow;
        chosenpalette = document.getElementsByClassName(visiblepalette);
        chosenpalette[0].style.display = "flex";
    }
}

function download() {
    let svg = document.getElementById('avatar').outerHTML;
    console.log(svg);
}


