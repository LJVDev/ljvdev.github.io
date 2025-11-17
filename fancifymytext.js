//textlabel
//fancylabel
//boringlabel

function greet() {
    document.getElementById("text").style.width = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
    document.getElementById("text").style.height = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
}

function buttonChange(e) {
    const boringButton = document.getElementById("radio1");
    const fancyButton = document.getElementById("radio2");
    const textLabel = document.getElementById("textlabel");
    const fancyLabel = document.getElementById("fancylabel");
    const boringLabel = document.getElementById("boringlabel");

    // T T      ==   T F
    // F F      ==   T F
    // T F      ==   F T
    // F T      ==   T F

    switch (e) {
        case boringButton:
            fancyButton.checked = false;
            textLabel.style.all = "none";
            boringLabel.style.all = "none";
            fancyLabel.style.all = "none";
            break;
        case fancyButton:
            boringButton.checked = false;
            textLabel.style.fontSize = 24 + "pt";
            boringLabel.style.fontSize = 24 + "pt";
            fancyLabel.style.fontSize = 24 + "pt";
            break;
    }
}
