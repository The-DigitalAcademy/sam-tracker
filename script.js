var state= {
 balance:0,
 income:0,
 expense:0,          
transactions:[        
{type : 'income', detail:'cash money',amount: 4000},
{type : 'income', detail: 'cash money',amount: 4000},
{type : 'income', detail: 'cash money', amount: 4000},
],
}
var balance = document.getElementById('balance')
var income = document.getElementById('income')
var expense = document.getElementById('expense')
var name = document.getElementById('name')
var amount = document.getElementById('amount')

var money;
var transaction;

function addButton()


 if(isValid(money) && isValid(transaction)) {  
    tableData.push(   
        
    )          
}

function display(){
  balance.innerHTML= state.balance
  income.innerHTML= state.income
  expense.innerHTML= state.expense         
           
}
display();

function isValid(value){
   if(!value) {
     return false;     
   }
   return true;       
}


