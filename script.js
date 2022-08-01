var state = {
  balance: 500,
  income: 500,
  expense: 500,
  data: [],
}


var money;
var transaction;

// function acceptD(value) {
//   if (!value) {
//     return false;
//   }
//   return true;
// }

// function input() {
//   amount = Number(document.getElementById('amount').value);
//   // transactionName = document.getElementById('name').value;
// }

function addButton() {
  transactionName = document.getElementById('name').value;

  console.log(name);
  // if (acceptD(money) && acceptD(transaction)) {
  //   data.push({
  //     transactions: transaction,
  //     detail: 'Income',
  //     price, money, income


  //   });

  //   display();
  // }

}
function display() {
  var balance = document.getElementById('balance')
  var income = document.getElementById('income')
  var expense = document.getElementById('expense')
  }
  balance.innerHTML = state.balance
  income.innerHTML = state.income
  expense.innerHTML = state.expense
display();

