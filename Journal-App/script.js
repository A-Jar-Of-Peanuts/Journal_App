var entries = 1; 

document.getElementById("addEntry").onclick = function() {
    var oldName = "entry"+entries
    var cur = document.getElementById(oldName);

    entries+=1; 
    var newName = "entry"+entries;
    var newDiv = document.createElement("div");
    var newText = document.createElement("p");
    newText.innerText = "Entry "+entries;
    newDiv.setAttribute("id", newName);
    newDiv.setAttribute("onmousedown", "goToJournal()");
    newText.setAttribute("id", "body"+entries);

    newDiv.appendChild(newText);
    document.body.insertBefore(newDiv, cur);
};

function goToJournal() {
    window.localStorage.setItem("Entry", entries);
    window.location.href = "journalEntry.html";
}