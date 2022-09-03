// console.log("magical notes");
showNotes()

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTitle = document.getElementById('addTitle');
    let title = localStorage.getItem("title")
    if (title == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(title);
    }
    titleObj.push(addTitle.value)
    localStorage.setItem("title", JSON.stringify(titleObj))
    addTitle.value = "";
    // console.log(title);

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";

    showNotes();
})

function showNotes() {
    let title = localStorage.getItem("title")
    if (title == null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(title);
    }

    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 id="h5" class="titleTxt">${titleObj[index]}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;
    });

    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))


    let title = localStorage.getItem("title")
    if (title == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(title)
    }
    titleObj.splice(index, 1);
    localStorage.setItem("title", JSON.stringify(titleObj))
    showNotes();
}


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let inputval = search.value.toLowerCase();
    // console.log("input fired",inputval);

    let noteCards = document.getElementsByClassName('noteCard');
    // console.log("notecard  :- ",noteCards);

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let CardTxt = element.getElementsByTagName("h5")[0].innerText;
        console.log(cardTxt.includes(inputval) || CardTxt.includes(inputval));

        if (cardTxt.includes(inputval) || CardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }


    })

})
