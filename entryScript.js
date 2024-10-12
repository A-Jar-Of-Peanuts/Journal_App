var cur = document.getElementById("header");
cur.innerText = "Entry " + window.localStorage.getItem("Entry");

var id = "entry" + window.localStorage.getItem("Entry");
if (window.localStorage.getItem(id) != null) {
    document.getElementById("bodyText").value = window.localStorage.getItem(id);
}


document.getElementById("back").onclick = function() {
    window.location.href = "index.html";
};

document.getElementById("save").onclick = function() {
    var text = document.getElementById("bodyText").value; 
    window.localStorage.setItem(id, text);
};