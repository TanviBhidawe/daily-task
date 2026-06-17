alert("welcome to our shop");

let products =[
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1200 },
    { name: "Earphones", price: 1500 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 700 }
];



function showProducts() {
let list = "Product List\n";
  for (let i = 0; i < products.length; i++)
    {
        list +=`${i + 1}. ${products[i].name}
            ${products[i].price}\n`;
    }
   return list;
}



function calculateBill(price, quantity)
 {
      return price * quantity;

 }



let totalBill = 0;
let buyAgain = "yes";

while (buyAgain === "yes") {

    let choice = Number( prompt(showProducts() +"\nEnter Product Number:") );
    let quantity = Number(prompt( "Enter Quantity:") );


    let selected = products[choice - 1];


    if (selected) {
        let currentBill =calculateBill(selected.price, quantity);
        totalBill += currentBill;


alert(`bill:

Product : ${selected.name}
Quantity : ${quantity}

Current Bill : ₹${currentBill}

Total Bill : ₹${totalBill}` ); }

    else {

        alert("Invalid Product");
    }


    buyAgain =
        prompt(
            "Want To Buy Again? (yes/no)"
        );

}


alert(
`Thank You For Shopping 

Final Bill = ₹${totalBill}`
);
