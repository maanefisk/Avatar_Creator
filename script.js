/*Here is all categories stored, counter is stored and which chosen element is stored*/
const model = {
    categories: ["hair","bangs","head","neck","ears","shirt","eyelids","eyes","iris","pupils","brows","nose","lips","mouth","background"],
    hair : '',
    neck : 'neck1',
    head : 'head1',
    ears : 'ears1',
    shirt : '',
    eyelids : 'eyelids1',
    eyes : '',
    iris : '',
    pupils : '',
    brows : '',
    nose : 'nose1',
    lips : '',
    mouth : '',
    bangs : '',
    background : '',
    palettes: ["palette1","palette2","palette3","palette4","palette5","palette6","palette7","palette8"],
};

/*List items and their numbers*/

var i;
var textofcategories = "";
var chosencategory = "";
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
                    allincategoryinner[o].setAttribute('style', 'fill:'+ thecolorpicker.value +';');
                    allincategoryinner[0].setAttribute('style', 'filter: brightness(0.85);');
                }
            }
        }
    }
    /*console.log(chosenelement.children.length);*/

    /*If categoriy is head, then all the other skinobjects get the same color generated*/
    /*Lets do bangs to hair do the same*/
    let allneck;
    let allears;
    let alleyelids;
    let allnose;
    let allbangs;

    if (activecategory == 'head') {
        for (n = 1; n <= neck; n++) {
            allneck = document.getElementById('neck'+n);
            allneck.style.fill = chosenelement.style.fill;
            allneck.style.filter = 'brightness(85%)';
        }
        for (e = 1; e <= ears; e++) {
            allears = document.getElementById('ears'+e);
            allears.style.fill = chosenelement.style.fill;
        }
        for (ey = 1; ey <= eyelids; ey++) {
            alleyelids = document.getElementById('eyelids'+ey);
            alleyelids.style.fill = chosenelement.style.fill;
            alleyelids.style.filter = 'brightness(85%)';
        }
        for (nos = 1; nos <= nose; nos++) {
            allnose = document.getElementById('nose'+nos);
            allnose.style.fill = chosenelement.style.fill;
            allnose.style.filter = 'brightness(115%)';
        }

    }
    else if (activecategory == 'hair') {
        for (ba = 1; ba <= bangs; ba++) {
            allbangs = document.getElementById('bangs'+ba);
            allbangs.style.fill = chosenelement.style.fill;
            allbangs.style.filter = 'brightness(110%)';
        }
    }
    else if (activecategory == 'neck'|| activecategory == 'ears'|| activecategory =='eyelids'|| activecategory == 'nose'|| activecategory == 'bangs') {
        for (ac = 1; ac <= eval(activecategory); ac++) {
            let skinobject = document.getElementById(activecategory+ac);
            skinobject.style.filter = 'none';
        }
    }
}

function generateview() {
    /*Make menu of categories*/
    let column2 = document.getElementById("column2");

    for (i = 0; i < categories.length; i++) {
        chosencategory = categories[i];

        textofcategories += "<button id=\""
            +chosencategory+
            "\" class=\"menutext\" onClick=\"category(this)\">"
            +chosencategory +"</button>";
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
let activenow;
function paletteswitch(butt) {
    for (j = 0; j < model.palettes.length; j++) {
        chosenpalette[0].style.display = "none";
        if (visiblepalette == model.palettes[j]) {

            if (butt.innerText == '❯' && activenow != 'palette'+model.palettes.length) {
                activenow = model.palettes[j+1];
            }
            else if (butt.innerText == '❯' && activenow == 'palette'+model.palettes.length) {
                activenow = model.palettes[0];
            }
            if (activenow == null) {
                activenow = 'palette1'
            }
            if (butt.innerText == '❮' && activenow != 'palette1') {
                activenow = model.palettes[j-1];
            }
            else if (butt.innerText == '❮' && activenow == 'palette1') {
                activenow = model.palettes[(model.palettes.length-1)];
            }
        }
    }
    visiblepalette = activenow;
    chosenpalette = document.getElementsByClassName(visiblepalette);
    chosenpalette[0].style.display = "flex";
}

function download() {
    let svg = document.getElementById('avatar').outerHTML;
    console.log(svg);

    /*const filename = 'avatar.svg';
    let svgData = svg;
    var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(svgBlob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }*/
}


