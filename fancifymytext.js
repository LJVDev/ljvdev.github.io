const bigger = document.getElementById("biggerbutton");

function greet() {
    document.getElementById("text").style.width = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
    document.getElementById("text").style.height = parseInt(window.getComputedStyle(document.getElementById("text")).width) + 10 + 'px';
}


