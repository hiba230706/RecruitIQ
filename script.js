const uploadZone = document.getElementById("uploadZone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const analyzeBtn = document.getElementById("analyzeBtn");

let files = [];

uploadZone.addEventListener("click", () => {
fileInput.click();
});

fileInput.addEventListener("change", (e) => {
handleFiles(e.target.files);
});

uploadZone.addEventListener("dragover", (e) => {
e.preventDefault();
});

uploadZone.addEventListener("drop", (e) => {
e.preventDefault();
handleFiles(e.dataTransfer.files);
});

function handleFiles(selectedFiles){

for(let file of selectedFiles){
files.push(file)

let div = document.createElement("div")
div.textContent = file.name

fileList.appendChild(div)
}

}

analyzeBtn.addEventListener("click", async ()=>{

if(files.length === 0){
alert("Upload resumes first")
return
}

for(let file of files){

const text = await file.text()

const result = await fetch("http://127.0.0.1:5000/analyze",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
resume:text
})
})

const data = await result.json()

addCandidate(data)

}

})

function addCandidate(candidate){

const table = document.querySelector("#resultsTable tbody")

const row = document.createElement("tr")

row.innerHTML = `
<td>${candidate.name}</td>
<td>${candidate.skills}</td>
<td>${candidate.experience}</td>
<td>${candidate.score}</td>
`

table.appendChild(row)

}