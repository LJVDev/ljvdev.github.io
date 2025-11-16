const bigger = document.getElementById("biggerbutton");

function greet() {
    document.getElementById("biggerbutton").style.width = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
    document.getElementById("biggerbutton").style.height = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
}


