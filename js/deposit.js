// set eventHandler to deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit amount from input field
    // get input actual value to use (.value )
    const depositField = document.getElementById('deposit-field');
    const newDepositValueStr = depositField.value;
    const newDepositValue = parseFloat(newDepositValueStr)

     // clear the deposit field
     depositField.value = '';

    // Validation number or emtry or string
    if(isNaN(newDepositValue)){
        alert('Please provide amount as a number')
        return;
    }

    // get total deposit amount
    // get without input to use ( .innterText)
    const depositTotalElement = document.getElementById('deposit-total')
    const prevDepositValueStr = depositTotalElement.innerText;
    const prevDepositValue = parseFloat(prevDepositValueStr)
   
    // get current balance total amount
    const balaceTotalElement =document.getElementById('balance-total');
    const balaceTotalValueStr = balaceTotalElement.innerText;
    const balaceTotalValue = parseFloat(balaceTotalValueStr)

     // add number to set total deposit
     const currentDepositTotal = newDepositValue + prevDepositValue;
     depositTotalElement.innerText = currentDepositTotal;

    // add deposit to update total Balance
    const currentTotalBalance = newDepositValue + balaceTotalValue;
    balaceTotalElement.innerText = currentTotalBalance;


})

