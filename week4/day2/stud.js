let students=[];

function showResult()
{

const student={
name:document.getElementById("name").value,
roll:document.getElementById("roll").value,
java:Number(document.getElementById("java").value),
mic:Number(document.getElementById("mic").value),
dcn:Number(document.getElementById("dcn").value),
ees:Number(document.getElementById("ees").value)
};

if(student.name===""||student.roll===""||student.java===""||student.mic===""||student.dcn===""||student.ees===""){
alert("Fill all fields");
return;
}
student.total=student.java+student.mic+student.dcn+student.ees;
student.average=(student.total/4).toFixed(2);
student.result=student.average>=40?"PASS":"FAIL";
students.push(student);
displayResult(student);
updateStatistics();
clearInput();
}
function displayResult(student)
{
document.getElementById("result").innerHTML=`
<h3>${student.name}</h3>
<p>Roll : ${student.roll}</p>
<p>Total : ${student.total}</p>
<p>Average : ${student.average}</p>
<p>Result : ${student.result}</p>`;
}

function updateStatistics()
{
document.getElementById("total").innerText=students.length;
const average=students.reduce((sum,s)=>sum+Number(s.average),0)/students.length;
document.getElementById("avg").innerText=average.toFixed(2);
const highest=Math.max(...students.map(s=>s.total));
document.getElementById("highest").innerText=highest;
const passed=students.filter(s=>s.result==="PASS").length;
document.getElementById("pass").innerText=passed;
document.getElementById("fail").innerText=students.length-passed;
const toppers=[...students].sort((a,b)=>b.total-a.total).slice(0,3);
document.getElementById("topperList").innerHTML=
toppers.map((s,index)=>`<p>${index+1}. ${s.name} : ${s.total}</p>`).join("");}


function clearInput(){
document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("java").value="";
document.getElementById("mic").value="";
document.getElementById("dcn").value="";
document.getElementById("ees").value="";

}