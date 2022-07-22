var state = {
  balance: 500,
  income: 500,
  expense: 500,
  data: [],
}
function displayS() {
  var balance = document.getElementById('balance')
  var income = document.getElementById('income')
  var expense = document.getElementById('expense')
}
var money;
var transaction;

function input() {
  amount = Number(document.getElementById('amount').value);
  transactionName = document.getElementById('name').value;
}

function addButton() {

  if (isValid(money) && isValid(transaction)) {
    data.push({
      transactions: transaction,
      detail: 'Income',
      price, money, income


    });

    display();
  }

}
function display() {
  tableData.innerHTML = `<tr class="table">
  <th>Detail</th>
  <th>Group</th>
  <th>Amount</th>
</tr>`;
  for (let i = 0; i < table.length; i++) {
    tableData.innerHTML += `
  <tr>
  <td>${tableData[i].Detail}</td>
  <td>${tableData[i].Group}</td>
  <td>${tableData[i].Amount}</td>
  <td><button class="remove" onClick="removeTransaction(${i})">Remove</button></td>
</tr>
`;
  }
}

function display() {
  balance.innerHTML = state.balance
  income.innerHTML = state.income
  expense.innerHTML = state.expense

};

display();

console.log('enter your stores');
function isValid(value) {
  if (!value) {
    return false;
  }
  return true;
}
display()