function loadTextSlow(pos, elem) {
    var texts = [
        "Hey!",
        "I am Aqueel...",
        "Nice to meet you!",
        "You can browse my projects..",
        "or find my resume below.",
        "Welcome to my website!"
    ];
    if(pos < texts.length) {
        elem.textContent = "";
        var chars = texts[pos].split("");
        timeOutAddText(elem, chars, 0, pos);
    }
}

function timeOutAddText(elem, chars, index, pos) {
    if(index < chars.length) {
        var randomTimer = Math.floor(150 + Math.random()*100);
        setTimeout(function () {
            elem.textContent += chars[index];
            timeOutAddText(elem, chars, ++index, pos);
        }, randomTimer)
    } else {
        setTimeout(function () {
            loadTextSlow(++pos, elem);
        }, 1500);
    }
}

var blinkText = document.querySelector("#blinking-text");
loadTextSlow(0, blinkText);
