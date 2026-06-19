
let darkbtn = document.getElementById("darkBtn");
let lightbtn = document.getElementById("lightBtn");
let incbtn = document.getElementById("incBtn");
let decbtn = document.getElementById("decBtn");
let showbtn = document.getElementById("showBtn");


let title = document.getElementById("title");
let output = document.getElementById("output");
let inputBox = document.getElementById("inputBox");


  function darkmode() {
    document.body.style.backgroundColor= "black";
};
darkBtn.onclick =darkmode;


lightBtn.onclick = function () {
    document.body.style.backgroundColor= "white";
};


incBtn.onclick = function () {
    title.style.fontSize = "50px";
    title.style.color="purple"
};


decBtn.onclick = function () {
    title.style.fontSize = "30px";
    
};


showBtn.onclick = function () {
    output.style.marginTop= "20px";
    output.style.padding= "10px";
    output.style.height= "20px";
    output.style.border= "1px solid gray";
    output.style.borderRadius="5px"
    output.innerText = inputBox.value;
    output .style.backgroundColor="skyblue"
    output.style.border="1px solid blue"
    output.style.fontSize="20px"
};