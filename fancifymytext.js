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
    
    const fancify = () => {
        textLabel.style.fontSize = 24 + "pt";
        boringLabel.style.fontSize = 24 + "pt";
        fancyLabel.style.fontSize = 24 + "pt";
    }

    const dullify = () => {
        textLabel.style.all = "revert";
        boringLabel.style.all = "revert";
        fancyLabel.style.all = "revert";
    }
    // T T      ==   T F
    // F F      ==   T F
    // T F      ==   F T
    // F T      ==   T F


    if ((boringButton.checked && fancyButton.checked) || (!boringButton.checked && !fancyButton.checked)) {
        boringButton.checked = false;
        fancyButton.checked = false;
        e.checked = true;
    }

    switch (e) {
        case boringButton:
            fancyButton.checked = false;
            fancify()
        case fancyButton:
            boringButton.checked = false;
            dullify()
    }
}
