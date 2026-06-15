let  student_name=prompt("enter student name:");
console.log(student_name);
let s1= Number(prompt("enter student java subject marks"));

let s2=Number(prompt("enter student  dbms subject  marks"));

let s3=Number(prompt("enter student dsu subject marks"));

let s4=Number(prompt("enter student dcn subject marks"));
let total=s1+s2+s3+s4;
let result= (total/400)*100;
console.log("student name:"+student_name);
console.log("java:"+s1);
console.log("dbms:"+s2);
console.log("dsu:"+s3);
console.log("dcn:"+s4);
console.log("percentage:"+result+"%");
alert("student_name:"+student_name+"\njava:"+s1+"\ndbms:"+s2+"\ndsu:"+s3+"\ndcn:"+s4+"\n percentage:"+result+"%");


