import { supabase } from "./supabase.js"

async function signIn() {

const { data, error } = await supabase.auth.signInWithOtp({
email: prompt("Enter email to login")
})

if(error){
alert(error.message)
}

}

async function getUser(){

const { data } = await supabase.auth.getUser()

return data.user

}

signIn()
import { supabase } from "./supabase.js"

let currentNote = null

async function loadNotes(){

const { data } = await supabase
.from("notes")
.select("*")
.order("updated_at",{ascending:false})

const list = document.getElementById("notesList")
list.innerHTML = ""

data.forEach(note=>{

const div = document.createElement("div")
div.className="noteCard"
div.innerText=note.title

div.onclick=()=>openNote(note)

list.appendChild(div)

})

}

function openNote(note){

currentNote = note

document.getElementById("noteTitle").value = note.title
document.getElementById("noteContent").value = note.content

}

async function saveNote(){

const user = await getUser()

const title = document.getElementById("noteTitle").value
const content = document.getElementById("noteContent").value

if(currentNote){

await supabase
.from("notes")
.update({
title,
content,
updated_at:new Date()
})
.eq("id",currentNote.id)

}else{

await supabase
.from("notes")
.insert({
title,
content,
user_id:user.id
})

}

showSavedPopup()
function showSavedPopup(){

const popup = document.getElementById("savePopup")

popup.classList.add("show")

setTimeout(()=>{
popup.classList.remove("show")
},2000)

}

loadNotes()

}
