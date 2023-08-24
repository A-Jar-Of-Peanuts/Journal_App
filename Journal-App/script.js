var entries = 1; 

if (window.localStorage.getItem("TotalEntries") == null) {
    window.localStorage.setItem("TotalEntries", 1); 
    console.log("haw");
} else {
    entries = parseInt(window.localStorage.getItem("TotalEntries")); 
    for(var i = 2; i<=entries; i++) {
        var temp = i-1;
        var oldName = ""+temp;
        var cur = document.getElementById(oldName);

        var newName = ""+i;
        var newDiv = document.createElement("div");
        var newText = document.createElement("p");
        newText.innerText = "Entry "+i;
        newDiv.setAttribute("id", newName);
        var param = "goToJournal(" + i + ")";
        newDiv.setAttribute("onmousedown", param);
        newDiv.setAttribute("class", "entry");
        newText.setAttribute("id", "body"+i);

        newDiv.appendChild(newText);
        document.body.insertBefore(newDiv, cur);
    }
    console.log("ye");
}

document.getElementById("addEntry").onclick = function() {
    var oldName = ""+entries
    var cur = document.getElementById(oldName);

    entries+=1; 
    window.localStorage.setItem("TotalEntries", entries);
    var newName = ""+entries;
    var newDiv = document.createElement("div");
    var newText = document.createElement("p");
    newText.innerText = "Entry "+entries;
    newDiv.setAttribute("id", newName);
    var param = "goToJournal(" + entries + ")";
    newDiv.setAttribute("onmousedown", param);
    newDiv.setAttribute("class", "entry");
    newText.setAttribute("id", "body"+entries);

    newDiv.appendChild(newText);
    document.body.insertBefore(newDiv, cur);
};

function goToJournal(i) {
    window.localStorage.setItem("Entry", i);
    window.location.href = "journalEntry.html";
}