const defaultNotes=[
{id:1,title:"Study",content:"Practice Java"},
{id:2,title:"Assignment",content:"Complete Notes App"},
];


let notes=JSON.parse(localStorage.getItem("notes"))|| defaultNotes;
let editId=null;
const title=document.getElementById("title");
const content=document.getElementById("content");
const addBtn=document.getElementById("addBtn");
const notesBox=document.getElementById("notesBox");

function saveNotes(){
localStorage.setItem("notes",JSON.stringify(notes));}

function clearInputs(){
title.value="";content.value="";}

function addNote(){
let noteTitle=title.value.trim();
let noteContent=content.value.trim();

if(noteTitle===""||noteContent===""){
alert("Fill all fields");
return;}

if(editId){
notes=notes.map(function(note){
if(note.id===editId){
note.title=noteTitle;
note.content=noteContent;}
return note;
});

editId=null;
addBtn.innerText="Add Note";
}

else{
notes.push({
id:Date.now(),
title:noteTitle,
content:noteContent
});
}
saveNotes();
displayNotes();
clearInputs();
}

function displayNotes(){
notesBox.innerHTML="";
notes.forEach(function(note){
notesBox.innerHTML+=`
<div class="card">
<h3>${note.title}</h3>
<p>${note.content}</p>
<button  class="edit" onclick="editNote(${note.id})">Edit</button>
<button  class="remove" onclick="deleteNote(${note.id})">Remove</button>

</div>`;

});

}


function editNote(id){
let note=notes.find(function(note){
return note.id===id;});
title.value=note.title;
content.value=note.content;
editId=id;
addBtn.innerText="Update Note";}

function deleteNote(id){
notes=notes.filter(function(note){
return note.id!==id;
});
saveNotes();
displayNotes();
}
displayNotes();

