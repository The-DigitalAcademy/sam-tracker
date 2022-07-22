var state= {
 balance:700,
 income:0,
 expense:0,          
  data:[],
}
var balance = document.getElementById('balance').value
var income = document.getElementById('income').value
var expense = document.getElementById('expense').vlaue
var name = document.getElementById('name').value
var amount = document.getElementById('amount').value

var money;
var transaction;

function input() {
  amount = Number(document.getElementById('amount').value);
  transactionName =document.getElementById('name').value;         
}

function addButton(){

  if(isValid(money) && isValid(transaction)) {  
    data.push({ 
     transactions: transaction,           
      detail:'income',  
      price,money,

    });  

    display();
  } 
  alert(income)

}



function display(){

  balance.innerHTML= state.balance
  income.innerHTML= state.income
  expense.innerHTML= state.expense         
           
}

function isValid(value){
   if(!value) {
     return false;     
   }
   return true;       
}

for (let i = 0; i < table.length; i++) {
  tableRows.innerHTML += `
  <tr>
            <td>${table[i].id}</td>
            <td>${table[i].transaction}</td>
            <td>${table[i].type}</td>
            <td>R${table[i].amount}</td>
            <td><button class="remove" onClick="removeTransaction(${i})">Remove</button></td>
          </tr>
  `;
}
