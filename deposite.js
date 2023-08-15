// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
//step-2.5: For input field use .value to the the value inside the input field
// step-3: get the current deposit total
// step-3.5: for non-input(element other than input, textarea) use innerText to get the text
// step-4: add numbers to set the total deposit
// step-4.5: set the deposit total
// step-5: get ballance current total
// step-6: calculate current total balance
// step-6.5: set the balance total
// step-7: clear the deposit field

// work 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // work 2
    const inputField = document.getElementById('deposit-field');
    // work 2.5
    const depositInputString = inputField.value;
    // work 2.6 string to number convert
    const depositAmount = parseFloat(depositInputString);

    // work 3
    const currentDepositElement = document.getElementById('deposit-total');
    // work 3.5
    const currentDepositSring = currentDepositElement.innerText;
    // work 3.6 string to number convert
    const depositTotal = parseFloat(currentDepositSring);

    // work 4
    currentDepositTotal = depositTotal + depositAmount;
    //  work 4.5 set deposit Total
    currentDepositElement.innerText = currentDepositTotal;

    // work 5
    const balanceElement = document.getElementById('balance-total');
    // work 5.5
    const balanceValueString = balanceElement.innerText;
    // work 5.6 string to number convert
    const currentBalanceTotal = parseFloat(balanceValueString);
    
    // work 6
    const nowBalanceTotal = currentBalanceTotal + depositAmount;
    // work 6.5 set balance total
    balanceElement.innerText = nowBalanceTotal;
    
    // work 7
    inputField.value = '';
})
