let employees = [];
  let createEmployee=(id,name,role,department,salary)=>
{
  return{id,name,role,department,salary};
}

function displayEmployees(){
let box =document.getElementById("profiles");
box.innerHTML="";
employees.forEach(function(emp,index){
box.innerHTML+= `
<div class="card">
<h3>${emp.name}</h3>
<p>ID : ${emp.id}</p>
<p>Role : ${emp.role}</p>
<p>Department :
${emp.department}</p>
<p>Salary :
${emp.salary}</p>
<button
onclick="removeEmployee(${index})">Remove</button>
</div>`;});

}

function addEmployee(){
let id =document.getElementById("empId").value;
let name =document.getElementById("name").value;
let role =document.getElementById("role").value;
let department =document.getElementById("department").value;
let salary =document.getElementById("salary").value;

if(id===""||name===""||role===""||department===""||salary==="")
{
 alert("Enter all details");
 return;
}

let employee =createEmployee(id,name,role,department,salary);
employees=[...employees,employee];
displayEmployees();
document.getElementById("empId").value="";
document.getElementById("name").value="";
document.getElementById("role").value="";
document.getElementById("department").value="";
document.getElementById("salary").value="";
}

function removeEmployee(index){
employees.splice(index,1);

displayEmployees();

}
