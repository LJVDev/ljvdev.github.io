//textlabel
//fancylabel
//boringlabel

function greet() {
    alert("Hello, world!");
    document.getElementById("text").style.width = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
    document.getElementById("text").style.height = parseInt(window.getComputedStyle(document.getElementById("text")).height) + 10 + 'px';
}

function buttonChange(e) {
    const boringButton = document.getElementById("radio2");
    const fancyButton = document.getElementById("radio1");
    const textLabel = document.getElementById("textlabel");
    const fancyLabel = document.getElementById("fancylabel");
    const boringLabel = document.getElementById("boringlabel");

    // T T      ==   T F
    // F F      ==   T F
    // T F      ==   F T
    // F T      ==   T F

    if (e === boringButton){
        fancyButton.checked = false;
        textLabel.removeAttribute("style");
        boringLabel.removeAttribute("style");
        fancyLabel.removeAttribute("style");
    }
    else if (e === fancyButton){
        boringButton.checked = false;
        textLabel.style.fontSize = 24 + "pt";
        boringLabel.style.fontSize = 24 + "pt";
        fancyLabel.style.fontSize = 24 + "pt";
        textLabel.style.fontWeight = "bold";
        boringLabel.style.fontWeight = "bold";
        fancyLabel.style.fontWeight = "bold";
        fancyLabel.style.color = "blue";
        fancyLabel.style.textDecoration = "underline";
    }
}

function mooify() {
    document.getElementById("text").value = (document.getElementById("text").value).toUpperCase().replaceAll('.', '-Moo.')
}
