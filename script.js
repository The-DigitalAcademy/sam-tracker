var state = {
 income :0,
 expense :0, 
 transactions: [
 {type:'income',detail:'salary',amount: 150},
 {type:'expense',detail:'petrol',amount:300},
 ],     
}

var income=document.getElementById('income')
var expense=document.getElementById('expense')

// display everything
income.innerHTML=state.income
expense.innerHTML=state.expense