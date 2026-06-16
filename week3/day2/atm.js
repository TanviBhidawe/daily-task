let corrected_pin=1236;
let userpin=Number(prompt("enter your atm pin"));
let attempts=3;
 let balance=10000;
while(attempts>0){
     userpin=Number(prompt("enter your atm pin"));
    if(userpin===corrected_pin)
    {
        alert("pin corrected! welcome to bank of maharashtra");
    
    

    let choice;
    do
     {
       choice =Number(prompt("1.check balnce"+"\n2.deposite money"+"\n 3.withdraw money"+"\n4.exit"));
     
        if(choice==1){
            alert("your balance is:" +balance);
        }
        else if(choice==2)
        {
            let deposite=Number(prompt("enter the amount of deposite money"))
            balance=balance+deposite;
            alert("deposite successfully! new balance" +balance);
        }
        else if(choice==3){
            let withdraw=Number(prompt("enter the amount ot withdraw"));
            if(withdraw<=balance){
            balance=balance-withdraw;
            alert("withdraw successfully! new balnce"+balance);
            }
            else{
                alert("your balance is low")
            }

        }
        else if(choice==4){
            alert("thanks for using bank of maharashtra atm");
        }
        else
        {
           alert("invalid choice");
        }
        
      }while(choice!=4)
       break;

    }
    else{
        attempts--
        alert("Wrong pin!attempts left:"+ attempts)
    }
}
    if(attempts===0){
        alert(" sorry,your atm card is blocked to many attempts:");
    }
