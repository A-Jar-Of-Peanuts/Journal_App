var cur = document.getElementById("header");
cur.innerText = "Entry " + window.localStorage.getItem("Entry");

document.getElementById("back").onclick = function() {
    window.location.href = "index.html";
};