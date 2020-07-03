function removeElement(elementId) {
// Removes an element from the document
var element = document.getElementById(elementId);
element.parentNode.removeChild(element);
}
function show_image(src, reversed, transparent) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 248;
    img.height = 160;
    img.alt = "alt";
    img.id = "game";
    if(reversed == 1) {
        img.style.cssText = "transform: scaleX(-1);"
    }

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
function play_audio(src) {
    var audio = document.createElement("audio");
    audio.src = src;
    audio.id = "music";
    // This next line will just add it to the <body> tag
    document.getElementById("game").appendChild(audio);
    document.getElementById("music").loop = true;
    document.getElementById("music").play();
}
function myFunction() {
    show_image('/assets/menu/battle/alpha-flash.gif', 0, 0);
    show_image("/assets/battle-ani/knight-m-regular-attack.gif", 0);
    show_image("/assets/battle-ani/knight-m-hit.gif", 1);
    play_audio("/assets/music/43-Suspicious.mp3")
}