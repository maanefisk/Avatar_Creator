/*Here is all categories stored, counter is stored and which chosen element is stored*/
const model = {
    categories: ["hair","bangs","head","neck","ears","eyes","eyelids","iris","pupils","brows","nose","lips","mouth","shirt","background"],
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
    palettes: ["palette1","palette2","palette3","palette4","palette5","palette6","palette7","palette8","palette9"],
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
let visiblepalette = model.palettes[0];
let chosenpalette = document.getElementsByClassName(visiblepalette);
let activenow;

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

    /*positionslider shows up for categories that support it:*/
    let slidecontainer = document.getElementById('slidecontainer');
    let slider = document.getElementById('positionslider');
    if (activecategory == 'hair' || activecategory == 'ears' || activecategory == 'eyelids' || activecategory == 'nose' || activecategory =='mouth' || activecategory == 'lips' || activecategory == 'brows') {
        slider.value = 0;
        slidecontainer.style.display = 'block';
    } else {slidecontainer.style.display = 'none';}

    /*The right colorpalette or none*/
    if (activecategory == 'hair'||activecategory == 'brows') {
        activenow = 'palette6';
        paletteswitch();
    }
    if (activecategory == 'head'||activecategory == 'mouth'||activecategory == 'lips'||activecategory == 'ears'||activecategory == 'neck'||activecategory == 'eyelids'||activecategory == 'nose') {
        activenow = 'palette7';
        paletteswitch();
    }
    if (activecategory == 'iris') {
        activenow = 'palette4';
        paletteswitch();
    }
    let paletteholder = document.getElementById('colorpaletteholder');
    if (activecategory == 'eyes') {
        paletteholder.style.display = 'none';
    } else {paletteholder.style.display = 'flex';}
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
/*Changes color of chosen category*/
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
    let allmouth;
    let alllips;

    if (activecategory == 'head') {
        for (n = 1; n <= neck; n++) {
            allneck = document.getElementById('neck'+n);
            allneck.style.fill = chosenelement.style.fill;
            allneck.style.filter = 'brightness(89%) saturate(110%) contrast(110%)';
        }
        for (e = 1; e <= ears; e++) {
            allears = document.getElementById('ears'+e);
            allears.style.fill = chosenelement.style.fill;
        }
        for (ey = 1; ey <= eyelids; ey++) {
            alleyelids = document.getElementById('eyelids'+ey);
            alleyelids.style.fill = chosenelement.style.fill;
            alleyelids.style.filter = 'brightness(89%) saturate(110%) contrast(110%)';
            if (alleyelids.style.fill == 'rgb(0, 0, 0)') {
                alleyelids.style.fill = 'rgb(48,48,48)';
            }
        }
        for (mou = 1; mou <= mouth; mou++) {
            allmouth = document.getElementById('mouth'+mou);
            allmouth.style.fill = chosenelement.style.fill;
            allmouth.style.filter = 'brightness(60%) saturate(110%) contrast(110%)';
            if (allmouth.style.fill == 'rgb(0, 0, 0)') {
                allmouth.style.fill = 'rgb(48,48,48)';
            }
        }
        for (lip = 1; lip <= lips; lip++) {
            alllips = document.getElementById('lips'+lip);
            alllips.style.fill = chosenelement.style.fill;
            alllips.style.filter = 'brightness(90%) saturate(110%) contrast(110%)';
            if (alllips.style.fill == 'rgb(0, 0, 0)') {
                alllips.style.fill = 'rgb(48,48,48)';
            }
        }
        for (nos = 1; nos <= nose; nos++) {
            allnose = document.getElementById('nose'+nos);
            allnose.style.fill = chosenelement.style.fill;

            if (allnose.style.fill.length <=15 ) {
                allnose.style.filter = 'brightness(118%) contrast(95%)';
            }
            else if (allnose.style.fill.length ==16) {
                allnose.style.filter = 'brightness(115%) contrast(98%)';
            }
            else if (allnose.style.fill.length ==17) {
                allnose.style.filter = 'brightness(110%)';
            }
            else {
                allnose.style.filter = 'brightness(105%)';
            }
            if (allnose.style.fill == 'rgb(0, 0, 0)') {
                allnose.style.fill = 'rgb(29,29,29)';
            }
            if (allnose.style.fill == 'rgb(255, 255, 255)') {
                allnose.style.fill = 'rgb(227,227,227)';
            }
        }

    }
    else if (activecategory == 'hair') {
        for (ba = 1; ba <= bangs; ba++) {
            allbangs = document.getElementById('bangs'+ba);
            allbangs.style.fill = chosenelement.style.fill;

            if (allbangs.style.fill.length <=15 ) {
                allbangs.style.filter = 'brightness(118%) contrast(95%)';
            }
            else if (allbangs.style.fill.length ==16) {
                allbangs.style.filter = 'brightness(115%) contrast(98%)';
            }
            else if (allbangs.style.fill.length ==17) {
                allbangs.style.filter = 'brightness(110%)';
            }
            else {
                allbangs.style.filter = 'brightness(105%)';
            }
            if (allbangs.style.fill == 'rgb(0, 0, 0)') {
                allbangs.style.fill = 'rgb(29,29,29)';
            }
            if (allbangs.style.fill == 'rgb(255, 255, 255)') {
                allbangs.style.fill = 'rgb(227,227,227)';
            }
        }
        for (bro = 1; bro <= brows; bro++) {
            allbrows = document.getElementById('brows'+bro);
            allbrows.style.fill = chosenelement.style.fill;
        }
    }
    else if (activecategory == 'neck'|| activecategory == 'ears'|| activecategory =='eyelids'|| activecategory == 'nose'|| activecategory == 'bangs'|| activecategory == 'mouth'|| activecategory == 'lips') {
        for (ac = 1; ac <= eval(activecategory); ac++) {
            let skinobject = document.getElementById(activecategory+ac);
            skinobject.style.filter = 'none';
        }
    }
}
/*Enables positioning for certain elements with slider*/
function positionelement(slider) {
    if (activecategory == 'hair' || activecategory == 'ears' || activecategory == 'eyelids' || activecategory == 'nose' || activecategory =='mouth' || activecategory == 'lips' || activecategory == 'brows') {
        for (x = 1; x <= eval(activecategory); x++) {
            let allincategory = document.getElementById(activecategory+x);
            let parentofall = allincategory.parentElement;
            if (activecategory == 'eyelids') {
                parentofall.style.transform = 'translateY('+ (slider.value/2) +'px)';
            } else {
                parentofall.style.transform = 'translateY('+ slider.value +'px)';
            }

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

    if (activeone == 'hair' || activeone == 'bangs' || activeone == 'ears' || activeone == 'eyes' || activeone == 'eyelids' || activeone == 'iris' || activeone == 'pupils' || activeone == 'brows' || activeone == 'nose' || activeone == 'lips' || activeone == 'mouth') {
        textofnumbers += "<button id=\"xout"+n+"\" class=\"number\" onclick=\"removestyle()\">"+'╳'+"</button>";
    }


    numbersholder.innerHTML = textofnumbers;
}

function removestyle() {
    chosenelement.classList.remove('show');
    chosenelement.classList.add('bydefault');
}

function paletteswitch(butt) {
    chosenpalette[0].style.display = "none";
    if (typeof butt != 'undefined') {
        for (j = 0; j < model.palettes.length; j++) {
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


