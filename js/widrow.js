// set eventHandler to widrow button
document.getElementById('widrow-btn').addEventListener('click', function(){
    // get widrow amount from input field
    // get input actual value to use (.value )
    const widrowField = document.getElementById('widrow-field');
    const newWidrowValueStr = widrowField.value;
    const newWidrowValue = parseFloat(newWidrowValueStr)

     // clear widrow input
     widrowField.value = '';

    // Validation number or emtry or string
    if(isNaN(newWidrowValue)){
        alert('Please provide amount as a number')
        return;
    }

    // get total widrow amount
    // get without input to use ( .innterText)
    const widrowTotalElement = document.getElementById('widrow-total');
    const widrowTotalValueStr = widrowTotalElement.innerText;
    const widrowTotalValue = parseInt(widrowTotalValueStr);

    // get current balance total amount
    const balaceTotalElement =document.getElementById('balance-total');
    const balaceTotalValueStr = balaceTotalElement.innerText;
    const balaceTotalValue = parseFloat(balaceTotalValueStr)

    // validation current total balance and widrow amount
    if(newWidrowValue > balaceTotalValue){
        alert('You have not enough balance');
        return;
    }

     // get amount to set total widrow
     const currentWidrowTotal = newWidrowValue + widrowTotalValue;
     widrowTotalElement.innerText = currentWidrowTotal;
    
    // widrow a amount to set current balance
    const currentTotalBalance = balaceTotalValue - newWidrowValue;
    balaceTotalElement.innerText = currentTotalBalance;
    
 

})


