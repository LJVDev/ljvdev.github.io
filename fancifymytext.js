const bigger = document.getElementById("biggerbutton");

function greet() {
    document.getElementById("biggerbutton").style.width = parseInt(window.getComputedStyle(document.getElementById("biggerbutton")).width) + 1 + 'px';
    document.getElementById("biggerbutton").style.height = document.getElementById("biggerbutton").style.width = parseInt(window.getComputedStyle(document.getElementById("biggerbutton")).width) + 1 + 'px';
}


