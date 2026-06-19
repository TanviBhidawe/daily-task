
let balance = 0;
let income = 0;
let expense = 0;

function addTransaction() {

    let nameInput =document.getElementById("name");

    let amountInput =document.getElementById("amount");
    let name = nameInput.value;
    let amount = Number(amountInput.value);
    if (name == "" || amountInput.value == "") {
        alert("Enter details");
        return;
    }

    balance=balance+ amount;
    if (amount > 0) {
        income=income + amount;
    } 
    else {
        expense =   expense + Math.abs(amount);
    }
   updateValues();

    let item =document.createElement("li");

    item.innerHTML =
    `${name} - ₹${amount}
    <button onclick="removeTransaction(this, ${amount})">delete </button>`;

  document.getElementById("list").appendChild(item);
   nameInput.value = "";
   amountInput.value = "";
}


function removeTransaction(button, amount) {

    balance = balance -amount;
   if (amount > 0) {
        income = income - amount;
    }
    else {
        expense=expense -Math.abs(amount);
    }

    updateValues();

  button.parentElement.remove();

}

function updateValues() {

document.getElementById("balance")
.innerText = balance;

document.getElementById("income")
.innerText = income;

document.getElementById("expense")
.innerText = expense;

}