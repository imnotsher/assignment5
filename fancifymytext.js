//biggify button
function fancify(){
    document.getElementById("userText").style.fontSize = "24pt";
}
//moo button
function mooChanger(){
    document.getElementById("userText").style.textTransform = "uppercase";
    var str = document.getElementById("userText").value;
    var parts = str.split(".");
    str = parts.join(" moo.");
    document.getElementById("userText").value = str;
}
//save text button
function textSaver(){
    localStorage.setItem('savedText', document.getElementById('userText').value);
}

function textPlacer(){
    document.getElementById("userText").value = localStorage.getItem('savedText');
    
}