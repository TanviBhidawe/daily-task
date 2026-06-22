function showResult(){
let roll =document.getElementById("roll").value;
let name =document.getElementById("name").value;
let java =Number(document.getElementById("java").value);
let dbms =Number(document.getElementById("dbms").value);
let dcn =Number(document.getElementById("dcn").value);
let mic =Number(document.getElementById("mic").value);
if(roll==""||name==""){
alert("Enter all details");
return;
}
let total =java+dbms+dcn+mic;
let percentage =total/4;
let status;
let grade;
let message;

if(percentage>=40){
status="PASS";
message="Good Job";
}
else{
status="FAIL";
message="better luck for next time";
}
if(percentage>=80){
grade="A";}

else if(percentage>=60){
grade="B";
}

else if(percentage>=40){
grade="C";
}

else{
grade="d";
}


document.getElementById("result")
.innerHTML=`<h3>Result</h3>
Student Name :${name}
<br><br>
Roll No :${roll}
<br><br>
Percentage :${percentage}%
<br><br>
Status :${status}
<br><br>
Grade :${grade}
<br><br>
Message :${message}`;
document.getElementById("result")
.style.display = "block";
document.getElementById("roll").value = "";
document.getElementById("name").value = "";
document.getElementById("java").value = "";
document.getElementById("dbms").value = "";
document.getElementById("dcn").value = "";
document.getElementById("mic").value = "";
}
document.getElementById("roll").onclick =
function(){
document.getElementById("result")
.style.display ="none";};
document.getElementById("name").onclick =
function(){
document.getElementById("result")
.style.display =
"none";};


