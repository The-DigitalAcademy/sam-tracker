var state = {
 balance:0,          
 income :0,
 expense :0, 
 transactions: [
           {type:'income',detail:'salary',amount: 150},
           {type:'expense',detail:'petrol',name:300},
           {type:'expense',detail:'salon',amount:300},
 ]    
}

var income=document.getElementById('income')
var expense=document.getElementById('expense')
var amount=document.getElementById('amount')

function addName() {
           name = document.getElementById('name').value
           console.log(name);
}

// display everything
function display() {}
display();
